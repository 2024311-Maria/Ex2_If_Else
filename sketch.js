//########################## Paleta de cores ##########################
//let colorRGB = []; code line to make colors

let lightPink = [231,166,204];
let middlePink = [165,80,158];
let darkPink = [121,37,114];

let lightBlue = [147,184,184];
let middleBlue = [82,167,166];
let darkBlue = [41,112,108];

let defaultBg = [133,99,140];

//########################## Quadrados de cores ##########################

let lightPinkSquare;
let middlePinkSquare;
let darkPinkSquare;

let lightBlueSquare;
let middleBlueSquare;
let darkBlueSquare;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(defaultBg);
  frameRate(8);
  
  //########################## COORDENADAS DOS QUADRADOS ##########################

  rectMode(CENTER);

  lightPinkSquare = { x: width / 4, y: 300, size: 250, radius: 15 };
  middlePinkSquare = { x: width / 2, y: 300, size: 250, radius: 15 };
  darkPinkSquare = { x: width * 3 / 4, y: 300, size: 250, radius: 15 };

  lightBlueSquare = { x: width / 4, y: 600, size: 250, radius: 15 };
  middleBlueSquare = { x: width / 2, y: 600, size: 250, radius: 15 };
  darkBlueSquare = { x: width * 3 / 4, y: 600, size: 250, radius: 15 };

}

function draw() {
  
  //########################## CICLO IF ##########################

  //if (x === true); boolean - is either true or false (also mouseIsPressed)
  //if (&&); - and
  //if (||); - or

  /* Each else if tests one square. 
  The size / 2 gives the distance from its center to an edge; 
  the && means the mouse must be inside the square horizontally and vertically. 
  draw() repeats these checks, so the background updates as you move the mouse. */

  if (
    mouseX >= lightPinkSquare.x - lightPinkSquare.size / 2 &&
    mouseX <= lightPinkSquare.x + lightPinkSquare.size / 2 &&
    mouseY >= lightPinkSquare.y - lightPinkSquare.size / 2 &&
    mouseY <= lightPinkSquare.y + lightPinkSquare.size / 2
  ) {
    background(lightPink);
  } else if (
    mouseX >= middlePinkSquare.x - middlePinkSquare.size / 2 &&
    mouseX <= middlePinkSquare.x + middlePinkSquare.size / 2 &&
    mouseY >= middlePinkSquare.y - middlePinkSquare.size / 2 &&
    mouseY <= middlePinkSquare.y + middlePinkSquare.size / 2
  ) {
    background(middlePink);
  } else if (
    mouseX >= darkPinkSquare.x - darkPinkSquare.size / 2 &&
    mouseX <= darkPinkSquare.x + darkPinkSquare.size / 2 &&
    mouseY >= darkPinkSquare.y - darkPinkSquare.size / 2 &&
    mouseY <= darkPinkSquare.y + darkPinkSquare.size / 2
  ) {
    background(darkPink);
  } else if (
    mouseX >= lightBlueSquare.x - lightBlueSquare.size / 2 &&
    mouseX <= lightBlueSquare.x + lightBlueSquare.size / 2 &&
    mouseY >= lightBlueSquare.y - lightBlueSquare.size / 2 &&
    mouseY <= lightBlueSquare.y + lightBlueSquare.size / 2
  ) {
    background(lightBlue);
  } else if (
    mouseX >= middleBlueSquare.x - middleBlueSquare.size / 2 &&
    mouseX <= middleBlueSquare.x + middleBlueSquare.size / 2 &&
    mouseY >= middleBlueSquare.y - middleBlueSquare.size / 2 &&
    mouseY <= middleBlueSquare.y + middleBlueSquare.size / 2
  ) {
    background(middleBlue);
  } else if (
    mouseX >= darkBlueSquare.x - darkBlueSquare.size / 2 &&
    mouseX <= darkBlueSquare.x + darkBlueSquare.size / 2 &&
    mouseY >= darkBlueSquare.y - darkBlueSquare.size / 2 &&
    mouseY <= darkBlueSquare.y + darkBlueSquare.size / 2
  ) {
    background(darkBlue);
  } else {
    background(defaultBg); // default when not hovering over a square
  }

  //########################## TEXTO ##########################
  textSize(25);
  textAlign(CENTER, CENTER);
  stroke(20);
  fill(255);
  text('Passa por cima de um quadrado para mudar a cor do fundo!', width/2 , 100);

  //########################## QUADRADOS ##########################
  //parametros gerais para os quadrados
  stroke(5);
  rectMode(CENTER);

  //square(x, y, s, [tl], [tr], [br], [bl])
  // x-axis, y-ayis, size, top-left, top-right, bottom-right, bottom-left

  // Quadarados de fundo rosa

  //1. Quadrado da esquerda - lightPink
  fill(lightPink);
  square(lightPinkSquare.x, lightPinkSquare.y, lightPinkSquare.size, lightPinkSquare.radius);
  
  //2. Quadrado centrado - middlePink
  fill(middlePink);
  square(middlePinkSquare.x, middlePinkSquare.y, middlePinkSquare.size, middlePinkSquare.radius);

  //3. Quadrado da direita - darkPink
  fill(darkPink);
  square(darkPinkSquare.x, darkPinkSquare.y, darkPinkSquare.size, darkPinkSquare.radius);


  // Quadarados de fundo azul

  //4. Quadrado da esquerda - lightBlue
  fill(lightBlue);
  square(lightBlueSquare.x, lightBlueSquare.y, lightBlueSquare.size, lightBlueSquare.radius);

  //5. Quadrado centrado - middleBlue
  fill(middleBlue);
  square(middleBlueSquare.x, middleBlueSquare.y, middleBlueSquare.size, middleBlueSquare.radius);

  //6. Quadrado da direita - darkBlue
  fill(darkBlue);
  square(darkBlueSquare.x, darkBlueSquare.y, darkBlueSquare.size, darkBlueSquare.radius);

  //erro acidental em que o quadrado estica-se. efeito para usar dps
  /* rectMode(CORNERS);
  square(width/2, 300, 150, 15); */
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}