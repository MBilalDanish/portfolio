<template>
  <div>
    <div v-for="(item, index) in images" :key="index" class="d-flex justify-content-center">
       <div class="d-flex justify-content-between w-75 mb-2" > <img class="tool-img" :src="getImgUrl(item.img)" :alt="item.img"><span class=" w-75 text-left">{{item.title}}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array
    },
  },
  methods:{
          getImgUrl(img) {
      var images = require.context("@/assets/services-tools");
      return images("./" + img);
    },
  }
};
</script>
<style scoped>
.tool-img{
    width: 30px;
}
</style>