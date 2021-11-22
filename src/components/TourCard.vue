<template>
  <a class="tour-card" href="#">
    <div class="card border-0 rounded-3 shadow overflow-hidden">
      <img
        src="@/assets/images/taiwan.jpg"
        class="card-img-top"
        alt="熱門景點"
      />
      <div class="card-body py-2">
        <h3 class="text-dark fs-4 fw-bold mb-0">title</h3>
        <span class="text-third fs-6"
          ><i class="bi bi-clock-fill text-primary align-middle me-2"></i
          >avalible time</span
        >
        <br />
        <span class="text-third fs-6"
          ><i class="bi bi-geo-alt-fill text-primary align-middle fs-5 me-2"></i
          >position</span
        >
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.tour-card {
  text-decoration: none;
  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .card {
    transition: all 0.2s;
  }
  .card:hover {
    transform: scale(1.02, 1.02);
  }
}
</style>
