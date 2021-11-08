<template>
  <div class="porfolio">
    <h1 class="text-custom">My Recent Projects</h1>
    <div v-for="(item, index) in getAllProjects()" :key="index">
      <Project :item="item" class="p-5" />
    </div>
  </div>
</template>
<script>
import Project from "@/components/Project.vue";
export default {
  components: {
    Project,
  },
  methods: {
    getAllProjects() {
      return this.$store.getters.getProjects;
    },
  },
};
</script>
<style scoped>
.text-custom {
  color: #ffffff;
}
@media (max-width: 769px) {
  h1 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
}
</style>