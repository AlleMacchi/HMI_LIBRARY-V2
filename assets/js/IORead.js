$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    setInterval(function() {
        $.getJSON("IORead.html", function(data){
             gStatusMachine = data.StatusMachine;
             gMode = data.Mode;
             gCarrierInPosition = data.CarrierInPosition;
             gCarrierInMotion = data.CarrierInMotion;
             gCarrierManSpeed = data.CarrierManSpeed;
             gCarrierPositionToReach_N = data.CarrierPositionToReach_N;
             gCarrierPositionToReach_mm = data.CarrierPositionToReach_mm;
             gCarrierActPosition_N = data.CarrierActPosition_N;
             gCarrierActPosition_mm = data.CarrierActPosition_mm;
             gPosition_1_mm = data.Position_1_mm;
             gPosition_2_mm = data.Position_2_mm;
             gPosition_3_mm = data.Position_3_mm;
             gPosition_4_mm = data.Position_4_mm;
             gPosition_5_mm = data.Position_5_mm;
             gPosition_6_mm = data.Position_6_mm;
             gPosition_7_mm = data.Position_7_mm;

     
            gAlarm_000 = data.Alarm_000;
            gAlarm_001 = data.Alarm_001;
            gAlarm_002 = data.Alarm_002;
            gAlarm_003 = data.Alarm_003;
            gAlarm_004 = data.Alarm_004;
            gAlarm_005 = data.Alarm_005;
            gAlarm_006 = data.Alarm_006;
            gAlarm_100 = data.Alarm_100;
            gAlarm_101 = data.Alarm_101;
            gAlarm_102 = data.Alarm_102;
            gAlarm_103 = data.Alarm_103;
            gAlarm_104 = data.Alarm_104;
            gAlarm_105 = data.Alarm_105;
        }
    )},1500);       
});