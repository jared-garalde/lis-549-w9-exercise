//Log out a message to show you've got JavaScript running




//Define a variable `myName` and log it out




console.log("Script Running!");
let myName = "Jared Garalde";
console.log(myName); 
//Define a function `getVowelCount()`
function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase() 
    let modifiedString = lowerCaseString.replaceAll("a", "");
    modifiedString = modifiedString.replaceAll("e", "");
    modifiedString = modifiedString.replaceAll("i", "");
    modifiedString = modifiedString.replaceAll("o", "");
    modifiedString = modifiedString.replaceAll("u", "");
    modifiedString = modifiedString.replaceAll("y", "");
    vowelsRemoved = lowerCaseString.length - modifiedString.length;
    return vowelsRemoved;
};

//Define a variable `numVowelsInName` and log it out
let numVowelsinName = getVowelCount(myName);
console.log(numVowelsinName);



//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element
let h1Element = $('h1').text('Interactive Pet Viewer');



//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element
let footerElement = $('footer').html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');



//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element
let catsDiv = $('#cats').css('display', 'none');
let dogsBtn = $('#btnShowDogs').addClass('active');


//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class
let btnGroup = $('.btn-group').on('click', function(){
    $('#dogs, #cats').toggle();
    $('#btnShowDogs, #btnShowCats').toggleClass('active');

})


//Change the `cursor` CSS property of the images
let cssImg = $('img').css('cursor', 'pointer')



//Add the `data-bs-toggle` and `data-bs-target` attributes to the images
$('img').attr('data-bs-toggle', 'modal')
$('img').attr('data-bs-target', '#bsModal')

//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.
$('.modal').on('show.bs.modal', function(event){
    imageClicked = $(event.relatedTarget);
    imageSrc = imageClicked.attr('src'); 
    imageAlt = imageClicked.attr('alt'); 
    $('#modalImage').attr('src', imageSrc);
    $('#modalImage').attr('alt', imageAlt)
})