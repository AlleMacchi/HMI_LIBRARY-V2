// ===================================
// BUTTON ON
// ===================================

document.getElementById("btn_ON").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_ON").classList.add("pressed");
});

document.getElementById("btn_ON").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_ON").classList.remove("pressed");
});

document.getElementById("btn_ON").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_ON").classList.add("pressed");
});

document.getElementById("btn_ON").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_ON").classList.remove("pressed");
});

// ===================================
// BUTTON OFF
// ===================================

document.getElementById("btn_OFF").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_OFF").classList.add("pressed");
});

document.getElementById("btn_OFF").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_OFF").classList.remove("pressed");
});

document.getElementById("btn_OFF").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_OFF").classList.add("pressed");
});

document.getElementById("btn_OFF").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_OFF").classList.remove("pressed");
});
// ===================================
// BUTTON START
// ===================================

document.getElementById("btn_START").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_START").classList.add("pressed");
});

document.getElementById("btn_START").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_START").classList.remove("pressed");
});

document.getElementById("btn_START").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_START").classList.add("pressed");
});

document.getElementById("btn_START").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_START").classList.remove("pressed");
});

// ===================================
// BUTTON STOP
// ===================================

document.getElementById("btn_STOP").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_STOP").classList.add("pressed");
});

document.getElementById("btn_STOP").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_STOP").classList.remove("pressed");
});

document.getElementById("btn_STOP").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_STOP").classList.add("pressed");
});

document.getElementById("btn_STOP").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_STOP").classList.remove("pressed");
});

// ===================================
// BUTTON RESET
// ===================================

document.getElementById("btn_RESET").addEventListener("touchstart", function() {
    this.classList.add("selected");
});

document.getElementById("btn_RESET").addEventListener("touchend", function() {
    this.classList.remove("selected");
});

document.getElementById("btn_RESET").addEventListener("mousedown", function() {
    this.classList.add("selected");
});

document.getElementById("btn_RESET").addEventListener("mouseup", function() {
    this.classList.remove("selected");
});


function updateManAutoStatus(){

    if (gMode==1) {
        document.getElementById("btn_Automatic").classList.add("selected");
        document.getElementById("btn_Manual").classList.remove("selected");
    } else {
        document.getElementById("btn_Manual").classList.add("selected");
        document.getElementById("btn_Automatic").classList.remove("selected");
    }
}

setInterval(updateManAutoStatus, 1000);



