<template>
  <div class="dropdown-list position-relative mb-2">
    <div class="dropdown-input border rounded bg-light position-relative">
      <span v-if="selectedCity" class="text-primary">{{ selectedCity }}</span>
      <span v-else class="text-primary">{{ defaultSelect }}</span>
      <button
        type="button"
        class="btn p-0 d-flex fs-6 text-secondary stretched-link"
        data-bs-toggle="collapse"
        data-bs-target="#dropdownCity"
        aria-expanded="false"
        aria-controls="dropdownCity"
      >
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>
    <div
      class="collapse pt-1 position-absolute w-100"
      id="dropdownCity"
      ref="collapse"
    >
      <div class="card card-body p-0">
        <ul class="list-unstyled mb-0">
          <li
            v-for="city in cities"
            :key="city.name"
            class="dropdown-list-item"
          >
            <a
              class="d-block w-100"
              href="#"
              @click.prevent="selectHandler(city)"
              >{{ city.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      collapse: {},
      cities: [
        { name: '全部縣市', value: '' },
        { name: '基隆市', value: 'Keelung' },
        { name: '台北市', value: 'Taipei' },
        { name: '新北市', value: 'NewTaipei' },
        { name: '桃園市', value: 'Taoyuan' },
        { name: '新竹縣', value: 'HsinchuCounty' },
        { name: '新竹市', value: 'Hsinchu' },
        { name: '苗栗縣', value: 'MiaoliCounty' },
        { name: '台中市', value: 'Taichung' },
        { name: '彰化縣', value: 'ChanghuaCounty' },
        { name: '雲林縣', value: 'YunlinCounty' },
        { name: '南投縣', value: 'NantouCounty' },
        { name: '嘉義縣', value: 'ChiayiCounty' },
        { name: '嘉義市', value: 'Chiayi' },
        { name: '台南市', value: 'Tainan' },
        { name: '高雄市', value: 'Kaohsiung' },
        { name: '屏東縣', value: 'PingtungCounty' },
        { name: '台東縣', value: 'TaitungCounty' },
        { name: '花蓮縣', value: 'HualienCounty' },
        { name: '宜蘭縣', value: 'YilanCounty' },
        { name: '澎湖縣', value: 'PenghuCounty' },
        { name: '金門縣', value: 'KinmenCounty' },
        { name: '連江縣', value: 'LienchiangCounty' }
      ],
      selectedCity: ''
    }
  },
  computed: {
    defaultSelect () {
      return this.cities[0].name
    }
  },
  methods: {
    selectHandler (item) {
      this.selectedCity = item.name
      this.$emit('send-city', item.value)
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
.dropdown-list {
  z-index: 500;
}
#dropdownCity ul {
  height: 250px;
  overflow: auto;
}
.dropdown-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  font-size: 1rem;
}
.dropdown-list-item {
  padding: 8px 16px;
  font-size: 1rem;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: rgba(127, 151, 123, 0.2);
  }
}
</style>
