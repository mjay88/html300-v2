//need to get values from input
//put them in an array
//run the array through find, find the largest number
//display the result

//Find ************************************************************************************* */
//select input values by class 


const findBtn = document.querySelector("#find button");




findBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //create form variable
    const findForm = document.querySelector("#find");
    //create array from form data
    const array = Array.from(findForm);


    //remove last item from array, its the submit button we cant us it
    array.pop();
    //convert input values to numbers
    const numsArray = array.map(x => parseInt(x.value));
    //run array through find, find a number greater than three
    const found = numsArray.find(x => x > 3);
    console.log(found);
    //display found
    //create p elemnt
    const result = document.createElement('p');
    //append innerText to result
    result.append(`${found} was the first number found greater then 3. The find() method returns the first instance found in an array of a target parameter`)
    findForm.append(result);
    //clear out input
    array.map(x => x.value = "");

})

//Map ************************************************************************************* */
//assign variables
//getting values from input
//running values through map
//displaying result
const mapBtn = document.querySelector("#map button");




mapBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //assign variable
    mapForm = document.querySelector('#map');
    //convert form data to an array
    const array = Array.from(mapForm);
    //remove last item from array, its the submit button we cant us it
    array.pop();
    //convert input values to numbers
    const numsArray = array.map(x => parseInt(x.value));
    //run input numbers through map multiplying each by 2
    const mapped = numsArray.map(x => x * 2);
    //display result
    const result = document.createElement('p');
    result.append(`[${mapped}]. The map() method allows you to run all variables in an array through a target function and output the result without mutating the original array`);
    mapForm.append(result);
    //clear out input
    array.map(x => x.value = "");

})



//Filter ************************************************************************************* */
//assign variables
//getting values from input
//running values through map
//displaying result
const filterBtn = document.querySelector("#filter button");



filterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //assign variable
    filterForm = document.querySelector('#filter');
    //convert form data to an array
    const array = Array.from(filterForm);
    //remove last item from array, its the submit button we cant us it
    array.pop();
    //convert input values to numbers
    const numsArray = array.map(x => parseInt(x.value));
    //run input numbers through filter finding integers greater than 4
    const filtered = numsArray.filter(x => x > 4);
    //display result
    console.log(filtered);
    const result = document.createElement('p');
    if (filtered.length === 0) {
        result.append(`You did it wrong`);
        filterForm.append(result);
    } else {

        result.append(`${filtered}. The filter() method allows you to test all variables in an array against a target parameter and creates a new array populated with variables that have passed the test parameter.`);
        filterForm.append(result);
    }
    //clear out input
    array.map(x => x.value = "");

})






//Reduce ************************************************************************************* */
//assign variables
//getting values from input
//running values through map
//displaying result


const rdcBtn = document.querySelector("#reduce button");



rdcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //assign variable
    reduceForm = document.querySelector('#reduce');
    //convert form data to an array
    const array = Array.from(reduceForm);
    //remove last item from array, its the submit button we cant us it
    array.pop();
    //convert input values to numbers
    const numsArray = array.map(x => parseInt(x.value));
    //run input numbers through reduce adding them all together

    const reduced = numsArray.reduce((sum, x) => {
        sum += x;
        return sum;
    });
    //display result
    console.log(reduced);
    const result = document.createElement('p');

    result.append(`${reduced}. The reduce method is possibly the most versitile of ES6 methods, and allows use to reduce all the variables in an array into one number by allowing a third parameter referred to as the accumulator or commonly 'sum'.`);
    reduceForm.append(result);
    console.log(array);
    //clear out input
    array.map(x => x.value = "");
})