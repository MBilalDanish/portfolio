<template>
  <div class="card">
    <img class="card-img-top" :src="getImgUrl(item.img)" :alt="index" />
    <div class="card-body">
      <h5 class="card-title item-title">{{ item.title }}</h5>
      <p class="card-text text-light">
        {{ item.desctiption }}
      </p>
      <div
        class="text-light d-flex justify-content-center btn"
        v-on:click="toggleShowTools()"
      >
        <span v-if="showTools">Hide </span>
        <span v-else>View my </span> &nbsp;Tools<i
          class="icon fas fa-arrow-circle-down"
        ></i>
      </div>
      <p v-show="showTools" class="card-text text-light">
        {{ item.tools }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTools: false,
    };
  },
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("@/assets/");
      return images("./" + img);
    },
    toggleShowTools() {
      this.showTools = !this.showTools;
    },
  },
};
</script>
<style scoped>
.card-img-top {
  height: 200px;
}
.card {
  background: rgba(255, 255, 255, -0.75);
  box-shadow: 0 5px 16px 0 rgb(86 86 86 / 37%);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0;
}
.icon {
  margin-left: 15px;
  margin-top: 5px;
}
.item-title{
    color: #ff9800;
}
</style>
