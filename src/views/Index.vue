<template>
  <div class="home pt-md-5">
    <div class="container py-5 px-4">
      <header class="mb-6 px-4">
        <div class="row gx-1 gy-3 justify-content-center">
          <div class="col-md-8 col-lg-7">
            <div class="text-center text-md-start">
              <h1 class="lh-base fw-light fs-2 fs-sm-1">
                探索<span class="text-decoration-underline text-warning"
                  ><span class="text-dark">台灣之美</span></span
                >
                <br />
                讓我們更親近這片土地
              </h1>
              <span class="text-secondary fs-6 fs-sm-4"
                ><i class="bi bi-geo-alt-fill text-warning"></i>
                台灣旅遊景點導覽<span class="ms-2 font-noto-serif fw-bolder"
                  >Taiwan Travel Guide</span
                ></span
              >
            </div>
          </div>
          <div class="col-md-4 col-lg-5">
            <form>
              <DropdownList :listItems="themes"></DropdownList>
              <input
                class="border rounded bg-light fs-5 px-3 py-2 w-100 mb-2"
                type="text"
                placeholder="你想去哪裡？請輸入關鍵字"
              />
              <button type="button" class="btn btn-primary text-white w-100">
                <i class="bi bi-search me-2"></i>搜 尋
              </button>
            </form>
          </div>
        </div>
      </header>
      <section class="home-carousel mb-6">
        <Carousel></Carousel>
      </section>
      <section class="home-activity mb-6">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h2 class="fw-light mb-0">近期活動</h2>
          <a class="text-danger fs-5 text-end" href="#/activities"
            >查看更多活動 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row row-cols-1 row-cols-md-2 gy-3">
          <div v-for="event in events" :key="event.ID" class="col">
            <EventCard :event="event"></EventCard>
          </div>
        </div>
      </section>
      <section class="home-scenic-spot mb-6">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h2 class="fw-light mb-0">熱門打卡景點</h2>
          <a class="text-danger fs-5 text-end" href="#/scenic-spots"
            >查看更多景點 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row gy-3">
          <div
            v-for="scenicSpot in scenicSpots"
            :key="scenicSpot.ID"
            class="col-6 col-md-3"
          >
            <GeneralCard
              :item="scenicSpot"
              :cardPath="'scenic-spots'"
            ></GeneralCard>
          </div>
        </div>
      </section>
      <section class="home-resaurant mb-6">
        <div class="d-flex justify-content-between align-items-end mb-3">
          <h2 class="fw-light mb-0">一再回訪美食</h2>
          <a class="text-danger fs-5 text-end" href="#/restaurants"
            >查看更多美食 <i class="bi bi-chevron-right"></i
          ></a>
        </div>
        <div class="row gy-3">
          <div
            v-for="restaurant in restaurants"
            :key="restaurant.ID"
            class="col-6 col-md-3"
          >
            <GeneralCard
              :item="restaurant"
              :cardPath="'restaurants'"
            ></GeneralCard>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DropdownList from '@/components/DropdownList.vue'
import Carousel from '@/components/Carousel.vue'
import EventCard from '@/components/EventCard.vue'
import GeneralCard from '@/components/GeneralCard.vue'
import shuffleArray from '../methods/shuffleArray'
import getAuthorizationHeader from '../methods/getAuthorizationHeader'

export default {
  components: { DropdownList, Carousel, EventCard, GeneralCard },
  data () {
    return {
      themes: [
        { name: '探索景點' },
        { name: '節慶活動' },
        { name: '品嘗美食' }
      ],
      events: [],
      scenicSpots: [],
      restaurants: []
    }
  },
  methods: {
    getActivities () {
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON',
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          const currentYear = new Date().getFullYear()
          const currentMonth = new Date().getMonth()
          const data = []
          res.data.forEach((item) => {
            const startTime = new Date(item.StartTime)
            const endTime = new Date(item.EndTime)
            if (endTime < new Date()) return
            if (startTime.getFullYear() === currentYear) {
              if (startTime.getMonth() === currentMonth) {
                data.push(item)
              }
            }
          })
          shuffleArray(data)
          this.events = data.slice(0, 4)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getScenicSpots () {
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON',
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          const data = res.data
          shuffleArray(data)
          this.scenicSpots = data.slice(0, 4)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRestaurants () {
      this.axios({
        method: 'get',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$format=JSON',
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          const data = res.data
          shuffleArray(data)
          this.restaurants = data.slice(0, 4)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getActivities()
    this.getScenicSpots()
    this.getRestaurants()
  }
}
</script>

<style lang="scss" scoped>
.home .container {
  max-width: 1110px;
}
</style>
