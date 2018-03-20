console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

function handleChange(event) {
	var $left = $('#left');
	var $right = $('#right');
	var leftVal = parseInt($left.val());
	var rightVal = parseInt($right.val());
	$('#total').val(leftVal + rightVal)
}

$('.add').on('change', handleChange)

// $('.number').on(change(function(){
// 	$('#total') = $('#left') + $('#right');
// })
// })
