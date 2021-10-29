<template>
  <div class="row mx-0 project">
    <div class="col-12 col-sm-12 col-md-9 col-lg-9">
      <h1 class="project-title">{{ item.title }} <span class="text-end"><i class="fas fa-eye"></i></span></h1>
      <p class="text-light">Required Skill: {{ item.technology }}</p>
      <p class="text-light">Type of Work: {{ item.workType }}</p>
      <p class="text-light">Client Rating</p>
      <Rating :rating="item.rating" />
      <p class="text-light">Client FeedBack</p>
      <p class="text-light " :class="item.feedback.length>100?' text-justify':''" >{{item.feedback}}</p>
    </div>
    <div class="col-12 col-sm-12 col-md-3 col-lg-3 p-0">
      <img class="project-img" :src="getImgUrl(item.img)" :alt="item.img" />
    </div>
  </div>
</template>
<script>
import Rating from "@/components/Rating.vue";
export default {
  components: {
    Rating,
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("@/assets/");
      return images("./" + img);
    },
  },
};
</script>
<style scoped>
.project-img {
  width: inherit;
}
.project {
  border-top: 5px dashed gray;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.project-title {
  text-transform: capitalize;
  color: #ff9800;
}
</style>