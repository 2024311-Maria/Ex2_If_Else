#   Processo

Para este exercício, tirei inspiração do exercício dado como exemplo pelo professor, onde um círculo centrado no ecrã muda de cor dependente da posição do rato. 

Exercício do professor de referência:

```
 if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY > height/2) {
      fill(0, 0, 255);
    } else {
      noFill();
    }
  }

  strokeWeight(random(2, 20));
  circle(width/2, height/2, height/4); 
```

---

Tive a ideia de criar vários quadrados, onde quando o rato passa por cima, o fundo muda de cor.
Para começar, criei uma paleta de cores, defenindo-a com variáveis no ínicio do código.

Começei por escrever a mensagem que fica visivel sempre no ecrã '"Passa por cima de um quadrado para mudar a cor do fundo!"'. Depois desenhei os quadrados e alterando o seu x e y posicionei-os relativos ao centro da canvas com o 'rectMode = (CENTER);'. 
Para conseguir fazer o reconhecimento dos quadrados, tornei-os primeiro numa variável, porém estava a ter dificuldades em desenha-los depois de os defenir com a variável, então perguntei ao Copilot integrado no VS Code e este foi o resultado:

```
let lightPinkSquare;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lightPinkSquare = { x: width / 4, y: 300, size: 150, radius: 15 };
  background(lightPink);
}

function draw() {
  // ...
  rectMode(CENTER);
  fill(lightPink);
  square(lightPinkSquare.x, lightPinkSquare.y, lightPinkSquare.size, lightPinkSquare.radius);
}
```

O resultado foi defenir o 'lightPinkSquare' e os seus valores separadamente na 'function setup'. Então depois de ver como fazer e aplicar o processo, apliquei-o aos outros quadrados.



Para o hovering over do rato nos quadrados estava a ter dificuldades pois não conseguia pôr os valores corretos, ao que perguntei  ao Copilot e referiu que tinha q por 'rectMode (CENTER);' na function set up. Também ajudou-me a perceber que só estava a vefiricar o mouseX dentro dos quadrados, e não o Y. A correção foi a seguinte:

> Each else if tests one square. The size / 2 gives the distance from its center to an edge; the && means the mouse must be inside the square horizontally and vertically. draw() repeats these checks, so the background updates as you move the mouse.


```
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
} else if

//... (repetição do processo para os outros quadrados)

{
  background(darkBlue);
} else {
  background(lightPink); // default when not hovering over a square
}
```

Dado que já estava o exercício a funcionar, mudei algumas coisas como a cor default do background e o tamanho dos quadrados.