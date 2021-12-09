<template>
<navagation>
    <div class="position-relative container">
            <!--display 1 more emphatic then header styling-->
            <h1 class="display-1 d-flex justify-content-center align-items-center text-center text-dark p-3 mt-5">Smokey Joes' Cafe</h1>


            <!--nav-->
            <nav class="navbar nav fixed-top navbar-expand navbar-dark bg-dark ">
                <div class="container-fluid ">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                    <div class="d-flex justify-content-start align-items-center collapse navbar-collapse">
                        <div class="navbar-nav inner-nav">
                            <a class="nav-link dropdown-toggle nav-item dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <!--each nav link goes to a seperate html page which are all identical, expect that each respect menu will have the property checked=checked set on it, so when you navigate to lunch the lunch menu is checked open and the other ones are closed, ect...i'm sure theres a way to do this with JS but this was a straight forward solution I knew i could implement-->
                            <a class="dropdown-item" href="menu-lunch.html">Lunch</a>
                            <a class="dropdown-item" href="menu-dinner.html">Dinner</a>
                            <a class="dropdown-item" href="menu-drinks.html">Drinks</a>
                            </ul>
                            </a>
                            <a class="nav-link" href="catering.html">Catering</a>
                            <a class="nav-link" href="cart.html">Checkout</a>
                        </div>
                    </div>
                    <!--cart-->
                </div>
                <div class="cart-container" style="float:right">
                    <a href="cart.html" class="nav-link"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
                        <span class="cart-display"></span></a>
                </div>
                </nav>
        </div>
</navagation>
</template>

<script>
export default {
  name: 'HelloWorld',
    
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
