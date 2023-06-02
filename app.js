var gamesQuantity = 2;
var employeesQuantity = 6;

function start()
{
    scrollToSection('naszeGry');

    var gameLinks = ["https://holyartsgames.itch.io/snowstorm-1","https://www.gamearter.com/game/storm-of-snow/"]

    for(i=1; i<=gamesQuantity; i++)
    {
        let gameBlock = $('<div class="GameBlock" id="gameBlock'+i+'">').appendTo('#games');
        let gameLink = $('<a href='+gameLinks[i-1]+'>').appendTo(gameBlock);
        let gameImage = $('<div class="GameImage" id="gameImage'+i+'">').appendTo(gameLink);
        gameImage.html('<img src="gameBlocks/game'+i+'.png" alt="game'+i+'">');
        let gameLogo = $('<div class="GameLogo" id="gameLogo'+i+'">').appendTo(gameImage);
        gameLogo.html('<img src="gameBlocks/game'+i+'_logo.png"></img>');
    }

    for(i=1; i<=employeesQuantity; i++)
    {
        let gameBlock = $('<div class="GameBlock" id="gameBlock'+i+'">').appendTo('#employees');
        
        let gameLink = $('<a href="employee'+i+'.html">').appendTo(gameBlock);
        let gameImage = $('<div class="GameImage" id="employeeImage'+i+'">').appendTo(gameLink);
        gameImage.css('box-shadow', 'none');
        switch(i)
        {
            case 1: $("<h2>Franciszek Barszcz<br>3D Artist</h2>").appendTo(gameBlock);  
            break;
            case 2: $("<h2>Sebastian Prościński<br>Developer</h2>").appendTo(gameBlock); 
            break;
            case 3: $("<h2>Wiktoria Ozner<br>2D Artist, Game Designer</h2>").appendTo(gameBlock); 
            break;
            case 4: $("<h2>Patryk Komsta<br>Developer</h2>").appendTo(gameBlock); 
            break;
            case 5: $("<h2>Krzysztof Szwedkowicz<br>Developer</h2>").appendTo(gameBlock); 
            break;
            case 6: $("<h2>Mikołaj Dąbrowski<br>3D Artist</h2>").appendTo(gameBlock); 
            break;
        }
        gameImage.html('<img src="employeeBlocks/employee'+i+'.png" alt="game'+i+'">');
        
        
    }
}

window.onload = start;

function scrollToSection(nazwa) {
    
    var section = document.getElementById(nazwa); 
      var windowHeight = window.innerHeight; 
      var scrollToPos;
      if(window.innerWidth > 1000)
      { 
        scrollToPos = section.offsetTop - (windowHeight / 4) + (section.offsetHeight / 2); 
      }
      else 
      {
        scrollToPos = section.offsetTop - (windowHeight / 5) + (section.offsetHeight / 2);
      }
      window.scrollTo({top: scrollToPos, behavior: 'smooth'}); 
  }