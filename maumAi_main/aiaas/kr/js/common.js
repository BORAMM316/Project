// MINDsLab. UX/UI Team. 
$(window).load(function() {
	$('.page_loading').addClass('pageldg_hide').delay(300).queue(function() {
		$(this).remove();
	});
	$('#pageldg').addClass('pageldg_hide').delay(300).queue(function() { $(this).remove(); });
});
// $(window).load(function() {
// 	//page loading delete
// 	$('#pageldg').addClass('pageldg_hide').delay(300).queue(function() { $(this).remove(); });
// });
// jQuery(function(){
// 	jQuery("a.btn_movLayer").movLayer();
// });
// // layerpopup
// (function ( $ ) {
//     $.fn.movLayer = function(options) {
//
//         var movLayerOptions = $.extend({
//                 'autoplay': 1
//         }, options );
//
//         $(this).on('click', function (e) {
//
//             var movLayerLink = $(this).attr("href");
//
//             if( movLayerLink.match(/(youtube.com)/) ){
//                 var split_c = "v=";
//                 var split_n = 1;
//             }
//
//             if( movLayerLink.match(/(youtu.be)/) || movLayerLink.match(/(vimeo.com\/)+[0-9]/) ){
//                 var split_c = "/";
//                 var split_n = 3;
//             }
//
//             if( movLayerLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
//                 var split_c = "/";
//                 var split_n = 5;
//             }
//
//             var getYouTubeVideoID = movLayerLink.split(split_c)[split_n];
//
//             var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");
//
//             if( movLayerLink.match(/(youtu.be)/) || movLayerLink.match(/(youtube.com)/) ){
//                 var videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+movLayerOptions.autoplay+"";
//             }
//
//             if( movLayerLink.match(/(vimeo.com\/)+[0-9]/) || movLayerLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
//                 var videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+movLayerOptions.autoplay+"";
//             }
//
//             $("body").append('<div class="layerpopup_wrap"><div class="layer_bg"></div><div class="layerBox"><a href="#none" class="layer_close"></a><iframe src="'+videoEmbedLink+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div></div>');
//
//             $(".layer_bg, .layer_close").click(function(){
//                 $(".layerpopup_wrap").addClass("layerpopup_hide").delay(500).queue(function() { $(this).remove(); });
//             });
//
// 			var winWidth = $(window).width();
// 			var winHeight = $(window).height();
// 			var layerWidth = $('.lot_c').width();
// 			var layerHeight = (9 / 16) * layerWidth;
//
// 			// =*= Pc Layout =*=
// 			$('.layerpopup_wrap .layerBox').css({
// 				'width' : layerWidth,
// 				'height' : layerHeight,
// 				'margin-top' : -layerHeight/2,
// 				'margin-left' : -layerWidth/2,
// 			});
//
//             e.preventDefault();
//         });
//     };
// }( jQuery ));

$(document).ready(function() {
	// //aside menu
	// var clicked = false;
	// var asideWidth = $(window).width();
	// $('.aside').show();
	//
	// $('a.btn_header_ham').click(function(){
	// 	console.log(clicked);
	// 	if (!clicked) {
	// 		$(this).addClass('active');
	// 		$('.aside').animate({
	// 			width : asideWidth,
	// 		},{duration:200,queue:false});
	// 		$('.btn_goTop').hide();
	//
	// 		$('.bg_aside').animate({
	// 			  opacity : 0.7,
	// 			  display : 'block',
	// 		},{duration:200,queue:false});
	//
	// 		$('body').css({
	// 			  overflow : 'hidden',
	// 		});
	//
	// 		clicked=true;
	// 	} else {
	// 		$(this).removeClass('active');
	// 		$('.aside').animate({
	// 			width: '0',
	// 		},{duration:200,queue:false});
	// 		$('.btn_goTop').show();
	//
	// 		$('.bg_aside').animate({
	// 			opacity : 0,
	// 			display : 'none',
	// 		},{duration:150,queue:false});
	//
	// 		$('body').css({
	// 			  overflow : '',
	// 		});
	//
	// 		clicked=false;
	// 	}
	// });
	//
	// $('.bg_aside').on('click',function(){
	// 	$('a.btn_header_ham').removeClass('active');
	// 	$('.aside').animate({
	// 		width: '0',
	// 	},{duration:200,queue:false});
	// 	$('.btn_goTop').show();
	//
	// 	$('.bg_aside').animate({
	// 		  opacity : 0,
	// 		display : 'none',
	// 	},{duration:150,queue:false});
	//
	// 	$('body').css({
	// 		  overflow : '',
	// 	});
	// 	clicked=false;
	// });

	// language (pc)
	// $('.header_box .sta .etcMenu ul li.lang').each(function(){
	// 	$(this).on('click',function(){
	// 		$(this).toggleClass('active');
	// 	});
	// 	$('.header_box .sta .etcMenu ul li.lang ul.lst li a').on('click',function(){
	// 		$(this).removeClass('active');
	// 	});
	// 	$('#container').on('click',function(){
	// 		$('.header_box .sta .etcMenu ul li.lang').removeClass('active');
	// 	});
	// });

	// language (mobile)
	$('ul.m_etcMenu li.lang').each(function(){
		$(this).on('click',function(){
			$(this).toggleClass('active');
		});
		$('ul.m_etcMenu li.lang ul.lst li a').on('click',function(){
			$(this).removeClass('active');
		});
	});
	// aside nav
	$('.maum_aside .aside_mid .m_nav li h2 a').on('click', function () {
	    if($(this).hasClass('slideChk')){
	        $('.maum_aside .aside_mid ul.m_lst').slideUp();
		    $('.maum_aside .aside_mid ul.m_lst_sub').slideUp();
		    $('.maum_aside .aside_mid .m_nav li h2 a').removeClass('slideChk');
		    return;
	    }
		$('.maum_aside .aside_mid ul.m_lst').slideUp();
		$('.maum_aside .aside_mid ul.m_lst_sub').slideUp();
		$(this).parent().parent().children('.m_lst').slideDown();
		$('.maum_aside .aside_mid .m_nav li h2 a').removeClass('slideChk');
		$(this).addClass('slideChk');
	});
	$('.maum_aside .aside_mid .m_nav li h3 a').on('click', function () {
	    if($(this).hasClass('active')){
	        $('.maum_aside .aside_mid ul.m_lst_sub').slideUp();
	        $('.maum_aside .aside_mid ul.m_lst li h3 a').removeClass('active');
	        return;
	    }
		$('.maum_aside .aside_mid ul.m_lst_sub').slideUp();
		$(this).parent().parent().children('.m_lst_sub').slideDown();
		$('.maum_aside .aside_mid ul.m_lst li h3 a').removeClass('active');
		$(this).addClass('active');	
	});	
	
	// layer popup
	$('.btn_audio_play').on('click',function(){
		$('.audioBox').fadeIn(300);
		
		$('.audioBox audio').each(function(){
			var audio = document.getElementById('myAudio');
			audio.play();
		});	
	});	
	$('.btn_lyr_close, .btn_lyr_cancel, .lyr_bg').on('click',function(){
		$('.lyrWrap').fadeOut(300);
		$('.audioBox').fadeOut();
		$('.audioBox audio').each(function(){
			var audio = document.getElementById('myAudio');
			audio.pause();
			audio.currentTime = 0;
		});
	});
	
	// select design 
	var selectTarget = $('.select_box select'); 
	
	selectTarget.change(function(){ 
	
	var select_name = $(this).children('option:selected').text(); 
	$(this).siblings('label').text(select_name); 
	}); 
	
	// header user
	$('#header .etcmenu .userBox dl dd > a').on('click',function(){
		$(this).parent().parent().toggleClass('active');
	});
	$('.contents, .titArea').on('click',function(){
		$('#header .etcmenu .userBox dl').removeClass('active');
	});
	// // snb
	// $('.snb ul.nav li a').on('click',function(){
	// 	$('.snb ul.nav li').removeClass('active');
	//
	// 	$(this).parents().addClass('active');
	// });
	// $('.snb ul.sub_nav > li > a').on('click',function(){
	// 	$('.snb ul.sub_nav li').removeClass('active');
	//
	// 	$(this).parent().addClass('active');
	// 	$(this).parents().parents().parents().addClass('active');
	// });
	// $('.snb ul.third_nav > li > a').on('click',function(){
	// 	$('.snb ul.third_nav > li').removeClass('active');
	//
	// 	$(this).parent().addClass('active');
	// 	$(this).parents().parents().parents().addClass('active');
	// });
	
	// select	
	$('.selectbox select').on('focus',function(){
		$(this).parent().addClass('active');
	});
	$('.selectbox select').on('focusout',function(){
		$(this).parent().removeClass('active');
	});	
	
	// text count
	$('.txtareaBox .textArea').on('input keyup paste', function() {
		var content = $(this).val();
		$(this).height(((content.split('\n').length + 1) * 1.5) + 'px');
		$('.txt_count').html(content.length + '/100');
		
		var txtValLth = $(this).val().length;
		
		if ( txtValLth > 0) {
			$('.btn_change').removeClass('disabled');	
			$('.btn_change').removeAttr('disabled');
		} else {
			$('.btn_change').addClass('disabled');	
			$('.btn_change').attr('disabled');
			$('.resultArea').fadeOut(300);
		}
	});
	$('.txtareaBox .textArea').keyup();
	

	// tab
	$('.tabUi').each(function(){
		$('.tab_contents').hide(); //Hide all content
		$('.tabUi .tab_nav ul li:first-child').addClass('active').show(); //Activate first tab
		$('.tab_contents:first-child').show(); //Show first tab content
	
		
	});	
	//TAB On Click Event
		$('.tabUi .tab_nav li a').on('click', function(){
	
			$(this).parent().parent().children('li').removeClass('active'); //Remove any 'active' class
			$(this).parent().addClass('active'); //Add 'active' class to selected tab
			$('.tabUi .tab_contents').fadeOut(200); //Hide all tab content			
		
			var activeTab = $(this).attr('href'); //Find the href attribute value to identify the active tab + content		
			$(activeTab).delay(200).fadeIn(); //Fade in the active ID content

			return false;
		});
	
	// chatbot open
	$('#btn_flt_cb').on('click', function() {
		var winWidth = $(window).width();	
		var winHeight = $(window).height();	
		if ( winWidth < 760) {
			$('#livechatWrap').fadeIn(300);	
			$('#wrap').css({
				'overflow': 'hidden',	
			});	
			$('#livechatWrap .chatbot_contents .chat_mid').css({
				'height':winHeight-130,	
			});	
			$('#livechatWrap .chatbot_contents .talkLst').css({
				'display':'block',
			});
				
		} else {
			$('#livechatWrap').fadeIn(300);		
			$('#maumWrap').css({
				'overflow': '',	
			});	
			$('#livechatWrap .chatbot_contents .talkLst').css({
				'display':'block',
			});
		}
	});
	//main Tab
	$('.egArea').each(function(){
		$('#container').css({
			height:'',
		});

		$('.eg_contents').hide();
		$('.eg_contents:first').show();
		$('.egArea ul.eg_tab_nav li a:first').addClass('active');

		$('.egArea ul.eg_tab_nav li a').click(function () {
			$('html, body').animate({
				scrollTop : 0
			}, 400);

			$('.egArea ul.eg_tab_nav li a').removeClass('active');
			$(this).addClass('active');
			$('.eg_contents').hide();

			var activeEgTab = $(this).attr('href');
			$(activeEgTab).show();

			$('#container').css({
				height:'',
			});
		});
	});



	//scroll event
	var wrapOffset = $('#wrap').offset();

	if ($(document).scrollTop() > wrapOffset.top) {
		$('#wrap').addClass('transform');
	} else {
		$('#wrap').removeClass('transform');
	}

	$(window).scroll(function() {
		if ($(document).scrollTop() > wrapOffset.top) {
			$('#wrap').addClass('transform');
		} else {
			$('#wrap').removeClass('transform');
		}
	});

	//etc layer open
	$('.maum_etc .nav>li>a.btn_ico').on('click',function(){
		$(this).parent().toggleClass('active');
		return false;
	});

	//etc layer close
	$(document).mouseup(function (e){
		var container = $('.maum_etc .nav>li.active');
		if( container.has(e.target).length === 0){
			container.removeClass('active');
		}
	});

	//전화번호 하이픈
	$('.phone_num').each(function(){
		$(this).text( $(this).text().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/,"$1-$2-$3").replace("--", "-") );
	});

	//전화번호 숫자만 입력
	$('.phone_num').on('keyup', function() {
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	});

	//Layer popup open
	$('.btn_lyr_open').on('click',function(){
		var winHeight = $(window).height()*0.7,
			hrefId = $(this).attr('href');

		$('body').css('overflow','hidden');
		$('body').find(hrefId).wrap('<div class="lyrWrap"></div>');
		$('body').find(hrefId).before('<div class="lyr_bg"></div>');

		//대화 UI
		$('.lyrBox .lyr_mid').each(function(){
			$(this).css('max-height', Math.floor(winHeight) +'px');
		});

		//Layer popup close
		$('.btn_lyr_close, .lyr_bg').on('click',function(){
			$('body').css('overflow','');
			$('body').find(hrefId).unwrap();
			$('.lyr_bg').remove();
		});
	});

	// 인풋 라벨
	var contactLabel = $('#lyr_contact_model input,#lyr_contact_model textarea');

	contactLabel.on('focus', function () {
		$(this).siblings('label').hide();
	});

	contactLabel.on('focusout', function () {
		if ($(this).val() === '') {
			$(this).siblings('label').show();
		}
	});


});