function howManyHocktopi(){
    let rating = prompt("How Many Hocktopi Would You Like Today?");
    for (let i = 0; i < rating; i++){
      document.write("<img src='hocktopus.jpg' alt='Hocktopi' />");
    }
  }
  howManyHocktopi();
  
  let response = prompt("Who Is Your Favorite Hockey Team? 'Hint: Seattle Kraken'");
  while (response !== 'Seattle Kraken'){
    response = prompt("Nope!");
  }