$(window).on('load',function()
{
	$('#status').fadeOut();
	$('#preloader').delay(40).fadeOut();
});


$(function()
{
	$("#team-members").owlCarousel(
		{
			items:3,
			autoplay:true,
			smartSpeed:700,
			loop:true,
			autoplayHoverPause:true,
			nav:true,
			dots:false,
		});
});

$(function()
{
	$(".progress-bar").each(function()
	{
		$(this).animate({
			width: $(this).attr("aria-valuenow")+"%"
		},1000);
	});
});



$(function()
{
	$('#fests-tabs').responsiveTabs({
		 
		 animation:'slide'
	});
});
/*
$(function()
{
	$('#portfolio-wrapper').magnificPopup(
	{
		delegate:'a',
		type:'image',
		gallery:
		{
			enabled:true
		}
	});
});





$(function() {
  
    $('#portfolio-wrapper').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
          
    });
  
});
*/