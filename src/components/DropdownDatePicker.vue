<template>
  <div class="dropdown-list position-relative mb-2">
    <div class="dropdown-input border rounded bg-light position-relative">
      <span v-if="defaultText" class="text-primary">選擇日期</span>
      <span v-else class="text-primary">{{ localDate }}</span>
      <button
        type="button"
        class="btn p-0 d-flex fs-6 text-primary stretched-link"
        data-bs-toggle="collapse"
        data-bs-target="#DatePickerCollapse"
        aria-expanded="false"
        aria-controls="DatePickerCollapse"
        @click.once="defaultText = false"
      >
        <i class="bi bi-calendar-event"></i>
      </button>
    </div>
    <div
      class="collapse pt-1 position-absolute"
      id="DatePickerCollapse"
      ref="collapse"
    >
      <div class="card card-body border-0 p-0">
        <DatePicker v-model="date" is-expanded></DatePicker>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'v-calendar'
import Collapse from 'bootstrap/js/dist/collapse'

export default {
  components: { DatePicker },
  data () {
    return {
      collapse: {},
      date: new Date(),
      defaultText: true
    }
  },
  computed: {
    localDate () {
      return this.date.toLocaleDateString()
    }
  },
  watch: {
    date () {
      this.collapse.hide()
      this.$emit('send-date', this.date)
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
  z-index: 300;
}
.dropdown-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  font-size: 1rem;
}
</style>
