<template>
  <div id="app" class="container-fluid vh-100 w-100 p-5">
    <div class="row w-100 m-0">
      <Nav
        class="
          col-md-1 col-sm-12 col-12
          d-flex
          justify-content-center
          nav-custom
        "
      />
      <div class="col-md-10 p-0 col-sm-12 col-12 overflow-auto h-100 bg-custom">
        <Container />
      </div>
      
    </div>
  </div>
</template>
<script>
import Nav from "./views/Nav.vue";
import Container from "./views/Conainer.vue";
export default {
  components: {
    Nav,
    Container,
  },
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #202026;
  overflow-y: auto;
  overflow-x: hidden;
}
.nav-custom {
  min-width: 100px;
}
@media (min-width: 769px) {
  #app > .row {
    height: 100% !important;
  }
}
@media (max-width: 769px) {
  #app{
    padding: 0px !important;
  }
}
.text-orange{
  color: #ff9800;
}
.bg-custom{
   background-color: #31313a;
}
::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
  ::-webkit-scrollbar-thumb {
  background: #888; 
    border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  
  background: #555; 
} 
</style>
