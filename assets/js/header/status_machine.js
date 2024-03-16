// Function to decode HTML entities using a regular expression
function decodeHTMLEntity(htmlString) {
    // Regular expression to match HTML entities like "&#x27;"
    var entityRegex = /&#(?:x([\da-fA-F]+)|(\d+));/g;

    // Replace HTML entities with their corresponding characters
    return htmlString.replace(entityRegex, function(match, hex, dec) {
        return hex ? String.fromCharCode(parseInt(hex, 16)) : String.fromCharCode(dec);
    });
}

function removeFirstAndLastChar(str) {
    // Check if the string has at least two characters
    if (str.length >= 2) {
        // Remove the first and last characters using substring
        return str.substring(1, str.length - 1);
    } else {
        // If the string has less than two characters, return an empty string
        return '';
    }
}          

function updateStatus(){
    // Decode HTML-encoded text
    var htmlString = gStatusMachine;
    var decodedString = decodeHTMLEntity(htmlString);
    var result = removeFirstAndLastChar(decodedString);
    $('#current-state').text(decodedString);

console.log(gMode);
    // Current Mode
    if (gMode==1) {
        $('#current-mode').text('Automatic');
    } else {
        $('#current-mode').text('Manual');
    }
    
}

setInterval(updateStatus, 1000);