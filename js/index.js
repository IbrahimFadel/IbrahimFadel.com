if($(this).scrollTop() == 0){
        makeActive('a-home');
    }
$(document).on('scroll', function() {
	$('#navbar').css('top', $(this).scrollTop() + "px");
	if($(this).scrollTop() == 0){
        makeActive('a-home');
    }
    // if($(this).scrollTop()>=$('#theTarget').position().top){
    //     yourActionHere();
    // }
})

function makeActive(element) {
	let a = document.getElementById(element);
	a.classList.add('active');
}