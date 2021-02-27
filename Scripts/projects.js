
var changeSpotlight = function() {

    if(screen.availHeight > screen.availWidth){
        index = slider.getInfo().displayIndex;
    }  else {
        index = $(".slide-item").index(this)+1;
    }       

    let spotlight = $('#project'+index);
    $('.project-description')   .css('opacity','0')
                                .css('transition','opacity 0s')
                                .css('display','none');

    spotlight   .css('display','block')
                .css('opacity','1')
                .css('transition','opacity 3s ease');
    
    spotlight.scrollTop(0);
}

if(screen.availHeight > screen.availWidth){

    slider.events.on('indexChanged',changeSpotlight);

} else {
        
    $('.slide-item').click(changeSpotlight);

};


