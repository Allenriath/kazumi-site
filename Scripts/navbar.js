var i;
var pageNumber = $('input[name=group1]');
var page = ["#home", "#about", "#comissions", "#project"]


function activateSlider(){
    for(i=0; i<pageNumber.length; i++){
        if(pageNumber[i].checked){
            
            $(page[i]).scrollTop(0);
            $('.carousel').carousel(i);
        }
    }
    
}

$('#top_links').click(activateSlider);
  
