let palavra;
let imagem;
let som;

function setup() {
  createCanvas(600, 600);
palavra = Lula();
  som.loop() }

function preload() {
imagem = loadImage("imagem.png");
som = loadSound("som.mp3");
som.loop() }

function draw() {

  batata()
  Lula();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX,0,width,1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300, 300)
}
function batata() {
    background("black");
  image(imagem,0,0,600,600);
  fill("white");
  textSize(25);
  textAlign(CENTER,CENTER);
}
  function Lula(){
  let palavras = ["FAZ O L"];
    return random(palavras);
  }