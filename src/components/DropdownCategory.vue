<template>
  <div class="dropdown-list position-relative mb-2">
    <div class="dropdown-input border rounded bg-light position-relative">
      <span v-if="Object.keys(selectedItem).length" class="text-primary">{{
        selectedItem.name
      }}</span>
      <span v-else class="text-primary">{{ defaultSelect }}</span>
      <button
        type="button"
        class="btn p-0 d-flex fs-6 text-secondary stretched-link"
        data-bs-toggle="collapse"
        data-bs-target="#dropdownCategory"
        aria-expanded="false"
        aria-controls="dropdownCategory"
      >
        <i class="bi bi-chevron-down"></i>
      </button>
    </div>
    <div
      class="collapse pt-1 position-absolute w-100"
      id="dropdownCategory"
      ref="collapse"
    >
      <div class="card card-body p-0">
        <ul class="list-unstyled mb-0">
          <li
            v-for="item in listItems"
            :key="item.name"
            class="dropdown-list-item"
          >
            <a
              class="d-block w-100"
              href="#"
              @click.prevent="selectHandler(item)"
              >{{ item.name }}</a
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
      selectedItem: ''
    }
  },
  props: {
    listItems: {
      type: Object,
      default () {
        return undefined
      }
    },
    tempCategory: {
      type: Object,
      default () {
        return undefined
      }
    }
  },
  computed: {
    defaultSelect () {
      return this.listItems[0].name
    }
  },
  watch: {
    tempCategory () {
      this.selectedItem = this.tempCategory
    }
  },
  methods: {
    selectHandler (item) {
      this.selectedItem = item
      this.$emit('send-category', item)
      this.collapse.hide()
    }
  },
  created () {
    this.selectedItem = this.tempCategory
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
  z-index: 400;
}
#dropdownCategory ul {
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
