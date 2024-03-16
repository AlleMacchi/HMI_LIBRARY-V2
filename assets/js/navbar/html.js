document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-dark  row_10">
    <div class="container-fluid half-height flex-column"> 
    <button type="button" id="btn_section1" class="btn page-btn no-padding selected"><img src="assets/icons/home.png"></button>
    <button type="button" id="btn_section2" class="btn page-btn no-padding"><img src="assets/icons/barcode-product.png"></button>
    <button type="button" id="btn_section3" class="btn page-btn no-padding"><img src="assets/icons/growth.png"></button>
    <button type="button" id="btn_section4" class="btn page-btn no-padding"><img src="assets/icons/control.png"></button>
    <div>
        <button type="button" id="btn_section5" class="btn page-btn no-padding"><img src="assets/icons/alarm.png"></button>
        <div id="countCircle"></div>
    </div>      
    </div>    
    <div class="container flex-column">
    <button type="button" class="btn no-padding login-btn"><img src="assets/icons/login.png"></button>
    </div>   
</nav>
`;
