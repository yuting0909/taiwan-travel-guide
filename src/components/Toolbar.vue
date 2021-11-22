<template>
  <header id="toolbar" class="position-fixed vh-100 bg-white">
    <router-link to="/" class="d-block mb-4">
      <img class="logo-link" src="../assets/logo.png" alt="logo" />
    </router-link>
    <div class="border-bottom">
      <div class="mb-4 position-relative">
        <div class="city-input rounded border bg-gray">
          <span v-if="selectedCity">
            <span class="text-dark me-2">{{ selectedCity }} </span>
            <button
              type="button"
              class="btn text-third p-0"
              @click="selectedCity = ''"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </button>
          </span>
          <span v-else class="text-third">目的地</span>
          <button
            type="button"
            class="btn p-0 d-flex"
            data-bs-toggle="collapse"
            data-bs-target="#cityCollapse"
            aria-expanded="false"
            aria-controls="cityCollapse"
          >
            <i class="bi bi-chevron-down text-primary"></i>
          </button>
        </div>
        <div
          class="collapse position-absolute bg-white rounded-2 shadow-sm"
          id="cityCollapse"
          ref="collapse"
        >
          <div class="row gx-4">
            <div class="col-4 mb-12" v-for="city in cities" :key="city">
              <button
                type="button"
                class="btn btn-outline-primary w-100"
                @click="cityFilterHandler(city)"
              >
                {{ city }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="search-input rounded border bg-gray mb-4">
        <input
          type="text"
          class="border-0 bg-transparent"
          placeholder="搜尋關鍵字"
        />
        <button class="btn p-0 d-flex">
          <i class="bi bi-search text-primary"></i>
        </button>
      </div>
    </div>
    <div class="category">
      <h3 class="fs-4 fw-bold my-4">精選主題</h3>
      <div class="category-btn-group row">
        <div
          v-for="category in categories"
          :key="category.id"
          class="col-6 mb-12"
        >
          <button class="btn category-btn">
            <div
              :id="category.id"
              class="rounded-pill text-white"
              :style="{ backgroundColor: category.backgroundColor }"
            >
              <div v-html="category.icon"></div>
            </div>
            <span class="fs-5">{{ category.title }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      collapse: {},
      cities: [
        '基隆',
        '台北',
        '新北',
        '桃園',
        '新竹',
        '苗栗',
        '台中',
        '彰化',
        '雲林',
        '南投',
        '嘉義',
        '台南',
        '高雄',
        '屏東',
        '台東',
        '花蓮',
        '宜蘭',
        '澎湖',
        '綠島',
        '蘭嶼',
        '小琉球',
        '金門',
        '馬祖'
      ],
      categories: [
        {
          id: 'culture',
          title: '歷史文化',
          icon: '<i class="twicon-zeelandia"></i>',
          backgroundColor: '#3FB195'
        },
        {
          id: 'outdoor',
          title: '戶外踏青',
          icon: '<i class="twicon-youbike"></i>',
          backgroundColor: '#C499FF'
        },
        {
          id: 'religion',
          title: '宗教巡禮',
          icon: '<i class="twicon-xingtian-tmp"></i>',
          backgroundColor: '#FF9999'
        },
        {
          id: 'family',
          title: '親子活動',
          icon: '<i class="twicon-sky-lantern"></i>',
          backgroundColor: '#64C5E3'
        },
        {
          id: 'landscape',
          title: '風景區',
          icon: '<i class="twicon-queens-head"></i>',
          backgroundColor: '#81A4FF'
        },
        {
          id: 'food',
          title: '美食品嘗',
          icon: '<i class="twicon-tapioca"></i>',
          backgroundColor: '#FD975E'
        },
        {
          id: 'hotel',
          title: '住宿推薦',
          icon: '<i class="twicon-grand-hotel"></i>',
          backgroundColor: '#C17B53'
        },
        {
          id: 'event',
          title: '觀光活動',
          icon: '<i class="twicon-balloon"></i>',
          backgroundColor: '#8FCA6B'
        }
      ],
      selectedCity: '',
      selectedCategory: '',
      keyword: ''
    }
  },
  methods: {
    cityFilterHandler (city) {
      this.selectedCity = city
      this.collapse.hide()
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false
    })
  }
}
</script>

<style lang="scss" scoped>
#toolbar {
  width: 354px;
  padding: 40px 24px;
  overflow: auto;
  overscroll-behavior: contain;
}
.logo-link {
  width: 120px;
}
.search-input,
.city-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  input {
    outline: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
  }
}
#cityCollapse {
  padding: 12px;
}
.category-btn {
  width: 100%;
  .rounded-pill {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding-bottom: 0.5rem;
  }
  #religion {
    padding-bottom: 1rem;
  }
  #family {
    padding-bottom: 0.25rem;
  }
}
</style>
