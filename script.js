$(document).ready(function() {
  
  var quoteSource=[
			"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. -Francis of Assisi",
	    "Believe you can and you're halfway there. - Theodore Roosevelt",
	    "It does not matter how slowly you go as long as you do not stop. - Confucius",
	    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
	    "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. - Confucius",
	    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
	    "A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand",
	    "A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand",
	    "Expect problems and eat them for breakfast. - Alfred A. Montapert",
	    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
	    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett",
	    "Be yourself; everyone else is already taken. - Oscar Wilde",
	    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
	    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
	    "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
	    "People who think they know everything are a great annoyance to those of us who do. - Isaac Asimov",
	    "Procrastination is the art of keeping up with yesterday. - Don Marquis",
	    "Get your facts first, then you can distort them as you please. - Mark Twain",
	    "A day without sunshine is like, you know, night. - Steve Martin",
	    "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is. - Ellen DeGeneres",
	    "Don't sweat the petty things and don't pet the sweaty things. - George Carlin",
	    "Always do whatever's next. - George Carlin",
	    "Atheism is a non-prophet organization. - George Carlin",
	    "Hapiness is not something ready made. It comes from your own actions. - Dalai Lama"

	];//quote object
  
  var bc=[
    "Khaki",
    "Coral",
    "PaleGreen",
    "MediumPurple",
    "MediumTurquoise",
    "SandyBrown",
    "Silver",
    "LightPink",
    "SlateBlue",
    "#f67"
  ];
  
    $(".losuj").click(function() {
        $("#tekst").html(quoteSource[Math.floor( Math.random() * quoteSource.length)])
      
      var a = bc[Math.floor( Math.random() * bc.length)];
      
      $("body").css("background-color", a);
      $(".los").css("background-color", a);
      $(".los").css("border-color", a);
      $(".twit").css("background-color", a);
      $(".twit").css("border-color", a);
      $(".fa-quote-right").css("color", a);
      $(".fa-quote-left").css("color", a);
      $(".quotation").css("color", a);
   });
  
  $('.twitter').on('click', function() {
    window.open("https://twitter.com/share");
  });
  });