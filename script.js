function howManyHocktopi(){
    let rating = prompt("How Many Hocktopi Would You Like Today?");
    for (let i = 0; i < rating; i++){
      document.write("<img src='hocktopus.jpg' alt='Hocktopi' />");
    }
  }
  howManyHocktopi();