<template>
  <Loading :active="isLoading"></Loading>
  <div class="detail pt-md-5">
    <div class="container py-5 px-4">
      <nav aria-label="breadcrumb mb-6">
        <ol class="breadcrumb fs-5">
          <li class="breadcrumb-item text-primary"><a href="#">首頁</a></li>
          <li class="breadcrumb-item text-primary">
            <a href="#/scenic-spots">探索景點</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ scenicSpot.Name }}
          </li>
        </ol>
      </nav>
      <section class="spot-carousel mb-3">
        <Carousel :pictures="spotPictures"></Carousel>
      </section>
      <section class="spot-detail mb-6">
        <h1 class="fw-light fs-2 mb-3">{{ scenicSpot.Name }}</h1>
        <div class="d-flex flex-wrap">
          <span v-if="scenicSpot.Class1" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ scenicSpot.Class1 }}</span
          >
          <span v-if="scenicSpot.Class2" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ scenicSpot.Class2 }}</span
          >
          <span v-if="scenicSpot.Class3" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ scenicSpot.Class3 }}</span
          >
        </div>
        <div class="description mb-6">
          <span class="fs-4 fw-bolder mb-3">景點介紹：</span>
          <p class="fw-light lh-lg">{{ scenicSpot.DescriptionDetail }}</p>
        </div>
        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="spot-information rounded-3 bg-light p-4 fs-5 mb-3">
              <div v-if="scenicSpot.OpenTime" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">開放時間：</span>
                <span class="col fs-5 fw-light">{{ scenicSpot.OpenTime }}</span>
              </div>
              <div v-if="scenicSpot.Phone" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">服務電話：</span>
                <span class="col fs-5 fw-light">{{
                  scenicSpot.Phone.replace('886-', '0')
                }}</span>
              </div>
              <div v-if="scenicSpot.Address" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">景點地址：</span>
                <span class="col fs-5 fw-light">{{ scenicSpot.Address }}</span>
              </div>
              <div v-if="scenicSpot.WebsiteUrl" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">官方網站：</span>
                <span class="col fs-5 fw-light">{{
                  scenicSpot.WebsiteUrl
                }}</span>
              </div>
              <div v-if="scenicSpot.TicketInfo" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">票價資訊：</span>
                <span class="col fs-5 fw-light">{{
                  scenicSpot.TicketInfo
                }}</span>
              </div>
              <div v-if="scenicSpot.TravelInfo" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">交通資訊：</span>
                <span class="col fs-5 fw-light">{{
                  scenicSpot.TravelInfo
                }}</span>
              </div>
              <div v-if="scenicSpot.Remarks" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">注意事項：</span>
                <span class="col fs-5 fw-light">{{ scenicSpot.Remarks }}</span>
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
              class="spot-location rounded-3 overflow-hidden"
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
      <section class="similar-spots">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h1 class="fw-light fs-2 mb-0">還有這些不能錯過的景點</h1>
          <a class="text-danger fs-5 text-end" href="#/scenic-spots"
            >查看更多景點 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row">
          <div
            v-for="similar in similarSpots"
            :key="similar.ID"
            class="col-6 col-md-3"
          >
            <GeneralCard
              :item="similar"
              :cardPath="'scenic-spots'"
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
      scenicSpot: {},
      position: {},
      spotPictures: [],
      similarSpots: [],
      isLoading: false
    }
  },
  methods: {
    getScenicSpot () {
      this.isLoading = true
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON',
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          this.scenicSpot = res.data.find((item) => item.ID === this.id)
          this.position = this.scenicSpot.Position
          // get similars
          const classArray = []
          for (let i = 1; i <= 3; i++) {
            if (
              Object.prototype.hasOwnProperty.call(this.scenicSpot, `Class${i}`)
            ) {
              classArray.push(this.scenicSpot[`Class${i}`])
            }
          }
          res.data.forEach((item) => {
            classArray.forEach((category) => {
              if (
                item.Class1 === category ||
                item.Class2 === category ||
                item.Class3 === category
              ) {
                this.similarSpots.push(item)
              }
            })
          })
          this.similarSpots = this.similarSpots.filter(
            (item, i) => this.similarSpots.indexOf(item) === i
          )
          const index = this.similarSpots.indexOf(
            this.similarSpots.find((item) => item.id === this.id)
          )
          this.similarSpots.splice(index, 1)
          shuffleArray(this.similarSpots)
          this.similarSpots = this.similarSpots.slice(0, 4)
          // get pictures
          if (Object.keys(this.scenicSpot.Picture).length) {
            const length = Object.keys(this.scenicSpot.Picture).length / 2
            for (let i = 1; i <= length; i++) {
              const picture = {}
              picture.url = this.scenicSpot.Picture[`PictureUrl${i}`]
              picture.description =
                this.scenicSpot.Picture[`PictureDescription${i}`]
              this.spotPictures.push(picture)
            }
          } else {
            this.spotPictures.push({
              url: require('@/assets/images/NoImage-1100x400.png')
            })
          }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getScenicSpot()
  }
}
</script>

<style lang="scss" scoped>
.spot-detail .rounded-pill {
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
.spot-location {
  height: 100%;
  min-height: 300px;
}
</style>
