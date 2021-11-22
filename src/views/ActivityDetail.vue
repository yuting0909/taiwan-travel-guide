<template>
  <Loading :active="isLoading"></Loading>
  <div class="detail pt-md-5">
    <div class="container py-5 px-4">
      <nav aria-label="breadcrumb mb-6">
        <ol class="breadcrumb fs-5">
          <li class="breadcrumb-item text-primary"><a href="#">首頁</a></li>
          <li class="breadcrumb-item text-primary">
            <a href="#/activities">節慶活動</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ event.Name }}
          </li>
        </ol>
      </nav>
      <section class="event-carousel mb-3">
        <Carousel :pictures="eventPictures"></Carousel>
      </section>
      <section class="event-detail mb-6">
        <h1 class="fw-light fs-2 mb-3">{{ event.Name }}</h1>
        <div class="d-flex flex-wrap">
          <span v-if="event.Class1" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ event.Class1 }}</span
          >
          <span v-if="event.Class2" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ event.Class2 }}</span
          >
          <span v-if="event.Class3" class="rounded-pill fs-5 fw-light mb-3"
            ># {{ event.Class3 }}</span
          >
        </div>
        <div class="description mb-6">
          <span class="fs-4 fw-bolder mb-3">活動介紹：</span>
          <p class="fw-light lh-lg">{{ event.Description }}</p>
        </div>
        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="spot-information rounded-3 bg-light p-4 fs-5 mb-3">
              <div v-if="event.StartTime" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">活動時間：</span>
                <span class="col fs-5 fw-light"
                  >{{ startTime }} ~ {{ endTime }}</span
                >
              </div>
              <div v-if="event.Organizer" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">主辦單位：</span>
                <span class="col fs-5 fw-light">{{ event.Organizer }}</span>
              </div>
              <div v-if="event.Phone" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">聯絡電話：</span>
                <span class="col fs-5 fw-light">{{
                  event.Phone.replace('886-', '0')
                }}</span>
              </div>
              <div v-if="event.Address" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">活動地址：</span>
                <span class="col fs-5 fw-light">{{ event.Address }}</span>
              </div>
              <div v-if="event.WebsiteUrl" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">活動連結：</span>
                <span class="col text-primary"
                  ><a :href="event.WebsiteUrl" target="_blank"
                    ><i class="bi bi-link-45deg"></i></a
                ></span>
              </div>
              <div v-if="event.Charge" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">活動費用：</span>
                <span class="col fs-5 fw-light">{{ event.Charge }}</span>
              </div>
              <div v-if="event.TravelInfo" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">交通資訊：</span>
                <span class="col fs-5 fw-light">{{ event.TravelInfo }}</span>
              </div>
              <div v-if="event.Remarks" class="row g-1 mb-2">
                <span class="col-auto fw-bolder">注意事項：</span>
                <span class="col fs-5 fw-light">{{ event.Remarks }}</span>
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
              class="event-location rounded-3 overflow-hidden"
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
      <section class="similar-activities">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h1 class="fw-light fs-2 mb-0">還有這些不能錯過的活動</h1>
          <a class="text-danger fs-5 text-end" href="#/activities"
            >查看更多活動 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row">
          <div
            v-for="similar in similarEvents"
            :key="similar.ID"
            class="col-6 col-md-3"
          >
            <GeneralCard :item="similar" :cardPath="'activities'"></GeneralCard>
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
      event: {},
      position: {},
      eventPictures: [],
      similarEvents: [],
      isLoading: false
    }
  },
  computed: {
    startTime () {
      return new Date(this.event.StartTime).toLocaleDateString()
    },
    endTime () {
      return new Date(this.event.EndTime).toLocaleDateString()
    }
  },
  methods: {
    getEvent () {
      this.isLoading = true
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON',
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          this.event = res.data.find((item) => item.ID === this.id)
          this.position = this.event.Position
          // get similars
          const classArray = []
          for (let i = 1; i <= 3; i++) {
            if (Object.prototype.hasOwnProperty.call(this.event, `Class${i}`)) {
              classArray.push(this.event[`Class${i}`])
            }
          }
          res.data.forEach((item) => {
            classArray.forEach((category) => {
              if (
                item.Class1 === category ||
                item.Class2 === category ||
                item.Class3 === category
              ) {
                this.similarEvents.push(item)
              }
            })
          })
          this.similarEvents = this.similarEvents.filter(
            (item, i) => this.similarEvents.indexOf(item) === i
          )
          const index = this.similarEvents.indexOf(
            this.similarEvents.find((item) => item.id === this.id)
          )
          this.similarEvents.splice(index, 1)
          shuffleArray(this.similarEvents)
          this.similarEvents = this.similarEvents.slice(0, 4)
          // get pictures
          if (Object.keys(this.event.Picture).length) {
            const length = Object.keys(this.event.Picture).length / 2
            for (let i = 1; i <= length; i++) {
              const picture = {}
              picture.url = this.event.Picture[`PictureUrl${i}`]
              picture.description = this.event.Picture[`PictureDescription${i}`]
              this.eventPictures.push(picture)
            }
          } else {
            this.eventPictures.push({
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
    this.getEvent()
  }
}
</script>

<style lang="scss" scoped>
.event-detail .rounded-pill {
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
.event-location {
  height: 100%;
  min-height: 300px;
}
</style>
