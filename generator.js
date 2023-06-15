function openOnglet(evt, name) {
  var i, content, link;
  //retrieve the items and hide them
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "None";
  }
  //retrieve the items and hide them
  link = document.getElementsByClassName("onglet");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace("active", "");
  }
  //make the tab we want visible
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += "active";
}
var Quotes = [
  {
    texte: "Invest in yourself. It pays the best interest.",
    auteur: "Benjamin Franklin",
  },
  {
    texte:
      "The biggest adventure you can take is to live the life of your dreams.",
    auteur: " Oprah Winfrey",
  },
  {
    texte: "Believe you can and you're halfway there.",
    auteur: " Theodore Roosevelt",
  },
  {
    texte: "A day without sunshine is like, you know, night.",
    auteur: "Steve Martin",
  },
  {
    texte: "I'm sorry for what I said when I was hungry.",
    auteur: "Anonymous",
  },
  {
    texte: "The only way to do great work is to love what you do.",
    auteur: "Steve Jobs",
  },
  {
    texte: "You miss 100% of the shots you don't take",
    auteur: "Wayne Gretzky",
  },
  {
    texte: "The secret of getting ahead is getting started.",
    auteur: "Mark Twain",
  },
];
var quote;
//function that generates a random quote
function QuoteGenerator() {
  quote = Quotes[Math.floor(Math.random() * Quotes.length)]; //generate a random number
  //retrieve the quote that correponds to that number
  document.getElementById("Quote").innerHTML =
    quote.texte + " - " + quote.auteur;
}

var favoris = []; //contains favorite quotes

function ajouterAuxFavoris() {
  //retrieve the quote
  var Fquote = quote.texte;
  //rerieve the author
  var FAuthor = quote.auteur;
  //stock both of them i FavQuote
  var FavQuote = Fquote + " - " + FAuthor;
  //add it to favoris
  favoris.push(FavQuote);
  afficherFavoris();
}

function afficherFavoris() {
  //retrieve the element that will contain the favorites
  var liste = document.getElementById("favoris-liste");
  liste.innerHTML = "";

  for (var i = 0; i < favoris.length; i++) {
    //retrieve favorite elements one by one
    var QuoteItem = document.createElement("li");
    QuoteItem.textContent = favoris[i];
    liste.appendChild(QuoteItem); //add the elements to the liste
  }
}
