var $deck = $(".deck");
var $win = $(window);

$win.on("scroll", function(){
    var top = $win.scrollTop() / 3;
    $deck.css('transform', 'rotate(' +top + 'deg)');
})