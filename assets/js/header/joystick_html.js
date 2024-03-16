document.getElementById("offcanvasScrolling").innerHTML = `

<div class="offcanvas-header">
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<h5>JOYSTICK</h5>
<div class="offcanvas-body">
<div class="joystick">
    <div class="btn-top joystick-btn">
        <div id="btn_circle_out_UP" class="btn_circle_outlet" >
            <div class="btn_circle_inlet">
                <button id="btn_UP" class="btn_cmd">
                    <img src="assets/icons/up-arrow.png">
                </button>
            </div>
        </div>
    </div>

    <div class="btn-right joystick-btn">
        <div id="btn_circle_out_RIGHT" class="btn_circle_outlet " >
            <div class="btn_circle_inlet">
                <button id="btn_RIGHT" class="btn_cmd ">
                    <img src="assets/icons/right-arrow.png">
                </button>
            </div>
        </div>
    </div>

    <div class="btn-down joystick-btn">
        <div id="btn_circle_out_DOWN" class="btn_circle_outlet " >
            <div class="btn_circle_inlet">
                <button id="btn_DOWN" class="btn_cmd ">
                    <img src="assets/icons/down-arrow.png">
                </button>
            </div>
        </div>
    </div>

    <div class="btn-left joystick-btn">
        <div id="btn_circle_out_LEFT" class="btn_circle_outlet " >
            <div class="btn_circle_inlet">
                <button id="btn_LEFT" class="btn_cmd ">
                    <img src="assets/icons/left-arrow.png">
                </button>
            </div>
        </div>
    </div>
</div>

</div>
<div class="container-manual-btn">
    <!-- Command GO  -->
    <div class="btn_cmd_container">
        <div id="btn_circle_out_ON" class="btn_circle_outlet " >
            <div class="btn_circle_inlet">
                <button id="btn_ON" class="btn_cmd ">
                    ON
                </button>
            </div>
        </div>
    </div>

    <div class="btn_cmd_container ">
        <div id="btn_circle_out_OFF"  class="btn_circle_outlet" >
            <div class="btn_circle_inlet ">
                <button id="btn_OFF" class="btn_cmd">
                    OFF
                </button>
            </div>
        </div>
    </div>
</div>
</div>
`;