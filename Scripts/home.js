
$('#home').prepend('<img id="home-img" class="img-fluid" src="Images/placeholder_home.png">')
homeImg=$("#home-img");
baseContainer=$("#baseContainer");
verticalCenter = baseContainer.height()/2;
horizontalCenter = baseContainer.width()/2;
offset = baseContainer.offset().top;

homeImg.on('load', function(){
        xRadius = homeImg[0].width/2;
        yRadius = homeImg[0].height/2;
        xPosition=horizontalCenter-xRadius;
        yPosition=(verticalCenter-yRadius);
        homeImg
            .css('top',yPosition)
            .css('left',xPosition)
            .css('visibility', 'visible');
    });
    
;
