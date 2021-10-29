<template>
  <div class="services">
    <div class="row m-0 p-2">
      <div
        v-for="(item, index) in getAllServices()"
        :key="index"
        class="col-lg-4 col-md-6 col-sm-12 col-12 p-2"
      >
        <Service :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>
<script>
import Service from "@/components/Service.vue";
export default {
  components: {
    Service,
  },
  methods: {
    getAllServices() {
      return this.$store.getters.getServices;
    },
  },
};
</script>
