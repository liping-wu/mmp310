$(document).ready(function() {
	$('#query').on("keypress", function(event){
		/* keyCode 13 is the enter key to submit query */
        if(event.keyCode == 13){
            var query = this.value;
            var key = "7YGlfeYpZbkzPXRI5SVkVWJtTPo7Ld3n"; 
            var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=4";
			$.getJSON(url, function(json) {
				
				/* memory game */
				
				// need two copies of each image in a list
				var cards = [];
				
				// place image into a grid
				// obscure images
				var $game = $('#game');
                $game.empty();
				var matches = 2;
				for (let j = 0; j < matches; j++) {
					for (let i = 0; i < json.data.length; i++) {
						var img = json.data[i];
						var div = $('<div>')
							.addClass('card')
							.attr('data-num', i);
						var imgElem = new Image();
						imgElem.src = img.images.downsized.url;
						imgElem.style.display = "none";
						div.append(imgElem);
						cards.push(div);
					}
				}
				cards.sort(function() { return 0.5 - Math.random() });
				for (let i = 0; i < cards.length; i++) {
					$game.append(cards[i]);
				}
					 
				var clickedCards = [];
                var tries = 0;
                var score = 0;
				// each card/image needs clicks event
				$('.card').click(function() {
                    tries++;
                    $('#tries').html('Number of tries ' + tries);
					const $card = $(this);
					// reveal images
					$card.children().fadeIn(1000);
                    
					// is there another image to compare
					console.log(clickedCards.length, matches);
					if (clickedCards.length == matches - 1) {
						// compare images
						var allMatch = true;
						for (let i = 0; i < clickedCards.length; i++) {
							if (clickedCards[i].num != $card.data().num) {
								allMatch = false;
							}
						}
						if (allMatch) {
							// match, stay face up
							console.log("this is a match");
                          
							// if all matches game is won
                            score++;
                            $('#score').html('Number of matches ' + score);
                            
                            if  (score == cards.length/2){
                                $('#score').html('Congrationgulations! You got it. Type any other word to start a new game.')
                            }
                            
                            
						} else {
							// not a match, hide the images
							$card.children().delay(700).hide(0);
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.delay(700).hide(0);
							}
                            
						}
                       
						// clear the current image
						clickedCards = [];
					} else {
						// keep track of current image
						clickedCards.push({
							num: $card.data().num,
							img: $card.find('img')
						});
					}
                
				});
					
			});
		}
	});
});