console.log("mutherfuck")


//the plus will add to display, the minus will subtract
//clickable minus symbol 
let minus = document.querySelectorAll('.counter-minus');
console.log(minus);
//clickable add symbol
let plus = document.querySelectorAll('.counter-plus');
//set global count variab;e
let count = 0;

//items 

let items = [{
    name: "Tacos",
    tag: "tacosItem",
    price: 3.50,
    inCart: 0,
    imgSrc: "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
}, {
    name: "Tater Tots",
    tag: "tots",
    price: 7.50,
    inCart: 0,
    imgSrc: "https://images.media-allrecipes.com/userphotos/2949996.jpg"
}, {
    name: "Ham Sammich",
    tag: "hamSandwich",
    price: 8.50,
    inCart: 0,
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"
}, {
    name: "Soup of the Day",
    tag: "soup",
    price: 7.50,
    inCart: 0,
    imgSrc: "https://specialeducationcounsel.com/wp-content/uploads/2017/07/download.jpg"
}, {
    name: "Big Salad",
    tag: "salad",
    price: 10.50,
    inCart: 0,
    imgSrc: "https://ohsheglows.com/gs_images/2013/09/choppedsaladsquare-9694.jpg"
}, {
    name: "Beans and Rice",
    tag: "beansRice",
    price: 8.50,
    inCart: 0,
    imgSrc: "https://www.camelliabrand.com/static/wp-content/uploads/2012/06/Vegetarian-Red-Beans.jpg"
}, {
    name: "MeatLoaf",
    tag: "meatLoaf",
    price: 11.00,
    inCart: 0,
    imgSrc: "https://www.thespruceeats.com/thmb/gfY0S2Trd9cllGuj3pDO3ixX05c=/2668x2001/smart/filters:no_upscale()/MeatloafwithOatmealHERO-7119066c62f744b5856dcf24c50a0870.jpg"
}, {
    name: "Spaghetti and Meatballs",
    tag: "spag",
    price: 11.00,
    inCart: 0,
    imgSrc: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=375&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd21%2Fed104370_0309_cov005a%2Fed104370_0309_cov005a_horiz.jpg%3Fitok%3D4VVWqgiA"
}, {
    name: "Chicken",
    tag: "chick",
    price: 20.00,
    inCart: 0,
    imgSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_perfect-chicken-014_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540895467.jpeg"
}, {
    name: "Pasta Primavera",
    tag: "primavera",
    price: 15.00,
    inCart: 0,
    imgSrc: "https://gratefulgrazer.com/wp-content/uploads/2021/04/Vegan-Pasta-Primavera-13.jpg"
}, {
    name: "Chicken and Waffles",
    tag: "waffles",
    price: 12.00,
    inCart: 0,
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190307-chicken-and-waffles-508-1553552447.jpg"
}, {
    name: "Vegetable Stir Fry",
    tag: "veggyStirfry",
    price: 13.00,
    inCart: 0,
    imgSrc: "https://www.eatingbirdfood.com/wp-content/uploads/2019/11/Tofu-Stir-Fry-3.jpg"
}, {
    name: "Purple Drank",
    tag: "purple",
    price: 12.00,
    inCart: 0,
    imgSrc: "https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1568298486709-DRG1F6Q2COSQGLRKKKHB/lavender-blueberry-cocktail1200.jpg?format=2500w"
}, {
    name: "Long Island Iced Tea",
    tag: "longIsland",
    price: 11.00,
    inCart: 0,
    imgSrc: "https://images.kitchenstories.io/recipeImages/LongIslandIcedTea_4x3/LongIslandIcedTea_4x3-large-landscape-150.jpg"
}, {
    name: "Vodka Soda",
    tag: "vodka",
    price: 10.00,
    inCart: 0,
    imgSrc: "https://www.ketelone.com/media/1425/Ketel-One-Soda.jpg?mode=crop&width=1120&height=818&format=jpg&upscale=true"
}, {
    name: "Ranch Water",
    tag: "tequila",
    price: 11.00,
    inCart: 0,
    imgSrc: "https://www.cupcakesandcutlery.com/wp-content/uploads/2021/03/tequila-soda-featured-image-1-500x375.jpg"
}, {
    name: "Classic Martini",
    tag: "martini",
    price: 12.00,
    inCart: 0,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l-CQpKo4UGYug6mQ7OkFKV08_mEioKey1A&usqp=CAU"
}, {
    name: "Midori Sour",
    tag: "midori",
    price: 11.00,
    inCart: 0,
    imgSrc: "https://theeducatedbarfly.com/wp-content/uploads/2020/06/Three-Ingredient-Midori-Sour-clean-scaled.jpg"
}, ]

//subraction for individual menu items

minus.forEach((el) => {
    //addEventListener to every subtraction symbol on the page
    el.addEventListener('click', () => {
        //update display for item count, 
        //assign display variable by selecting the element next to minus sign
        let display = el.nextElementSibling;
        //just in case, convert that shit to numbers
        count = parseInt(display.innerHTML);
        //subtraction only works if count is 1 or above
        if (count > 0) {
            count--
        }
        //update innerHTML for individual item counts with every click
        display.innerHTML = count;
    })
});
//incrementer for individual menu items

plus.forEach((el) => {
    //addEventListener to every addition symbol on the page
    el.addEventListener('click', () => {
        //update display of target
        //assign display variable by selecting the element next to minus sign
        let display = el.previousElementSibling;
        count = parseInt(display.innerHTML);
        //        console.log(count);
        //just in case, convert that shit to numbers
        count++;
        //update innerHTML for individual item counts with every click
        display.innerHTML = count;
    })
});


//assing variable that we will update with global count for the cart
let cartDisplay = document.querySelector('.cart-container span');
//get all add to cart buttons
let addToCartButtons = document.querySelectorAll('.add-cart');


//loop that adds eventlistener for add to cart buttons 
// addToCartButtons.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         //run cartQuantity function when add to cart button clicked
//         cartQuantity();



//         console.log(e, "item being clicked");
//         console.log(el, 'element')
//     })
// })



for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', () => {
        //run cartQuantity function when add to cart button clicked
        cartQuantity(items[i]);
        totalCost(items[i]);

    })
}



//adding functionality to cart display with this function, //this keeps cart consistant across site
function onLoadCartNumbers() {
    //at page load set productNumbers equal to the value stored at the cartQuantity key in the localStorage object
    productNumbers = localStorage.getItem('cartQuantity');
    //if productNumbers does not exist yet because we haven't added anything to our cart, assign the cart display to count, which is initially set to the number 0, if it does exist, textContent is set to value saved in local storage
    // if (!productNumbers) {
    //     cartDisplay.textContent = count;
    // } else {
    //     cartDisplay.textContent = productNumbers;
    // }
    //ternary operator
    (!productNumbers) ? cartDisplay.textContent = count: cartDisplay.textContent = productNumbers;
}



//build cart quantity function
function cartQuantity(items) {
    console.log("item", items)
        //the localStorage property gives us access to a "storage object", so we can have our cart not be erased everytime we refresh or navagate to a different part of the site...
        //assign product numbers to corrisponding local storage key
    let productNumbers = localStorage.getItem('cartQuantity');
    //convert to number so math works
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        //if productNumbers exists, get the value saved at the cartQuantity key in localStorage object and add it to product numbers and global count variable
        localStorage.setItem('cartQuantity', productNumbers + count);
        //update display
        cartDisplay.textContent = productNumbers + count;
    } else {
        //if productNumbers does not exist, set it equall to count, which is assigned to the number 0 until we add to it
        localStorage.setItem('cartQuantity', count);
        //update display
        cartDisplay.textContent = count;
    }

    setItems(items);
}


function setItems(items) {
    console.log("inside of item function")
    console.log("my product is", items)
        //assign cartItems to value at itemsInCart key in local storage
    let cartItems = localStorage.getItem('itemsInCart');
    //convert from JSON, localStorage is json string
    cartItems = JSON.parse(cartItems);
    //console.log('my cart items are', cartItems)
    //if what ever is currently at the itemsInCart key already exists
    if (cartItems !== null) {
        //but, another if... if cartItems tag property value equals undefined, that item has not been clicked yet so we need to add it to our storage object by creating a new key value pair  
        if (cartItems[items.tag] === undefined) {
            cartItems = {
                //the spread operator makes a shallow copy of all ready existing cartItems object
                ...cartItems,
                //then we add the item that was just clicked for the first time.
                [items.tag]: items
            }
        }
        // increment the value at the inCart key of that item by the value of global count variable, which is our individual menu items incrementer 
        cartItems[items.tag].inCart += count;
        //if it is equall to null
    } else {
        //set inCart to global count variable, which is our individual menu items incrementer 
        items.inCart = count;
        //make items.tag the key and the item the value
        cartItems = {
            [items.tag]: items
        }
    }
    //set "itemsInCart" key to cartItems value in localStorage
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
}

function totalCost(item) {
    console.log('the items price is', item.price)
        //get totalCost from local storage and assign to cartCost
    let cartCost = localStorage.getItem('totalCost');

    //if my cart is not null
    if (cartCost !== null) {
        //convert from string to number, everything in local storage is a string, but only need to do this if cartCost exists, as in a number saved as a string exists in localstorage or will through NaN error
        cartCost = parseInt(cartCost);
        // set totalCost in local storage to cartCost plus the new item price multiplied by count
        localStorage.setItem("totalCost", cartCost + (item.price * count));
    } else {
        //the new item price multiplied by count
        localStorage.setItem("totalCost", (item.price * count));
    }
}



function displayCart() {
    //assign cartItems to itemsinCart stored in local storage
    let cartItems = localStorage.getItem("itemsInCart");
    //json.parse converts into js object
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let itemsContainer = $(".items-container")
    console.log(itemsContainer);
    //if cartItems exists and itemsContainer exists...we only want to manipulate the cartpage
    if (cartItems && itemsContainer) {
        console.log('running')
            //set innerHtml equal to nothing on page load
        itemsContainer.innerHTML = "";
        //object.values returns an array of cartItems values, the map function applies a function to each item in that array.
        Object.values(cartItems).map(item => {
            console.log(item.name);
            //create new element
            let newItem = document.createElement('div');
            newItem.setAttribute("class", "cart-content");
            //set newItems innerHTML to something familiar
            newItem.innerHTML = `<div class="card" style="width: 18rem;">
            <img data-toggle="tooltip1" src=${item.imgSrc}>
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><strong>Cost:</strong>$${item.price}</p>
                    <div class="count"><strong>Quantity:</strong>${item.inCart}</div>
            </div>
        </div>`
                //append to itemsContainer on checkout page
            itemsContainer.append(newItem);

        })
        console.log(itemsContainer.innerHTML);
    }
    //include final cost, get from local storage
    let finalCost = document.createElement('span');
    finalCost.innerHTML = `<div class="card" style="width: 18rem;">    
    <div class="card-body">
    <p class="card-text"><strong>You have :</strong> ${parseInt(localStorage.getItem("cartQuantity"))} items in your cart.</p>
        <p class="card-text"><strong>Total Cost:</strong> $${parseInt(localStorage.getItem("totalCost"))}</p>
    </div>
</div>`




    console.log(finalCost.innerText);
    //append finalCost to itemContainer on checkout page
    itemsContainer.append(finalCost);
}

//because cartQuantity only runs when add to cart button is clicked, need to call it once outside of eventlisteners scope so the "0" displays in the cart upon page load if cart is empty, otherwise it doen'st look as good...
// cartQuantity();
onLoadCartNumbers();
displayCart();




//this isn't working in js file so the same function is included in each html page at the bottom, to keep footer in place
$(document).ready(function() {
    setInterval(function() {
        var docHeight = $(window).height();
        var footerHeight = ($('#footer').height() - 10);
        var footerTop = $('#footer').position().top + footerHeight;
        var marginTop = (docHeight - footerTop + 25);

        if (footerTop < docHeight)
            $('#footer').css('margin-top', marginTop + 'px'); // padding of 30 on footer
        else
            $('#footer').css('margin-top', '0px');
        // console.log("docheight: " + docHeight + "\n" + "footerheight: " + footerHeight + "\n" + "footertop: " + footerTop + "\n" + "new docheight: " + $(window).height() + "\n" + "margintop: " + marginTop);
    }, 250);
});