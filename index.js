
//Show more button

let showMoreButton = document.querySelector('.showmore');
showMoreButton.addEventListener('click', function() {
    showMoreButton.classList.toggle('showingmore');
    // Change the text on the button to 'Show more' when it's
    //'Show less', and to 'Show less' when it's 'Show more'
    if (showMoreButton.textContent == 'Show more') {
        showMoreButton.textContent = 'Show less';
    } else {
        showMoreButton.textContent = 'Show more';
    }
})


//search field

let inputElement = document.querySelector('input');
inputElement.addEventListener('invalid', function(ev) {
  inputElement.setCustomValidity('fill this field in to search');

});

//trying to get the search field to go back to white after being clicked in invalid state
let inputElement = document.querySelector('input');
inputElement.addEventListener('click', clickHandler) {
  function clickHandler(event) {
    if (event.click = true) {
        input.classList.add('click');
  }
}
}



//comment button

let commentButton = document.querySelector('input');

commentButton.addEventListener('invalid', function(ev) {

  commentButton.setCustomValidity('fill this field in to comment');

});