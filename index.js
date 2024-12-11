let showMoreButton = document.querySelector('.showmore');
showMoreButton.addEventListener('click', function() {
showMoreButton.classList.add('showingmore');
})

let hamburgerButton = document.querySelector('.sidenav');
hamburgerButton.addEventListener('click', function() {
hamburgerButton.classList.add('openNav', 'backgroundblur');
})

