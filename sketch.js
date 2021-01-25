const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Matter= Matter.Constraint;

var engine,world;
var boy;
var boyImage;

function preload(){

    boyImage=loadImage("p31/boy.png")
}

function setup(){
   createCanvas(500,700);

boy=createSpite(250,600);
boy.addImage(boyImage)
    
}

function draw(){
    background(0);


    drawSprites();
}   

