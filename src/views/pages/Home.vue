<template>
  <div class="row m-0">
    <div class="col-12 col-md-11 col-sm-12 col-lg-11 p-0">
      <img class="self-img" src="@/assets/self.jpg" alt="Image Not Found" />
      <br />
      <div class="typewriter-effect">
        <span>
          <span class="text-light text-sm"> Hello,</span> <br />
          I'm Muhammad Bilal Danish. <br />
          <span class="text-light text-sm"> What I am expert at? </span
          ><br /></span
        ><Typewriter :words="words" />
        <div class="text-light text-sm">
          I'm here to make sure your presence on the Internet.
        </div>
      </div>
    </div>
    <div class="col-12 col-md-1 col-sm-12 col-lg-1 p-0">
      <div class="right-side-list">
        <span><i class="fas text-large fa-share-alt"></i></span>
        <span><i class="fas text-large fa-download"></i></span>
        <span><i class="fas text-large fa-envelope"></i></span>
        <span class="text-large">fi</span>
        <span class="font-weight-bold">upwork</span>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Typewriter from "../../components/Typewriter.vue";
export default {
  components: { Typewriter },
  name: "Home",
  data() {
    return {
      words: [
        "Web Development",
        "Web Designing",
        "Graphics Designing",
        "Lead Generation and Skip Tracing",
      ],
    };
  },
};
</script>
<style scoped>
.self-img {
  position: relative;
  width: 25%;
  border-radius: 50%;
}
.h-35 {
  height: 35%;
}
.typewriter-effect {
  font-size: 2rem;
  color: #ff9800;
}
.text-sm {
  font-size: 1.5rem;
}
.right-side-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  color: #a1a1a1;
}
.text-large {
  font-size: 1.5rem;
  font-weight: 800;
}
@media (max-width: 767px) {
  .right-side-list {
    flex-direction: row;
    margin-top: 100px;
  }
  .typewriter-effect {
  font-size: 1.5rem;
}
}
</style>
