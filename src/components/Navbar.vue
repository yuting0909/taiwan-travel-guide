<template>
  <nav class="navbar navbar-expand-md navbar-light border-bottom p-0">
    <div class="container-fluid h-100 px-md-5 py-2">
      <a
        class="
          navbar-brand
          d-md-none
          position-absolute
          top-50
          start-50
          translate-middle
        "
        href="#"
        @click="collapseHide"
      >
        <img src="@/assets/Logo-mobile.png" alt="logo" />
      </a>
      <a class="navbar-brand d-none d-md-block" href="#">
        <img src="@/assets/Logo-desktop.png" alt="logo" />
      </a>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a
            class="nav-link text-secondary me-2"
            aria-current="page"
            href="#/scenic-spots"
            >探索景點</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary me-2" href="#/activities"
            >節慶活動</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#/restaurants">品嘗美食</a>
        </li>
      </ul>
      <button
        v-if="!navbarCollapseShow"
        class="navbar-collapse-btn btn btn-primary h-100 ms-auto d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        @click="collapseHandler"
      >
        <i class="bi bi-filter-left fs-1 text-white"></i>
      </button>
      <button
        v-else
        class="navbar-collapse-btn btn btn-primary h-100 ms-auto d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        @click="collapseHandler"
      >
        <i class="bi bi-x fs-1 text-white"></i>
      </button>
    </div>
    <div class="collapse d-md-none bg-white" id="navbarCollapse" ref="navbar">
      <ul class="navbar-nav w-fit">
        <li class="nav-item">
          <a
            class="nav-link text-secondary"
            aria-current="page"
            href="#/scenic-spots"
            @click="collapseHide"
            >探索景點</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-secondary"
            href="#/activities"
            @click="collapseHide"
            >節慶活動</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-secondary"
            href="#/restaurants"
            @click="collapseHide"
            >品嘗美食</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      collapse: {},
      navbarCollapseShow: false
    }
  },
  methods: {
    collapseHandler () {
      this.navbarCollapseShow = !this.navbarCollapseShow
    },
    collapseHide () {
      this.collapse.hide()
      this.navbarCollapseShow = false
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.navbar, {
      toggle: false
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '../assets/style/custom/_variables.scss';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/utilities';

nav {
  height: 80px;
  z-index: 999;
  @include media-breakpoint-down(md) {
    height: 64px;
  }
  .nav-item {
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
  }
  .nav-item:hover {
    border-bottom: 2px solid $warning;
  }
}
.navbar-collapse-btn {
  display: flex;
  align-items: center;
  &:hover {
    background-color: $primary;
  }
}
#navbarCollapse {
  width: 100%;
  padding: 8px 12px;
  margin-top: 1px;
}
</style>
