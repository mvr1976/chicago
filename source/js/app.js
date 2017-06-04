

//email click responce

$('.mail-svg').on('click', function(e){
	e.preventDefault();
	$('.overlay').fadeIn(300);
	$('.form-container').fadeIn(500);
});

$('.close-button').on('click', function(){
	$('.overlay').fadeOut(300);
	$('.form-container').fadeOut(300);
});


//email click responce

//форма обр. связи
document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);
//форма обр. связи

//owl carousel
jQuery(document).ready(function(){
  jQuery(".owl-carousel").owlCarousel({
  	loop:true,
  	items:1,
  	dots: false,
    responsiveClass:true
  });
});



/////// - работающий скрипт расчета высоты

            window.onload = function(){
            var view = document.getElementById('index-content'),
                viewHeight = view.clientHeight + "px",
                slides = document.getElementsByClassName('slide');
                console.log(viewHeight);
                console.log(slides);
                for(var i = 0; i < slides.length; i++){
                  slides[i].style.height = viewHeight;
                }
              }
          
            // window.onload = function(){
            // var view = document.getElementById('owl-works'),
            //     viewHeight = view.clientHeight + "px",
            //     slides = document.getElementsByClassName('slide-works');
            //     console.log(viewHeight);
            //     console.log(slides);
            //     for(var i = 0; i < slides.length; i++){
            //       slides[i].style.height = viewHeight;
            //     }
            //   }


//arrows hover effect
$('.arrow').on('hover', function(){
	// $('.arrow::before:hover').css('border', '6px');
});

var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.arrow-right').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.arrow-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
//owl carousel
$('.arrowWork-left').click(function(){
  owl.trigger('prev.owl.carousel', [300]);
});
$('.arrowWork-right').click(function(){
  owl.trigger('next.owl.carousel', [300]);
});




//submit response
$(function(){
	$('.submit').on('click', function(){
		$('.modal-responce').css('display','flex');
	});
	$('.responce-fuckoff').on('click', function(){
		$('.modal-responce').css('display','none');
		$('.overlay').fadeOut(100);
		$('.form-container').fadeOut(100);
	});

});
//submit response


//active link underline
  $(function () {     
    $('.header-item a').each(function () {// получаем все нужные нам ссылки
        var location = window.location.href;
        console.log(location); // получаем адрес страницы
        var link = this.href;
        var blink = link.substring(0, link.length - 1);
        // console.log(link);
        // console.log(blink);   
        if(location == link) {  //ри совпадении адреса ссылки и адреса окна
            $(this).parent('li').addClass('active');  //добавляем класс
          }
      });
  });

console.log('hallo!');
  //mob menu
  $(function () {     
    $('.icon-fa a').each(function () {// получаем все нужные нам ссылки
        var location1 = window.location.href;
        console.log(location1); // получаем адрес страницы
        var link1 = this.href;
        var blink1 = link1.substring(0, link1.length - 1);
        // console.log(link1);
        // console.log(blink1);   
        if(location1 == link1) {  //ри совпадении адреса ссылки и адреса окна
            $(this).parent('.icon-fa').parent('li').addClass('mob-active');  //добавляем класс
          }
          else if(location1 == 'http://test1.rudik.info/contacts.html'){
            $('.mail').css('display', 'none');
          }
      });
  });

  //velo slider
  // $(function () {
     
    // ... все var-ы и функции только внутри этого контекста
    // по-прежнему имеется доступ к глобальным переменным
// });

  $(window).load(function(){
    var thisHeight = $('body').height();
    console.log(thisHeight);
    var neededHeight = thisHeight - 170 + 'px';
    console.log(neededHeight);
    $('.text-container').css('height', neededHeight);
});


 



