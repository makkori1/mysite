$(function(){
  $('#jsi-vegas').vegas({
    slides: [
      {src: './src/img/page/mv/dron-sea.jpg'},
      {src: './src/img/page/mv/night-waterfall.jpg'}, 
      {src: './src/img/page/mv/green-waterfall.jpg'},
      {src: './src/img/page/mv/mount-fuji.jpg'},
      {src: './src/img/page/mv/sea-sunset.jpg'}, 
      {src: './src/img/page/mv/sunset-waterfall.jpg'}
     
    ],
    transition: 'fade',
    transitionDuration: 4000,
    delay: 10000, 
    animation: 'random',
    animationDuration: 20000,
  });

  //ハンバーガメニュー
  $('#jsc-nav__trigger').click(function(){
    $(this).toggleClass('-open');
    $('.l-nav').toggleClass('-open');
    $('.p-index__mobilenav').toggleClass('jsc-mobilenav');

    $('.l-nav__wrap-list-item').click(function(){
      $('.p-index__mobilenav').removeClass('jsc-mobilenav');
      $('.l-nav').removeClass('-open');
    });
  });


  //スムーススクロール
  $('.l-nav__wrap-list-item').click(function(){
    $target = $($(this).attr('href')).offset().top;
    $target -= 100;
    $('html , body').animate({'scrollTop': $target}, 700);

    return false;
  });

  //スクロール時のコンポーネントのフェードイン
  $(window).scroll(function(){
    $('.jsc-fadein').each(function(){
      var elemPos= $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
          if(scroll > elemPos - windowHeight + 50){
            $(this).addClass('jsc-scrollin');
          }
    });
  });

  //ファーストビューが読み込まれた時
  $(window).on('load', function() {
    $('.jsc-ttl').addClass('jsc-fade__main-ttl');
  });


  //タイトルのフェードイン
  $(window).scroll(function(){
    $('.c-title').each(function(){
      var elemPos= $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
          if(scroll > elemPos - windowHeight + 50){
            $(this).addClass('jsc-fade__heading');
        }
      });
    });

    $(window).scroll(function(){
      $('.c-title__box').each(function(){
        var elemPos= $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
            if(scroll > elemPos - windowHeight + 50){
              $(this).addClass('jsc-fade__sub-title');
            }
        });
      });
    
  
  


});