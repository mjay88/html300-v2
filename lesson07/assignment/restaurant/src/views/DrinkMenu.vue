<template>

  <div class="drink-menu">
  
  <div class="datepicker-wrap">
            <p>You Must Be 21 Years Old to Purchase Alcohol!</p>
            <div class="display">Please Select A Date Below</div>
            <!-- v-model to attach user input to dt variable declared in data-->
            <datepicker placeholder="select date" class="datepicker" v-model="dt"></datepicker>
            <!--v-if statement-->
            <div class="display" v-if="age < 21">You are only {{age}}, not old enough to party, sorry</div>
            <div class="display" v-else>Let's Party!</div>
   </div>
       <div class="wrap-1">
            <input type="checkbox" id="tab-1" name="tabs">
            <label for="tab-1"><div data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Lunch</div><div class="cross"></div></label>
            <div class="content">

                <MenuComponent  v-for="product in lunchItemsOnly" 
                :key=product.tag 
                :description=product.description 
                :imgSrc="product.imgSrc" 
                :price="product.price" 
                :alt="product.alt"
                :name="product.name"
            />
    
            </div>
            <!--Dinner-->
            <div class="wrap-2">
                <input type="checkbox"   id="tab-2" name="tabs">
                <label for="tab-2"><div>Dinner</div><div class="cross"></div></label>
                        <div class="content">
                        
                <MenuComponent  v-for="product in dinnerItemsOnly"  
                :key=product.tag 
                :description=product.description 
                :imgSrc="product.imgSrc" 
                :price="product.price" 
                :alt="product.alt"
                :name="product.name"
    />
                </div>
            </div>
            <!--Drinks-->
            <div class="wrap-3">
                <input type="checkbox"  checked="checked" id="tab-3" name="tabs">
                <label for="tab-3"><div>Drinks</div><div class="cross"></div></label>
                <div class="content">
                                    
                <MenuComponent  v-for="product in drinksOnly" 
                :key=product.tag 
                :description=product.description 
                :imgSrc="product.imgSrc" 
                :price="product.price" 
                :alt="product.alt"
                :name="product.name"
     
    />
                </div>
            </div>
     </div>
  
  </div>
  
</template>



<script>
//import components
import MenuComponent from '../components/MenuComponent.vue'
//import Datepicker from install
import Datepicker from 'vuejs-datepicker'

export default{
    data() {
       
        return {
          
        //    products object just for lunch items on menu-lunch.html 
            products: [{
                name: "Tacos",
                tag: "tacosItem",
                price: 3.50,
                description: "Our Tacos are so good, there the best tacos you've ever had. Shut up.",
                inCart: 0,
                imgSrc: "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                type: "lunch"
            }, {
                name: "Tater Tots",
                tag: "tots",
                price: 7.50,
                description: "Our tots are better then the last tots you had, period",
                inCart: 0,
                imgSrc: "https://images.media-allrecipes.com/userphotos/2949996.jpg",
                type: "lunch"
            }, {
                name: "Ham Sammich",
                tag: "hamSandwich",
                price: 8.50,
                description: "Ham, the way it's supposed to be...",
                inCart: 0,
                imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png",
                type: "lunch"
            }, {
                name: "Soup of the Day",
                tag: "soup",
                price: 7.50,
                description: "Soup is now a meal.",
                inCart: 0,
                imgSrc: "https://specialeducationcounsel.com/wp-content/uploads/2017/07/download.jpg",
                type: "lunch"
            }, {
                name: "Big Salad",
                tag: "salad",
                price: 10.50,
                description: "When's the last time you ate a salad?",
                inCart: 0,
                imgSrc: "https://ohsheglows.com/gs_images/2013/09/choppedsaladsquare-9694.jpg",
                type: "lunch"
            }, {
                name: "Beans and Rice",
                tag: "beansRice",
                price: 8.50,
                description: "If you don't eat beans and rice then step off.",
                inCart: 0,
                imgSrc: "https://www.camelliabrand.com/static/wp-content/uploads/2012/06/Vegetarian-Red-Beans.jpg",
                type: "lunch"
            },
                 {
                productCount: 3,
                name: "MeatLoaf",
                tag: "meatLoaf",
                price: 11.00,
                description:"Not your mom's meatloaf.",
                alt:"Photo of a meatloaf dinner.",
                inCart: 0,
                imgSrc: "https://www.thespruceeats.com/thmb/gfY0S2Trd9cllGuj3pDO3ixX05c=/2668x2001/smart/filters:no_upscale()/MeatloafwithOatmealHERO-7119066c62f744b5856dcf24c50a0870.jpg",
                type: "dinner"
            }, {
                name: "Spaghetti and Meatballs",
                tag: "spag",
                price: 11.00,
                description:"Carbo load babe...",
                alt:"Photo of a plate of Spaghetti and Meatballs",
                inCart: 0,
                imgSrc: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=375&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd21%2Fed104370_0309_cov005a%2Fed104370_0309_cov005a_horiz.jpg%3Fitok%3D4VVWqgiA",
                type: "dinner"
            }, {
                name: "Chicken",
                tag: "chick",
                price: 20.00,
                description:"You get the whole bird.",
                alt: "Photo of a whole roasted chicken on a dinner platter.",
                inCart: 0,
                imgSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540895467.jpeg",
                type: "dinner"
            }, {
                name: "Pasta Primavera",
                tag: "primavera",
                price: 15.00,
                description:"Vegetarian option available",
                alt:"Photo of pasta primavera",
                inCart: 0,
                imgSrc: "https://gratefulgrazer.com/wp-content/uploads/2021/04/Vegan-Pasta-Primavera-13.jpg",
                type: "dinner"
            }, {
                name: "Chicken and Waffles",
                tag: "waffles",
                price: 12.00,
                description:"Good anytime of day",
                alt:"Photo of chicken and waffles on a plate",
                inCart: 0,
                imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190307-chicken-and-waffles-508-1553552447.jpg",
                type: "dinner"
            }, {
                name: "Vegetable Stir Fry",
                tag: "veggyStirfry",
                price: 13.00,
                description:"Give your heart a break.", 
                alt: "Photo of vegetable and tofu stir fry on a plate",
                inCart: 0,
                imgSrc: "https://www.eatingbirdfood.com/wp-content/uploads/2019/11/Tofu-Stir-Fry-3.jpg",
                type: "dinner"
            },
            {
                name: "Purple Drank",
                tag: "purple",
                price: 12.00,
                description:"Let's get this party started",
                alt:"Photograph of a purple cocktail in a stemmed martini glass",
                inCart: 0,
                imgSrc: "https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1568298486709-DRG1F6Q2COSQGLRKKKHB/lavender-blueberry-cocktail1200.jpg?format=2500w",
                type: "drinks"
            }, {
                name: "Long Island Iced Tea",
                tag: "longIsland",
                price: 11.00,
                description:"Don't ask for a double...",
                alt:"Photograph of a Long Island Iced served in a collins glass",
                inCart: 0,
                imgSrc: "https://images.kitchenstories.io/recipeImages/LongIslandIcedTea_4x3/LongIslandIcedTea_4x3-large-landscape-150.jpg",
                type: "drinks"
            }, {
                name: "Vodka Soda",
                tag: "vodka",
                price: 10.00,
                description:"Warning, this drink will not make you skinnier.",
                alt:"Photo of a vodka soda and limes in a tumbler",
                inCart: 0,
                imgSrc: "https://www.ketelone.com/media/1425/Ketel-One-Soda.jpg?mode=crop&width=1120&height=818&format=jpg&upscale=true",
                type: "drinks"
            }, {
                name: "Ranch Water",
                tag: "tequila",
                price: 11.00,
                description:"So, you want a tequila soda?",
                alt:"Photo of a tequila soda in a tumbler with a lime",
                inCart: 0,
                imgSrc: "https://www.cupcakesandcutlery.com/wp-content/uploads/2021/03/tequila-soda-featured-image-1-500x375.jpg",
                type: "drinks"
            }, {
                name: "Classic Martini",
                tag: "martini",
                price: 12.00,
                description:"Perfect before dinner",
                alt:"Photo of a martini in a tall stemmed martini glass garnished with a couple of olives",
                inCart: 0,
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l-CQpKo4UGYug6mQ7OkFKV08_mEioKey1A&usqp=CAU",
                type: "drinks"
            }, {
                name: "Midori Sour",
                tag: "midori",
                price: 11.00,
                description:"A modern classic.",
                alt:"Photo of a dark neon green midori sour cocktial served in a tumbler",
                inCart: 0,
                imgSrc: "https://theeducatedbarfly.com/wp-content/uploads/2020/06/Three-Ingredient-Midori-Sour-clean-scaled.jpg",
                type: "drinks"
            }

            ],
            //inatializing date object on dt variable
                dt: new Date(),
                
                
       
             
        }
    },
    //register components
     components: {
         MenuComponent,
         Datepicker
        },
    //methods
     methods: {}
    ,
    //computed properties
    //added key of type to products array to sort items by meal type
    computed: {
        //to only display lunch items
        lunchItemsOnly: function(){
            return this.products.filter(function(item){
                return item.type === "lunch"
            })
        },
        //to only display dinner items
        dinnerItemsOnly: function(){
            return this.products.filter(function(item){
                return item.type === "dinner"
            })
        },
        //only display drinks
         drinksOnly: function(){
            return this.products.filter(function(item){
                return item.type === "drinks"
            })
        },
//how the hell does this work?
        console: ()=> console,
         window: () => window,
//age validation 
      age() {
          //set today variable to new date object
            const today = new Date();
            //subtract user input year from todays year
            let age = today.getFullYear() - this.dt.getFullYear();
            //subtract user input for month from todays month
            const m = today.getMonth() - this.dt.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < this.dt.getDate())){
                    age = age - 1;
                     }
             return age;
             }
}
} 
</script>

<style>
.drink-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 2rem;

}
.card {
    margin: 2rem 3rem;

}

.datepicker-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column wrap;
}

.datepicker-wrap > * {
    margin: 2rem;
}
.datepicker-wrap p {
    font-size: 2rem;
}

/*can not change input in master styling because accordian is based off of input {display: none}  */
.datepicker input {
    display: flex; 
}

</style>