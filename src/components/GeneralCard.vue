<template>
  <a class="general-card" :href="`#/${cardPath}/${item.ID}`">
    <div class="card border-0">
      <div class="general-card-img rounded-3 shadow">
        <img
          class="object-fit-cover"
          :src="imgUrl"
          :alt="imgDescription"
          :onerror="defaultImg"
        />
      </div>
      <div class="card-body px-1 py-3">
        <h4 class="card-title fw-bolder mb-1">{{ item.Name }}</h4>
        <span v-if="item.City" class="text-secondary fs-5"
          ><i class="bi bi-geo-alt"></i> {{ item.City }}</span
        >
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data () {
    return {
      defaultImg:
        'this.src="' + require('@/assets/images/NoImage-255x200.png') + '"'
    }
  },
  props: {
    item: {
      type: Object,
      default: undefined
    },
    cardPath: {
      type: String,
      default: undefined
    }
  },
  computed: {
    imgUrl () {
      return (
        this.item.Picture.PictureUrl1 ||
        require('@/assets/images/NoImage-255x200.png')
      )
    },
    imgDescription () {
      return this.item.Picture.PictureDescription1 || this.item.Name
    }
  }
}
</script>

<style lang="scss" scoped>
.general-card-img {
  overflow: hidden;
  width: 100%;
  height: 200px;
}
.general-card {
  img {
    transition: all 0.6s;
  }
  &:hover img {
    transform: scale(1.1, 1.1);
  }
}
</style>
