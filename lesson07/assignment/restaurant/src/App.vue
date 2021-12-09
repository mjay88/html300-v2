<template>
  <div id="app">
    <!-- nav component -->
      <Navigation />
      <router-view/>
      <!-- footer component -->
      <Footer />
  </div>
</template>

<script>
//import components
import Navigation from './components/Navigation'
import Footer from './components/Footer'


export default{
  
  data(){
    return{

    }
  },
  //register components
  components: {
    Navigation,
    Footer
  }
}


</script>
<style>
/* this isn't fucking working */
/* @import './css/style.scss'; */
/* vue default styling? */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* for background? need to be here? */
body::before {
    content: "";
    background-image: url(https://images.genius.com/903167747bef349acbc1c4c4db12662d.300x300x1.jpg);
    background-size: 200px 200px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.4;
    /*fixed covered links*/
    z-index: -9999;
}
</style>
