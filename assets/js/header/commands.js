// =========================
//  BUTTON ON
// =========================

document.getElementById("btn_ON").addEventListener("mousedown", onTouchTrueON);
document.getElementById("btn_ON").addEventListener("touchstart", onTouchTrueON);
document.getElementById("btn_ON").addEventListener("mouseup", onTouchFalseON);
document.getElementById("btn_ON").addEventListener("touchend", onTouchFalseON);


function onTouchTrueON(event) {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.On';
    var val = 1;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}

function onTouchFalseON(event) {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.On';
    var val = 0;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}



// =========================
//  BUTTON OFF
// =========================

document.getElementById("btn_OFF").addEventListener("mousedown", onTouchTrueOFF);
document.getElementById("btn_OFF").addEventListener("touchstart", onTouchTrueOFF);
document.getElementById("btn_OFF").addEventListener("mouseup", onTouchFalseOFF);
document.getElementById("btn_OFF").addEventListener("touchend", onTouchFalseOFF);


function onTouchTrueOFF(event) {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.Off';
    var val = 1;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}

function onTouchFalseOFF(event) {
    event.preventDefault();
    var url = "IOWrite.html";
    var name = '"HMI_PLC".FromHMI.Command.Off';
    var val = 0;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}
