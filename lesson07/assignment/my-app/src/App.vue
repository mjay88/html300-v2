<template>
  <div id="app">
    
       <div v-for="(product, index) in products" v-bind:key="index" class="card" style="max-width: 18rem;">
                        <!--gets products img-->
    <img class="card-img-top" v-bind:src="product.imgSrc">
    <div></div>
    <div class="card-body">
                                     <!--gets product name-->
        <h5 class="card-title name">{{product.name}}</h5>
                                                                  <!--gets product price-->
        <p class="card-text price"><strong>Cost:</strong>{{product.price}}</p>
                                  <!--gets product description-->
        <p class="card-text">{{product.description}}</p>
        <div class="counter-container">
        <!--this all works now that my js.file script tag is underneath the vue.js and product-display.js script tags, havent noticed any conflicts with bootstrap script yet-->
            <a href="#" class="btn btn-primary add-cart">Add to cart</a>
            <button class="btn counter-minus">-</button>
            <div class="count">0</div>
            <button class="btn counter-plus">+</button>
        </div>
    </div>
</div>
    <HelloWorld msg="What the fuck"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'



export default {

  name: 'App',
   data() {
        return {

            //products object just for lunch items on menu-lunch.html 
            products: [{
                name: "Tacos",
                tag: "tacosItem",
                price: 3.50,
                description: "Our Tacos are so good, there the best tacos you've ever had. Shut up.",
                inCart: 0,
                imgSrc: "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }, {
                name: "Tater Tots",
                tag: "tots",
                price: 7.50,
                description: "Our tots are better then the last tots you had, period",
                inCart: 0,
                imgSrc: "https://images.media-allrecipes.com/userphotos/2949996.jpg"
            }, {
                name: "Ham Sammich",
                tag: "hamSandwich",
                price: 8.50,
                description: "Ham, the way it's supposed to be...",
                inCart: 0,
                imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"
            }, {
                name: "Soup of the Day",
                tag: "soup",
                price: 7.50,
                description: "Soup is now a meal.",
                inCart: 0,
                imgSrc: "https://specialeducationcounsel.com/wp-content/uploads/2017/07/download.jpg"
            }, {
                name: "Big Salad",
                tag: "salad",
                price: 10.50,
                description: "When's the last time you ate a salad?",
                inCart: 0,
                imgSrc: "https://ohsheglows.com/gs_images/2013/09/choppedsaladsquare-9694.jpg"
            }, {
                name: "Beans and Rice",
                tag: "beansRice",
                price: 8.50,
                description: "If you don't eat beans and rice then step off.",
                inCart: 0,
                imgSrc: "https://www.camelliabrand.com/static/wp-content/uploads/2012/06/Vegetarian-Red-Beans.jpg"
            }]
        }
    },
    
  components: {
    HelloWorld
  }
}
</script>

<style>

@import '../../css/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

