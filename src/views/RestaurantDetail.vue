<template>
  <Loading :active="isLoading"></Loading>
  <div class="detail pt-md-5">
    <div class="container py-5 px-4">
      <nav aria-label="breadcrumb mb-6">
        <ol class="breadcrumb fs-5">
          <li class="breadcrumb-item text-primary"><a href="#">首頁</a></li>
          <li class="breadcrumb-item text-primary">
            <a href="#/restaurants">品嘗美食</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ restaurant.Name }}
          </li>
        </ol>
      </nav>
      <section class="restaurant-carousel mb-3">
        <Carousel :pictures="restaurantPictures"></Carousel>
      </section>
      <section class="restaurant-detail mb-6">
        <h1 class="fw-light fs-2 mb-3">{{ restaurant.Name }}</h1>
        <div class="d-flex flex-wrap">
          <span v-if="restaurant.Class" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ restaurant.Class }}</span
          >
        </div>
        <div class="description mb-6">
          <span class="fs-4 fw-bolder mb-3">餐廳介紹：</span>
          <p class="fw-light lh-lg">{{ restaurant.Description }}</p>
        </div>
        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="spot-information rounded-3 bg-light p-4 fs-5 mb-3">
              <div v-if="restaurant.OpenTime" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">營業時間：</span>
                <span class="col fs-5 fw-light">{{ restaurant.OpenTime }}</span>
              </div>
              <div v-if="restaurant.Phone" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">聯絡電話：</span>
                <span class="col fs-5 fw-light">{{
                  restaurant.Phone.replace('886-', '0')
                }}</span>
              </div>
              <div v-if="restaurant.Address" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">餐廳地址：</span>
                <span class="col fs-5 fw-light">{{ restaurant.Address }}</span>
              </div>
              <div v-if="restaurant.WebsiteUrl" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">官方網站：</span>
                <span class="col text-primary"
                  ><a :href="restaurant.WebsiteUrl" target="_blank"
                    ><i class="bi bi-link-45deg"></i></a
                ></span>
              </div>
            </div>
            <div class="nearby row gy-3">
              <div class="col-sm-4">
                <a
                  class="btn"
                  :href="`#/scenic-spots?lat=${position.PositionLat}&lon=${position.PositionLon}`"
                >
                  <img src="@/assets/nearby-scene30.png" alt="附近景點" />
                  <span class="mt-1 text-primary fs-5 fw-bold">附近景點</span>
                </a>
              </div>
              <div class="col-sm-4">
                <a
                  class="btn"
                  :href="`#/activities?lat=${position.PositionLat}&lon=${position.PositionLon}`"
                >
                  <img src="@/assets/nearby-event30.png" alt="附近活動" />
                  <span class="mt-1 text-primary fs-5 fw-bold">附近活動</span>
                </a>
              </div>
              <div class="col-sm-4">
                <a
                  class="btn"
                  :href="`#/restaurants?lat=${position.PositionLat}&lon=${position.PositionLon}`"
                >
                  <img src="@/assets/nearby-food30.png" alt="附近美食" />
                  <span class="mt-1 text-primary fs-5 fw-bold">附近美食</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              v-if="position"
              class="restaurant-location rounded-3 overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                :src="`https://www.google.com/maps?q=${position.PositionLat},${position.PositionLon}&hl=zh-tw&z=16&output=embed`"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="similar-restaurants">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h1 class="fw-light fs-2 mb-0">還有這些不能錯過的餐廳</h1>
          <a class="text-danger fs-5 text-end" href="#/restaurants"
            >查看更多餐廳 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row">
          <div
            v-for="similar in similarRestaurants"
            :key="similar.ID"
            class="col-6 col-md-3"
          >
            <GeneralCard
              :item="similar"
              :cardPath="'restaurants'"
            ></GeneralCard>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import GeneralCard from '@/components/GeneralCard.vue'
import shuffleArray from '../methods/shuffleArray'
import getAuthorizationHeader from '../methods/getAuthorizationHeader'
export default {
  components: { Carousel, GeneralCard },
  data () {
    return {
      id: '',
      restaurant: {},
      position: {},
      restaurantPictures: [],
      similarRestaurants: [],
      isLoading: false
    }
  },
  methods: {
    getRestaurant () {
      this.isLoading = true
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON',
        headers: getAuthorizationHeader()
      }).then((res) => {
        this.restaurant = res.data.find((item) => item.ID === this.id)
        this.position = this.restaurant.Position
        // get similars
        res.data.forEach((item) => {
          if (item.Class === this.restaurant.Class) {
            this.similarRestaurants.push(item)
          }
        })
        this.similarRestaurants = this.similarRestaurants.filter(
          (item, i) => this.similarRestaurants.indexOf(item) === i
        )
        const index = this.similarRestaurants.indexOf(
          this.similarRestaurants.find((item) => item.id === this.id)
        )
        this.similarRestaurants.splice(index, 1)
        shuffleArray(this.similarRestaurants)
        this.similarRestaurants = this.similarRestaurants.slice(0, 4)
        // get pictures
        if (Object.keys(this.restaurant.Picture).length) {
          const length = Object.keys(this.restaurant.Picture).length / 2
          for (let i = 1; i <= length; i++) {
            const picture = {}
            picture.url = this.restaurant.Picture[`PictureUrl${i}`]
            picture.description =
              this.restaurant.Picture[`PictureDescription${i}`]
            this.restaurantPictures.push(picture)
          }
        } else {
          this.restaurantPictures.push({
            url: require('@/assets/images/NoImage-1100x400.png')
          })
        }
        this.isLoading = false
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getRestaurant()
  }
}
</script>

<style lang="scss" scoped>
.restaurant-detail .rounded-pill {
  border: 1px solid #bea363;
  color: #bea363;
  padding: 0.1rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  vertical-align: bottom;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background-color: #bea363;
  }
}
.nearby {
  img {
    width: 30px;
  }
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 2px solid #e5e5e5;
    &:hover {
      border: 2px solid #7f977b;
    }
  }
}
.restaurant-location {
  height: 100%;
  min-height: 300px;
}
</style>
