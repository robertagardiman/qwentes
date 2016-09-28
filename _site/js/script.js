function getImageBrightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;

          for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];

            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }

        var brightness = Math.floor(colorSum / (this.width*this.height));
        callback(brightness);
    }
}

// Transform the navigation, the drag-bar and the copy-image in black or white, depending of the brightness of the image
function blackOrWhiteHeader(stile){
    getImageBrightness(stile,function(brightness) {
        console.log("Brightness "+ stile +": "+brightness);
        var brightnessValue = parseInt(brightness);
        console.log(brightnessValue);
        if(brightnessValue > 127){
            //need black navigation
            $(".logo.logo-white").addClass("hiddenLogo");
            $(".logo.logo-black").removeClass("hiddenLogo");
            $("nav").addClass("black");
            $(".drag-bar").addClass("black");
            $(".img-copy").addClass("black");
            $(".manina").addClass("black");
        }else{
            //need white navigation
            $(".logo.logo-black").addClass("hiddenLogo");
            $(".logo.logo-white").removeClass("hiddenLogo");
            $("nav").removeClass("black");
            $(".drag-bar").removeClass("black");
            $(".img-copy").removeClass("black");
            $(".manina").removeClass("black");
        }
    });
}

//Set random Time
function setRandomTime(){
    var randomTime = Math.floor((Math.random() * 15000) + 5000);
    //var randomTime = Math.floor((Math.random() * 5000));
    return randomTime;
}

//Set random Sprite
function setRandomSprite(){
    var randomSprite = Math.floor((Math.random() * 3) + 1);
    return randomSprite;
}

//Add class sprite-1/2/3 in a random time
function addSpritesRandom(whereIs, randomSprite){
    console.log("Random sprite: " + randomSprite);
    if(whereIs == "home"){
        for(var i = 1; i <= 3; i++){
            $(".logo.logo-white").removeClass("sprite-white-"+i);
            $(".logo.logo-black").removeClass("sprite-black-"+i);
        }
        $(".logo.logo-white").addClass("sprite-white-"+randomSprite);
        $(".logo.logo-black").addClass("sprite-black-"+randomSprite);
    }else{
        for(var i = 1; i <= 3; i++){
            $(".logo.logo-black").removeClass("sprite-black-"+i);
        }
        $(".logo.logo-black").addClass("sprite-black-"+randomSprite);
    }
}


