var hh = document.getElementsByTagName('html')[0]
hh.
hh.addEventListener('onmousemove',()=>{
    mMove()
})
function mMove(event){
    var x= event.clientY
    var y=event.clientX;
    document.getElementsByTagName('a')[0].innerHTML=x+"----"+y +"-----"+event.screenX
    
    }
    
