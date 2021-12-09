<template>
        <ul id="footer" class="footer nav navbar-dark postion-absolute">  
                  <router-link class="nav-link" to="/">Home</router-link>
                  <router-link class="nav-link" to="/catering">Catering</router-link>
                  <router-link class="nav-link" to="/checkout">Checkout</router-link>
        </ul>        
</template>

<script>

export default {
  name: 'Footer',
  data: () => ({
   
    
  }) 
  
}


</script>
<style>
/*bootstrap styling not applying?*/
.footer{
  width: 100%;
  text-decoration: none;
  position: absolute;
  bottom: 0;

}
 .nav-link {
  text-decoration: none;
   color: #424242;
}
.nav-link:focus, .nav-link:hover {
    color: #424242;
}
</style>