/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var imgRainbow;
var imgSun;
var imgCloud;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = randomX;    // x-positie van kogel
var kogelY = randomY;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var randomX = [0,0,0,0,0,0,0,0,0,0];
var randomY = [0,0,0,0,0,0,0,0,0,0];




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */



function preload() {
  imgRainbow = loadImage("rainbow.png");
  imgSun = loadImage("sun.png");
  imgCloud = loadImage("cloud.png");
}


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');

  // dit is het speelveld
  fill(189, 214, 255);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  
};

var tekenPrijs = function () {
  fill(0, 0, 0);
  rect(400, 400, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de prijs
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
//var tekenPrijs = function() {
//    for(var i = 0; i < randomX.length; i++){
//      image(imgRainbow, randomX[i], randomY[i], 80, 80);
//    }
// };


/**
 * Tekent de kogel of de bal
 * 
 */
var tekenAlleKogels = function() {
    for(var i = 0; i < randomX.length; i++){
      image(imgCloud, randomX[i], randomY[i], 80, 80);
    }
 };
//var tekenKogel = function(x,y) {
   //fill(255, 255, 255);
   //ellipse(randomX, randomY, 40, 40);
 //};

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  image(imgSun, x, y, 120, 120);
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    if (keyIsPressed === true) {
        
        if (key === " ") {  //checken op spatie

        }
        if (keyCode === LEFT_ARROW) {
            if (spelerX < width - 20) {
                spelerX = spelerX + 5;
            }
            
        }
        if (keyCode === RIGHT_ARROW) {
            if (spelerX > 20) {
                spelerX = spelerX - 5;
            }
        }
        if (keyCode === UP_ARROW) {
            if (spelerY < height - 20) {// gebruikt height voor de hoogte van het canvas
            spelerY = spelerY + 5;
            }
        }
        if (keyCode === DOWN_ARROW) {
            if (spelerY > 20) {
                spelerY = spelerY - 5;
            }
            
        }
    }
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    // botsing met eerste balletje
    // als spelerX vlakbij randomX && spelerY vlakbij randomY
    for (var i=0; i<randomX.length;i++) {
        if (abs(spelerX - randomX[i]) < 60 &&
            abs(spelerY - randomY[i]) < 60) {
               return true;
        }
    }

    return false;
};


function draw() {
  image(imgRainbow, 50, 50, 100, 120);
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 620);

  imageMode(CENTER);

  for (var i=0; i<randomX.length;i++) {
     randomX[i] = random(30, width - 30);
     randomY[i] = random(30, height - 30);
   }

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegSpeler();
      tekenVeld();
      tekenAlleKogels();
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        //console.log("Game over, jammer joh");
        spelStatus = GAMEOVER;
      }
      
      break;
      case GAMEOVER:
          // hier komt het GAMEOVER scherm
          break;
  }
}
