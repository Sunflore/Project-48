var bA, bB,bC,bD;
var bAI, bBI, bCI,bDI;
var bg2, bg3;
var bg2I, bg3I;
var fI;
var gameState="Q1";

function preload()
{
   bAI=loadImage("Images/bA.jpg");
   bBI=loadImage("Images/bB.jpg");
   bCI=loadImage("Images/bC.jpg");
   bDI=loadImage("Images/bD.jpg");

   bg2I=loadImage("Images/backgroundB.jpg");
   bg3I=loadImage("Images/GameOver.png");

   fI=loadImage("Images/END.jpg");
}

function setup()
{
   var canvas=createCanvas(displayWidth - 30 ,displayHeight - 95);

    bA=createSprite(330,590,100,50);
    bA.addImage(bAI);
    bA.scale=0.22;
    bB=createSprite(330,420,100,50);
    bB.addImage(bBI);
    bB.scale=0.22;
    bC=createSprite(1015,590,100,50);
    bC.addImage(bCI);
    bC.scale=0.22;
    bD=createSprite(1015,420,100,50)
    bD.addImage(bDI);
    bD.scale=0.22;
}

function draw()
{
    background(bg2I);

    drawSprites();

    if(gameState==="Q1")
    {
        if(mousePressedOver(bA)||mousePressedOver(bB)||mousePressedOver(bD))
        {
            background(bg3I);
        }
        else
        {
            if(mousePressedOver(bC))
            {
                gameState="Q2";
            }
        }

        //Q.
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        let a = "What are Mars' two moons called?";
        text(a,displayWidth/2 - 350,displayHeight/3-100);

        //bA
        textSize(20);
        let b = "Callisto and Titan";
        text(b,253,600);

         //bB
        let c = "Europa and Io";
        text(c,253,430);

        //bC
        let d= "Phobos and Deimos";
        text(d,930,590);

        //bD
        let e= "Venus and Mercury";
        text(e,930,430);
    }
    
    if(gameState==="Q2")
    {
        if(mousePressedOver(bA)||mousePressedOver(bC)||mousePressedOver(bD))
        {
            background(bg3I);
        }
        else
        {
            if(mousePressedOver(bB))
            {
                gameState="Q3";
            }
        }

        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("How many Newton's Law of Motion are there?",displayWidth/2-450,displayHeight/3-100);
        
        //bA
        text("1",315,605);

        //bB
        text("3",315,430);

        //bC
        text("4",1000,600);

        //bD
        text("2",1000,430);
    }

    if(gameState==="Q3")
    {
        if(mousePressedOver(bA)||mousePressedOver(bC)||mousePressedOver(bB))
        {
            background(bg3I);
        }
        else
        {
            if(mousePressedOver(bD))
            {
                gameState="Q4";
            }
        }

        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("What is H20?",displayWidth/2-175,displayHeight/3-100);

         //bA
         text("Bismuth",250,605);

         //bB
         text("Oxygen",250,430);
 
         //bC
         text("Colbalt",940,600);
 
         //bD
         text("Water",945,430);
    }

    if(gameState==="Q4")
    {
        if(mousePressedOver(bD)||mousePressedOver(bC)||mousePressedOver(bB))
        {
            background(bg3I);
        }
        else
        {
            if(mousePressedOver(bA))
            {
                gameState="END";
            }
        }

        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("What is the only liquid metal in room temperture?",displayWidth/2-450,displayHeight/3-100);
        
        //bA
        text("Mercury",250,605);

        //bB
        text("Iron",290,430);

        //bC
        text("Nickle",945,600);

        //bD
        text("Gold",965,430);
    }

    if(gameState==="END")
    {
        background(fI);
    }
}