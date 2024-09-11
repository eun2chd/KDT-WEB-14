$(document).ready(function() {
  function moveRight() {
    $('.one').animate({
      left: '300px'
    }, 1000, moveLeft());
  }
  

  function moveLeft() {
    $('.one').animate ({
      left : '0px',
    }, 1000, moveRight);
  }

  moveRight();

});