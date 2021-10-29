<template>
  <div id="nav">
    <div class="nav-container text-center">
          <span ><router-link class="router-link" to="/"><i class="fas mb-1 fa-2x fa-home"></i>Home </router-link></span>
          <span><router-link class="router-link" to="/about"><i class="fas mb-1 fa-2x fa-user"></i>About</router-link></span>
          <span><router-link class="router-link" to="/services"><i class="far mb-1 fa-2x fa-list-alt"></i>Services</router-link></span>
          <span><router-link class="router-link" to="/portfolio"><i class="fas mb-1 fa-2x fa-briefcase"></i>Portfolio</router-link></span>
          <span><router-link class="router-link" to="/contact"><i class="fas mb-1 fa-2x fa-phone"></i>Contact</router-link></span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
span{
    padding: 15px;
    margin: 1px;
    border-radius: 2px;
    background-color: #31313a;
}
.nav-container .router-link{
  display: flex;
  flex-direction: column;
  align-items:center;
}

#nav a {
  font-weight: bold;
  color: #fff;
  transition: all;
  transition-duration: 1s;
  font-size: 12px;
}

#nav a.router-link-exact-active {
  color: #ff9800;
}
#nav a:hover{
  text-decoration: unset;
  color: #ff9800;
}
@media (max-width: 767px){
 .nav-container{
   flex-direction: row;
 }
}
.fa-2x{
  font-size: 1.2em !important;
}
</style>