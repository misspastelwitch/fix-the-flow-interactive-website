
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


//let showlessButton = document.querySelector('.showingmore');
//showlessButton.addEventListener('click', function() {
//showlessButton.classList.remove('showingmore');
//showlessButton.classList.add('showingless');
//})

//search field

let inputElement = document.querySelector('input');

inputElement.addEventListener('invalid', function(ev) {

  inputElement.setCustomValidity('fill this field in to search');

});

