let boxOfficeImage;
let imageLoaded = false;
let performances, performancesOn, performancesOff, conversations, conversationsOn, conversationsOff, make, makeOn, makeOff, info, infoOn, infoOff;
let xPercent;
let yPercent;

function preload(){
    boxOfficeImage = loadImage("/connectivity/images/HomePageMain.png");
    performancesOff = loadImage("/connectivity/images/performances.png");
    conversationsOff = loadImage("/connectivity/images/conversations.png");
    makeOff = loadImage("/connectivity/images/makemusic.png");
    infoOff = loadImage("/connectivity/images/info.png");
    performances = performancesOff;
    conversations = conversationsOff;
    make = makeOff;
    info = infoOff;
}

function setup() {  // setup p5

    let masterDiv = document.getElementById("container");
    let divPos = masterDiv.getBoundingClientRect(); //The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels.
    let masterLeft = divPos.left; // distance from left of screen to left edge of bounding box
    let masterRight = divPos.right; // distance from left of screen to the right edge of bounding box
    cnvDimension = masterRight - masterLeft; // size of div -however in some cases this is wrong, so i am now using css !important to set the size and sca;ing - but have kept this to work out size of other elements if needed

    console.log("canvas size = " + cnvDimension);

    let cnv = createCanvas(cnvDimension, cnvDimension); // create canvas - because i'm now using css size and !important this is really about the ratio between them, so the second number effects the shape. First number will be moved by CSS
    cnv.id('mycanvas'); // assign id to the canvas so i can style it - this is where the css dynamic sizing is applied
    cnv.parent('p5parent'); //put the canvas in a div with this id if needed - this also needs to be sized

    // *** add vanilla JS event listeners for touch which i want to use in place of the p5 ones as I believe that they are significantly faster
    let el = document.getElementById("p5parent");
    el.addEventListener("click", handleClick);

    performancesOn = loadImage("/connectivity/images/performances_invert.png");
    conversationsOn = loadImage("/connectivity/images/conversations_invert.png");
    makeOn = loadImage("/connectivity/images/makemusic_invert.png");
    infoOn = loadImage("/connectivity/images/info_invert.png");
}

let perfX, perfY, perfWidth, perfHeight, convX, convY, convWidth, convHeight, makeX, makeY, makeWidth, makeHeight, infoX, infoY, infoWidth, infoHeight; //do this for all the options then use the variables for both mouseOver, dimensions and click

function draw() {
    xPercent = width/100;
    yPercent = height/100;

    perfX = xPercent*35.1;
    perfY = yPercent*19.92;
    perfWidth = xPercent*18.49;
    perfHeight = yPercent*33.26;
    convX = xPercent*55.79;
    convY = yPercent*19.92;
    convWidth = xPercent*13;
    convHeight = yPercent*30.46;
    makeX = xPercent*74.94;
    makeY = yPercent*19.83;
    makeWidth = xPercent*14.9;
    makeHeight = yPercent*21.7;
    infoX = xPercent*10.43;
    infoY = yPercent*74.08;
    infoWidth = xPercent*15.66;
    infoHeight = yPercent*18.01;

    imageMode(CORNER);
    image(performances, perfX, perfY, perfWidth, perfHeight);
    image(conversations, convX, convY, convWidth, convHeight);
    image(make, makeX, makeY, makeWidth, makeHeight);
    image(info, infoX, infoY, infoWidth, infoHeight);
    image(boxOfficeImage, 0, 0, width, height);

}

function windowResized() {
    let masterDiv = document.getElementById("container");
    let divPos = masterDiv.getBoundingClientRect(); //The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels.
    let masterLeft = divPos.left; // distance from left of screen to left edge of bounding box
    let masterRight = divPos.right; // distance from left of screen to the right edge of bounding box
    cnvDimension = masterRight - masterLeft; // size of div -however in some cases this is wrong, so i am now using css !important to set the size and sca;ing - but have kept this to work out size of other elements if needed

    resizeCanvas(cnvDimension, cnvDimension);
  }

function handleClick() {
    //performance
    if((mouseX > perfX) && (mouseX < perfX + perfWidth) && (mouseY > perfY) && (mouseY < perfY + perfHeight)){
        console.log("click");
        window.location.href = "/connectivity/performance.html";
        performances = performancesOn;
    }
    if((mouseX > convX) && (mouseX < convX + convWidth) && (mouseY > convY) && (mouseY < convY + convHeight)){
        console.log("click");
        window.location.href = "/connectivity/conversations.html";
        conversations = conversationsOn;
    }
    if((mouseX > makeX) && (mouseX < makeX + makeWidth) && (mouseY > makeY) && (mouseY < makeY + makeHeight)){
        console.log("click");
        window.location.href = "/connectivity/make.html";
        make = makeOn;
    }
    return false;
}
