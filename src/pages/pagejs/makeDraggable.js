const makeElementDraggable = (element) => {
    var mousePosition;
    var offset = [0,0];
    
    var isDown = false;

    element.style.position = "absolute";
    element.style.transform = "translate(-50%, -50%)";

    element.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            element.offsetLeft - e.clientX,
            element.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);
    
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            element.style.left = (mousePosition.x + offset[0]) + 'px';
            element.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
    
}

export default makeElementDraggable;