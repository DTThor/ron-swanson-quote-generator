

$.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/59").done(function(data){

  $('button').click(function(ev){
    $.get("https://api.tenor.com/v1/search?key=LIVDSRZULELA&q=ron+swanson&limit=50").done(function(data1){
      let src = data1.results[Math.floor(Math.random()*50)].media[0].gif.url;
        $('img').attr('src', src);

    });
    $('p').empty();
    $('p').append(data[Math.floor(Math.random()*59)]);
  })
});
