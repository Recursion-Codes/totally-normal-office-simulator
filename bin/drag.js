
var draggableElements = document.getElementsByClassName("draggable");
for(var i = 0; i < draggableElements.length; i++){
        dragElement(draggableElements[i]);
    }
    
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = parseInt(e.clientX);
            pos4 = parseInt(e.clientY);
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            return false;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            pos1 = pos3 - parseInt(e.clientX);
            pos2 = pos4 - parseInt(e.clientY);
            pos3 = parseInt(e.clientX);
            pos4 = parseInt(e.clientY);
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            console.log(elmnt.offsetTop)
            if (elmnt.offsetTop < 0 ){
                elmnt.style.top = "0px";
            }
            if (elmnt.offsetTop > window.innerHeight-(Math.round(window.innerHeight/100)*2.5)){
                elmnt.style.top = window.innerHeight-(Math.round(window.innerHeight/100)*2.5)+ "px";
            }
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            if (elmnt.offsetLeft < 0 ){
                elmnt.style.left = "0px";
            }
            if (elmnt.offsetLeft > window.innerWidth-100){
                elmnt.style.left = (window.innerWidth-100)+ "px";
            }
        }
    
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }