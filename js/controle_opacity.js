///////////////Range control
//fille opacity controle

function addcontrol_opacity(data){



    var slider1 = L.control.range({
        position: 'topleft',
        min: 0,
        max: 0.1,
        value: 0.05,
        step: 0.001,
        orient: 'vertical',
        iconClass: 'leaflet-range-icon',
        icon: true,
        label:'fillOpacity',
    });
    
    slider1.on('input change', function(e) {
    
    var year =parseFloat(e.value);
    
    data.setStyle({ fillOpacity:e.value});
    
     
    });
    
    //opacity controle
    var slider2 = L.control.range({
        label: 'Contours Opacity',
        position: 'topleft',
        min: 0,
        max: 0.1,
        value: 0.05,
        step: 0.001,
        orient: 'vertical',
        iconClass: 'leaflet-range-icon',
        icon: true
    });
    
    slider2.on('input change', function(e) {
    
    var year =parseFloat(e.value);
    
   data.setStyle({ opacity:e.value});
    
     
    });
    
    
    
    
    
    function getStyle(y){
    //fillColor: getColor(y),
    {return {
             opacity:getOpacity(y)}}
      /*if (y >= 100) {return {fillColor: "#ff0000", fillOpacity: 10}}
      if (y <= 10) {return {fillColor: "#ff0000", fillOpacity: 0}}
      if (y>10 || y< 100) {return {fillColor: "#ff0000", fillOpacity: 1}}
      else {return {fillOpacity: 0}}*/
    }
    
    
    
    function getOpacity(d){
      if (d >= 50) {return { fillOpacity: 10}}
      else {return { fillOpacity: 0}}
    
    }
    
    map.addControl(slider1);
    map.addControl(slider2);
    


}
