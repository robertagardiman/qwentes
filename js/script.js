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

// Transform the navigation in black or white, depending of the brightness of the image
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
        }else{
            //need white navigation
            $(".logo.logo-black").addClass("hiddenLogo");
            $(".logo.logo-white").removeClass("hiddenLogo");
            $("nav").removeClass("black");
        }
    });
}