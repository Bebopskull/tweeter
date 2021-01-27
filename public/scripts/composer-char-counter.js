$(document).ready(function() {
  // --- our code goes here ---\

  // let counter = 0;

  $('#tweet-text').keyup( function(event){

  	/// (this) Storing element in the DOM in which we are working on.

  	const $input = $(this);

  	
  	///reaching for the parent (<form>) trhough the DOM, traversing.
  	///

  	const form = $input.closest('form');

  	////then we acces the '.counter' element (child of <form>) 
  	const counter = form.find('.counter');

  	////in order to manipulate its value (140);

  	let tweetLength = (140 - $input.val().length); 

  	counter.html(tweetLength);

  	if(tweetLength < 0 ){

  		//////
  		counter.css('color', 'red');
  		return
  	}else{
  		counter.css('color', '#545149');
  	}
  });


});