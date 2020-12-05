var elToggler = document.querySelector('.sitenav__menu-btn');
var elNavbar = document.querySelector('.sitenav');

elToggler.addEventListener('click', function(){
  elNavbar.classList.toggle('sitenav--open');
});

elToggler.addEventListener('click', function(){
  elToggler.classList.toggle('sitenav__menu-btn--close');
});