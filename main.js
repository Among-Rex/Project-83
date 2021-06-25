        var last_position_of_x,last_position_of_y;
        var canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        colour = "black";
        width = 1;
        var width = screen.width;
        canvas_width = screen.width - 70;
        canvas_height = screen.height - 100;
    if (width < 992) {
        document.getElementById("myCanvas").width = canvas_width;
        document.getElementById("myCanvas").height = canvas_height;
        document.body.style.overflow = hidden;
    }

    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e) {
        colour = document.getElementById("colour").value;
        width = document.getElementById("width").value;
        console.log("my_touchstart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e) {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft; 
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        console.log("last_position_of_x =" + last_position_of_x + "last_position_of_y =" + last_position_of_y);
        console.log("current_position_of_touch_x =" + current_position_of_touch_x + "current_position_of_y =" + current_position_of_touch_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
        last_position_of_x = current_position_of_touch_x;
        last_position_of_y = current_position_of_touch_y;
    }
    function clearArea() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }