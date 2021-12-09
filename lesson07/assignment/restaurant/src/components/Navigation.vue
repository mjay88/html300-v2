<template>

    <div class="position-relative container">
            <!--display-1 more emphatic then header styling-->
            <h1 class="display-1 d-flex justify-content-center align-items-center text-center text-dark p-3 mt-5">Smokey Joes' Cafe</h1>


            <!--nav-->
            <nav class="navbar nav fixed-top navbar-expand navbar-dark bg-dark ">
                <div class="container-fluid ">
         
                    <div class="d-flex justify-content-start align-items-center collapse navbar-collapse">
                        <div class="navbar-nav inner-nav">
                           <!--dropdown component in own vue file-->  <!--items from dropdown.vue binded to menus on this page-->
                               <Dropdown class="nav-link" title="Menu" :items="menus" />
                            <router-link class="nav-link" to="/catering">Catering</router-link>
                            <router-link class="nav-link" to="/checkout">Checkout</router-link>
                        </div>
                    </div>
                    <!--cart-->
                </div>
                <div class="cart-container" style="float:right">
                    <router-link to="/cart" class="nav-link"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
                        <span class="cart-display"></span></router-link>
                </div>
                </nav>
        </div>

</template>


<script>
import Dropdown from './Dropdown';

export default {
  name: 'Navigation',
  data: () => ({
    //data for the drop down menu
     menus: [
        {
          title: 'Lunch',
          link: '/lunch-menu'
        },
        {
          title: 'Dinner',
          link:'/dinner-menu'
        },
        {
          title: 'Drinks',
          link: '/drink-menu'
        }
      ],
   
    
  }), 
  
  
  components: {
    Dropdown
  }
}


</script>