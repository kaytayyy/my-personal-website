writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "Please consider me for future jobs.";
    quotes[1] = "I promise I am smart.";
    quotes[2] = "I crochet sometimes.";
    quotes[3] = "Look at my pets.";
    quotes[4] = "Krusty Krab pizza.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();
