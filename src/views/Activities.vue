<template>
  <Loading :active="isLoading"></Loading>
  <div class="activities pt-md-5">
    <div class="container py-5">
      <nav aria-label="breadcrumb mb-6">
        <ol class="breadcrumb fs-5">
          <li class="breadcrumb-item text-primary"><a href="#">首頁</a></li>
          <template v-if="currentCategory">
            <li class="breadcrumb-item text-primary">
              <a href="#/activities">節慶活動</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ currentCategory }}
            </li>
          </template>
          <li v-else class="breadcrumb-item active" aria-current="page">
            節慶活動
          </li>
        </ol>
      </nav>
      <section class="filter-section mb-6">
        <div class="row gx-3">
          <div class="col-lg-2">
            <DropdownCity @send-city="updateTempCity"></DropdownCity>
          </div>
          <div class="col-lg-2">
            <DropdownCategory
              :listItems="categoryList"
              :tempCategory="tempCategory"
              @send-category="updateTempCategory"
            ></DropdownCategory>
          </div>
          <div class="col-lg-2">
            <DropdownDatePicker @send-date="updateDate"></DropdownDatePicker>
          </div>
          <div class="col-lg-4">
            <input
              class="border rounded bg-light fs-5 px-3 py-2 w-100 mb-2"
              type="text"
              placeholder="你想去哪裡？請輸入關鍵字"
              v-model="keyword"
            />
          </div>
          <div class="col-lg-2">
            <button
              type="button"
              class="btn btn-primary fs-5 text-white w-100"
              @click="searchHandler"
            >
              <i class="bi bi-search me-2"></i>搜 尋
            </button>
          </div>
        </div>
      </section>
      <section v-if="!search" class="category-section mb-6">
        <h1 class="fs-2 fw-light mb-3">熱門主題</h1>
        <div class="row g-3">
          <div
            v-for="category in categories"
            :key="category.name"
            class="col-sm-6 col-md-4 col-lg-3"
          >
            <a
              class="category-img rounded-3 position-relative"
              href="#"
              @click.prevent="categoryHandler(category)"
            >
              <img
                class="object-fit-cover"
                :src="category.imgUrl"
                :alt="category.name"
              />
              <h2 class="fs-3 fw-bold text-white position-absolute">
                {{ category.name }}
              </h2>
            </a>
          </div>
        </div>
      </section>
      <section v-if="search" class="filter-results mb-6">
        <h1 class="fs-2 fw-light mb-3">
          搜尋結果
          <span class="fs-4 text-secondary"
            >共有
            <span class="text-warning">{{ pagination.totalResult }}</span>
            筆</span
          >
        </h1>
        <template v-if="tempActivities.length">
          <div class="row gy-3 mb-6">
            <div
              v-for="activities in tempActivities"
              :key="activities.ID"
              class="col-sm-6 col-md-4 col-lg-3"
            >
              <GeneralCard
                :item="activities"
                :cardPath="'activities'"
              ></GeneralCard>
            </div>
          </div>
          <Pagination
            :pages="pagination"
            @update-page="filterActivities"
          ></Pagination>
        </template>
        <template v-else>
          <div class="text-center">
            <img
              class="mb-3"
              src="@/assets/nofound80.png"
              alt="目前查無資料 請重新搜尋"
            />
            <h3 class="text-primary fw-bolder lh-lg">
              目前查無資料 <br />
              請重新搜尋
            </h3>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<script>
import DropdownCity from '@/components/DropdownCity.vue'
import DropdownCategory from '@/components/DropdownCategory.vue'
import DropdownDatePicker from '@/components/DropdownDatePicker.vue'
import GeneralCard from '@/components/GeneralCard.vue'
import Pagination from '@/components/Pagination.vue'
import getAuthorizationHeader from '../methods/getAuthorizationHeader'

export default {
  components: {
    DropdownCity,
    DropdownCategory,
    DropdownDatePicker,
    GeneralCard,
    Pagination
  },
  data () {
    return {
      categories: [
        {
          name: '節慶活動',
          imgUrl:
            'https://images.unsplash.com/photo-1555589366-cd6c16cae4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          value: '節慶活動'
        },
        {
          name: '自行車活動',
          imgUrl:
            'https://images.unsplash.com/photo-1510766461678-4a8420db04d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          value: '自行車活動'
        },
        {
          name: '遊憩活動',
          imgUrl:
            'https://images.unsplash.com/photo-1574674487139-fdefb8f26f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          value: '遊憩活動'
        },
        {
          name: '產業文化',
          imgUrl:
            'https://images.unsplash.com/photo-1508367231051-dbfe726a5079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
          value: '產業文化活動'
        },
        {
          name: '年度活動',
          imgUrl:
            'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          value: '年度活動'
        },
        {
          name: '四季活動',
          imgUrl:
            'https://images.unsplash.com/photo-1615958354408-c15ad934a549?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          value: '四季活動'
        }
      ],
      search: false,
      currentCategory: '',
      tempCategory: {},
      tempCity: '',
      date: '',
      keyword: '',
      activities: [],
      tempActivities: [],
      pagination: {},
      position: {},
      isLoading: false
    }
  },
  computed: {
    categoryList () {
      const categoryList = [{ name: '全部主題' }]
      return categoryList.concat(this.categories)
    }
  },
  methods: {
    searchHandler () {
      this.search = true
      this.currentCategory = this.tempCategory.name
      if (this.tempCity) {
        this.getCityActivities()
      } else {
        this.getActivities()
      }
    },
    categoryHandler (category) {
      this.search = true
      this.updateTempCategory(category)
      this.currentCategory = category.name
      this.filterActivities()
    },
    updateTempCategory (category) {
      this.tempCategory = category
    },
    updateTempCity (value) {
      this.tempCity = value
    },
    updateDate (date) {
      this.date = date.getTime()
    },
    getActivities () {
      this.isLoading = true
      let url =
        'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON'
      if (Object.keys(this.position).length) {
        url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$spatialFilter=nearby(${this.position.lat},${this.position.lon},2000)&$format=JSON`
        this.search = true
      }
      this.axios({
        method: 'get',
        url,
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          this.activities = res.data
          this.filterActivities()
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCityActivities () {
      this.isLoading = true
      this.axios({
        method: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${this.tempCity}?$format=JSON`,
        headers: getAuthorizationHeader()
      })
        .then((res) => {
          this.activities = res.data
          this.filterActivities()
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    filterActivities (page = 1) {
      this.tempActivities = [...this.activities]
      if (this.tempCategory.value) {
        this.tempActivities = this.tempActivities.filter(
          (item) =>
            item.Class1 === this.tempCategory.value ||
            item.Class2 === this.tempCategory.value ||
            item.Class3 === this.tempCategory.value
        )
      }
      if (this.keyword) {
        this.tempActivities = this.tempActivities.filter((item) =>
          item.Name.match(this.keyword)
        )
      }
      if (this.date) {
        console.dir(this.date)
        this.tempActivities = this.tempActivities.filter((item) => {
          const startTime = new Date(item.StartTime).getTime()
          const endTime = new Date(item.EndTime).getTime()
          return this.date >= startTime && this.date <= endTime
        })
      }
      this.pagination.totalResult = this.tempActivities.length
      this.pagination.perPage = 20
      this.pagination.totalPages = Math.ceil(
        this.pagination.totalResult / this.pagination.perPage
      )
      this.pagination.currentPage = page
      if (this.pagination.currentPage > this.pagination.totalPages) {
        this.pagination.currentPage = this.pagination.totalPages
      }
      this.pagination.showPageStart = page - 3
      this.pagination.showPageEnd = page + 3
      const firstItem =
        this.pagination.currentPage * this.pagination.perPage -
        this.pagination.perPage
      const lastItem = this.pagination.currentPage * this.pagination.perPage - 1
      this.tempActivities = this.tempActivities.slice(firstItem, lastItem + 1)
    }
  },
  created () {
    if (this.$route.query.lat && this.$route.query.lon) {
      this.position = {
        lat: Number(this.$route.query.lat),
        lon: Number(this.$route.query.lon)
      }
    }
    this.getActivities()
  }
}
</script>

<style lang="scss" scoped>
.category-img {
  display: block;
  background-color: #000000;
  overflow: hidden;
  width: 100%;
  height: 140px;
  img {
    opacity: 0.6;
    transition: all 0.6s;
  }
  h2 {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover img {
    transform: scale(1.1, 1.1);
  }
}
</style>
