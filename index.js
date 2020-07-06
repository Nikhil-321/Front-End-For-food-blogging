
var i = 0;


function Read(){


if(!i){
    document.querySelector("#more").style.
    display = "inline";
    document.querySelector("#morebtn").innerHTML="See Less Post";
    
    i = 1;
}
    else{
            document.querySelector("#more").style.
    display = "none";
    document.querySelector("#morebtn").innerHTML="See More Post";
    
        i=0;
    }
    
}






