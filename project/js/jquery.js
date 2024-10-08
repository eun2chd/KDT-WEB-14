$(document).ready(function() {
    var currentIndex = 0; // 현재 이미지 값
    var images = $('.main-container li'); // li 요소들 선택
    var imageCount = images.length; // li 요소 길이값 반환

    //eq : 접근하고자 하는 index 요소
    images.eq(currentIndex).addClass('active');
  
    setInterval(function() {
      // 현재 선택한 li (0번 이면) active 클래스 삭제
      images.eq(currentIndex).removeClass('active');
      // 0 -> 1 ->2 -> 3 -> 4 -> 0
      currentIndex = (currentIndex + 1) % imageCount;
      // 현재 선택한 li 이미지에 active 클래스 추가
      images.eq(currentIndex).addClass('active');
    }, 2000); // 2초마다 이미지 전환
});

