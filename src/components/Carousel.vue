<template>
  <div class="carousel-container rounded-3 overflow-hidden position-relative">
    <transition-group
      tag="div"
      class="carousels w-100 h-100 overflow-hidden position-relative"
      :name="transitionName"
    >
      <!-- <div
        class="carousel w-100 h-100 position-absolute"
        v-for="(pic, i) in pictures"
        :key="i"
        v-show="index === i"
        :style="{ backgroundImage: `url(${pic.url})` }"
      ></div> -->
      <img
        :src="pic.url"
        :alt="pic.title"
        class="carousel w-100 h-100 position-absolute"
        v-for="(pic, i) in pictures"
        :key="i"
        v-show="index === i"
        :onerror="defaultImg"
      />
    </transition-group>
    <div v-show="pictures.length > 1" class="dots position-absolute">
      <button
        v-for="(pic, i) in pictures"
        :key="i"
        :class="{ active: index === i }"
        @click="setIndex(i)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array,
      default: () => [
        {
          title: '',
          url: 'https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
        {
          title: '',
          url: 'https://images.unsplash.com/photo-1630244024081-dc4039254a46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
          title: '',
          url: 'https://images.unsplash.com/photo-1635937998083-dde9f462d8ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        },
        {
          title: '',
          url: 'https://images.unsplash.com/photo-1571474004502-c1def214ac6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80'
        },
        {
          title: '',
          url: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
        }
      ]
    }
  },
  data () {
    return {
      transitionName: 'left-in',
      index: 0,
      timer: null,
      defaultImg:
        'this.src="' + require('@/assets/images/NoImage-255x200.png') + '"'
    }
  },
  watch: {
    index (n, o) {
      if (n > this.pictures.length - 1) {
        this.index = 0
      } else if (n < 0) {
        this.index = this.pictures.length - 1
      } else {
        this.transitionName = n > o ? 'right-in' : 'left-in'
      }
    }
  },
  methods: {
    setIndex (i) {
      this.index = i
    },
    autoPlay () {
      this.timer = setInterval(() => {
        this.index++
      }, 3000)
    },
    stopPlay () {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  mounted () {
    if (this.$route.path === '/') {
      this.autoPlay()
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  height: 400px;
  margin: 0 auto;
}
.carousel {
  // background-size: cover;
  // background-position: center;
  object-fit: cover;
}
.carousel-caption {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 99;
  color: #fff;
  background-color: rgba(39, 37, 37, 0.445);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dots {
  right: 25px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 100;
  button {
    display: block;
    margin-right: 5px;
    margin-left: 5px;
    padding: 0;
    width: 8px;
    height: 8px;
    background: rgba(#fff, 0.5);
    border: 2px solid rgba(#fff, 0.5);
    border-radius: 50%;
    transition: 0.3s;
    &:hover,
    &.active {
      width: 10px;
      height: 10px;
      background: #fff;
    }
  }
}
.right-in-enter-from {
  left: 100%;
}
.right-in-enter-active,
.right-in-leave-active {
  transition: left 1s;
}
.right-in-enter-to,
.right-in-leave-from {
  left: 0%;
}
.right-in-leave-to {
  left: -100%;
}
.left-in-enter-from {
  left: -100%;
}
.left-in-enter-active,
.left-in-leave-active {
  transition: left 1s;
}
.left-in-enter-to,
.left-in-leave-from {
  left: 0%;
}
.left-in-leave-to {
  left: 100%;
}
</style>
