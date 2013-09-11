$(document).ready(function() {
  color = prompt("what's your favorite color", "type your color here")
  $('#color').on('click', function(){
    $('body').css("background-color", color);
  });
  // that's hacky, i didn't use cookie at all? no?
  
  $('#meals').hide();

  $('.awesomeness_teller').on('click', function() {
    var choice = $(this).text();
    $('#awesomeness_holder').text(choice);
  });

  $('.skill_teller').on('click', function(){
    var urlLast = window.location.pathname.split("/").pop();
    $('#skill_holder').text(urlLast);
  })

  $('.meal_teller').on('click', function(){
    mealArr = JSON.parse($('p').val('<%=@meals.to_json %>').text());
    var rand = Math.floor(Math.random()*mealArr.length)
    $('#meal_holder').text(mealArr[rand]);
  })
  // What other events do you need to bind to make the other pages work?
});
