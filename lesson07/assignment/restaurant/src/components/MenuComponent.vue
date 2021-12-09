<template>
   
     <div  class="card" style="max-width: 18rem;">
                        <!--gets product img-->
            <img class="card-img-top" v-bind:src="imgSrc" v-bind:alt="alt">
            <div></div>
            <div class="card-body">
                                            <!--gets product name-->
                <h5 class="card-title name">{{name}}</h5>
                                                                        <!--gets product price-->
                <p class="card-text price"><strong>Cost:</strong>${{price}}</p>
                                        <!--gets product description-->
                <p class="card-text">{{description}}</p>
                <div class="counter-container">
                <!--this all    works now that my js.file script tag is underneath the vue.js and product-display.js script tags, havent noticed any conflicts with bootstrap script yet-->
                    <a href="#" class="btn btn-primary add-cart">Add to cart</a>
                    <button class="btn counter-minus">-</button>
                    <div class="count">0</div>
                    <button class="btn counter-plus">+</button>
                </div>
            </div>
    </div>
</template>



<script>

export default{
    //name component
   name: "MenuComponent",
   //prop validation for component
   props:{
       name: String,
       tag: String,
       price: Number,
       description: String,
       imgSrc: String,
       alt:String,
       
   },

    data() {
        return {            
        }
     },
     methods: {

    }
    }
</script>

<style>
.lunch-menu {
 display: flex;
 justify-content: space-evenly;
 align-items: stretch;
 flex-wrap: wrap;
 

}
.card {
  margin: 2rem 3rem;

}
</style>