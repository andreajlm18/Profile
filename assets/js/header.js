window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop === 0) {
      header.classList.remove('header__shadow');
    } else {
      header.classList.add('header__shadow');
    }
  });