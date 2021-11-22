<template>
  <a class="event-card" :href="`#/activities/${event.ID}`">
    <div class="card rounded-3 shadow">
      <div class="row g-0 h-100">
        <div class="col-4 overflow-hidden">
          <img
            class="object-fit-cover"
            :src="imgUrl"
            :alt="event.Name"
            :onerror="defaultImg"
          />
        </div>
        <div class="col-8">
          <div class="card-body h-100 d-flex flex-column">
            <span class="text-secondary fs-5 mb-1"
              >{{ startTime }} - {{ endTime }}</span
            >
            <h3 class="card-title fw-bolder">
              {{ event.Name }}
            </h3>
            <div class="d-flex justify-content-between mt-auto">
              <span v-if="event.City" class="text-secondary fs-5"
                ><i class="bi bi-geo-alt"></i> {{ event.City }}</span
              >
              <span class="fs-5 text-primary ms-auto"
                >詳細介紹 <i class="bi bi-chevron-right"></i
              ></span>
            </div>
          </div>
        </div>
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
    event: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    imgUrl () {
      return (
        this.event.Picture.PictureUrl1 ||
        require('@/assets/images/default-image.jpg')
      )
    },
    startTime () {
      return new Date(this.event.StartTime).toLocaleDateString()
    },
    endTime () {
      return new Date(this.event.EndTime).toLocaleDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card {
  .card {
    overflow: hidden;
  }
  img {
    height: 160px;
    transition: all 0.6s;
  }
  &:hover img {
    transform: scale(1.1, 1.1);
  }
}
</style>
