var files=[ "./geoid/ascii _raster_file/corgeo.asc", "./geoid/EGM0825min2.txt","./geoid/ascii _raster_file/WGM20212Last.asc", "./geoid/ascii _raster_file/ascigrid.asc","/geoid/ascii _raster_file/srtmlast11.asc"];


var datacor=[];
var Longcor=[];
var Latcor=[];
var Cor=[] ;
var Datab=[];
var sp=[];
var tosplit;
var locName=[];
var testData=[];
var i=0;
var addressPoints=[];

var intensity=[];
var xgrid=[];
var ygrid=[];

var xgrid2=[];
var ygrid2=[];

var xgrid3=[];
var ygrid3=[];

var xgrid4=[];
var ygrid4=[];

var xgridl=[];
var ygridl=[];
var heatmapLayer2;
var heatmapLayer3; 
var heatmapLayer4;
var heatmapLayer5;

    var reader  = new XMLHttpRequest()|| new ActiveXObject('MSXML2.XMLHTTP');
    var datacorr=[];


function loadcor(){
     Datab=[];
     tosplit=null;
     sp=null;

    reader.open("get",files[i], true);
    reader.onreadystatechange=  storedata;
    reader.send(null);
   
   }

function storedata (){

    if(reader.readyState==4) {
   
          
           //READ Correction DATA
           datacor=[];
           datacorr=[];
           datacorr=reader.responseText.split("\n");

           datacor=datacorr;


          
if(i==1){


    var l=0;
  for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

  
      Longcor[j] = parseFloat(sp[0]);
     

      Latcor[j] = parseFloat(sp[1]);
      

        Cor[j] =(sp[2]);
      
      

    }

}


/*if(i==2){

    for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

      locName[j]=sp[0];
      Longcor[j] = parseFloat(sp[1]);
      Latcor[j] = parseFloat(sp[2]);
        Cor[j] =parseFloat(sp[3]);

    }

}*/


//////////////griding/////////////////////////////////////////////////
if(i==3 || i==2|| i==4 ||i==0){
  intensity=[];



  

  /////////////load intensity
  for(let j=6; j<=datacor.length-3;j++)
  {
    sp = [];
    tosplit=[];
    tosplit = String(datacor[j]); 
   

  
    sp = tosplit.split(" ");
    sp= sp.slice(0);
    //sp=sp.push("");
   

    sp=sp.map(s => parseFloat(s));

    sp[0]=null;
    sp[sp.length]=null;

    if(j==6){
      sp=sp.map(s=>null);
    }
    if(j==datacor.length-3){
      sp=sp.map(s=>null);
    }


    intensity.push(sp);
    
  }


  //////genrate coordinate drid
  var s=0;

  var paslong;
  var paslat;

  var orglong;
  var orglat;


  if(i==0){

    /////COR GEO 
    paslong=0.0991909 ;
    paslat=0.09944730;
  
    orglong=42.0767;
    orglat=10.2638;
    s=0;


    for(let j=0; j<=200;j++){
      ygridl=[];
      xgridl=[];
      
      for(let i=0; i<=200;i++)
      {
        /*xgridl[i]=42.3958 +0.4861111*(i);
        
        ygridl[i]=(-1)*11.4375+(-0.497311)*s;*/
  
  
        xgridl[i]=orglong +paslong*(i);
        
        ygridl[i]=(-1)*orglat+(-paslat)*s;
       
      }
      s=s+1;
  
      ygrid4.push(ygridl);
  
      xgrid4.push(xgridl);
  
  
  }

  var data=[];
 data= {
  x: xgrid4,
  y: ygrid4,
  z: intensity,
  };


}



  if(i==2){

  paslong=0.1000000 ;
  paslat=0.1000000;

  orglong=40.0000000;
  orglat=8.00000;
  //console.log("WGM"+intensity);

  for(let j=0; j<=2568;j++){
    ygridl=[];
    xgridl=[];
    
    for(let i=0; i<=550;i++)
    {
      /*xgridl[i]=42.3958 +0.4861111*(i);
      
      ygridl[i]=(-1)*11.4375+(-0.497311)*s;*/


      xgridl[i]=orglong +paslong*(i);
      
      ygridl[i]=(-1)*orglat+(-paslat)*s;
     
    }
    s=s+1;

    ygrid.push(ygridl);

    xgrid.push(xgridl);


}

var data=[];
 data= {
  x: xgrid,
  y: ygrid,
  z: intensity,
  };
  //console.log(intensity);

  }


  if(i==3){
    
  
    paslong=0.04166 ;
    paslat=0.04166;
  
    orglong=42.3958;
    orglat=11.4375;
    s=0;


    for(let j=0; j<=500;j++){
      ygridl=[];
      xgridl=[];
      
      for(let i=0; i<=500;i++)
      {
        /*xgridl[i]=42.3958 +0.4861111*(i);
        
        ygridl[i]=(-1)*11.4375+(-0.497311)*s;*/
  
  
        xgridl[i]=orglong +paslong*(i);
        
        ygridl[i]=(-1)*orglat+(-paslat)*s;
       
      }
      s=s+1;
  
      ygrid2.push(ygridl);
  
      xgrid2.push(xgridl);
  
  
  }

  var data=[];
 data= {
  x: xgrid2,
  y: ygrid2,
  z: intensity,
  };

    }


    ///SRTM DATA
    
  if(i==4){
    
  
    paslong=0.00999999 ;
    paslat=0.00999803110;
  
    orglong=41.6596;
    orglat=10.04458334;
    s=0;


    for(let j=0; j<=1700;j++){
      ygridl=[];
      xgridl=[];
      
      for(let i=0; i<=1200;i++)
      {
        /*xgridl[i]=42.3958 +0.4861111*(i);
        
        ygridl[i]=(-1)*11.4375+(-0.497311)*s;*/
  
  
        xgridl[i]=orglong +paslong*(i);
        
        ygridl[i]=(-1)*orglat+(-paslat)*s;
       
      }
      s=s+1;
  
      ygrid3.push(ygridl);
  
      xgrid3.push(xgridl);
  
  
  }

  var data=[];
 data= {
  x: xgrid3,
  y: ygrid3,
  z: intensity,
  };

  console.log(intensity);

    }

 

 

//////Data



  ///////grid color function

  const colors = [
    {
      color: "#053061",
      point: 0,
    },
    {
      color: "#09386d",
      point: 0.032258064516129,
    },
    {
      color: "#134c87",
      point: 0.0645161290322581,
    },
    {
      color: "#1d5fa2",
      point: 0.0967741935483871,
    },
    {
      color: "#276eb0",
      point: 0.129032258064516,
    },
    {
      color: "#337eb8",
      point: 0.161290322580645,
    },
    {
      color: "#3f8ec0",
      point: 0.193548387096774,
    },
    {
      color: "#569fc9",
      point: 0.225806451612903,
    },
    {
      color: "#71b0d3",
      point: 0.258064516129032,
    },
    {
      color: "#8dc2dc",
      point: 0.290322580645161,
    },
    {
      color: "#a2cde3",
      point: 0.32258064516129,
    },
    {
      color: "#b8d8e9",
      point: 0.354838709677419,
    },
    {
      color: "#cfe4ef",
      point: 0.387096774193548,
    },
    {
      color: "#ddebf2",
      point: 0.419354838709677,
    },
    {
      color: "#eaf1f5",
      point: 0.451612903225806,
    },
    {
      color: "#f7f6f6",
      point: 0.483870967741936,
    },
    {
      color: "#f9eee7",
      point: 0.516129032258065,
    },
    {
      color: "#fbe4d6",
      point: 0.548387096774194,
    },
    {
      color: "#fdd9c4",
      point: 0.580645161290323,
    },
    {
      color: "#f9c6ac",
      point: 0.612903225806452,
    },
    {
      color: "#f6b394",
      point: 0.645161290322581,
    },
    {
      color: "#f2a17f",
      point: 0.67741935483871,
    },
    {
      color: "#e8896c",
      point: 0.709677419354839,
    },
    {
      color: "#dd7059",
      point: 0.741935483870968,
    },
    {
      color: "#d25849",
      point: 0.774193548387097,
    },
    {
      color: "#c53e3d",
      point: 0.806451612903226,
    },
    {
      color: "#b82531",
      point: 0.838709677419355,
    },
    {
      color: "#a81529",
      point: 0.870967741935484,
    },
    {
      color: "#8d0c25",
      point: 0.903225806451613,
    },
    {
      color: "#730421",
      point: 0.935483870967742,
    },
    {
      color: "#67001f",
      point: 1,
    },
  ];
  function getColor(value, min, max, colors) {
    function hex(c) {
      var s = "0123456789abcdef";
      var i = parseInt(c, 10);
      if (i === 0 || isNaN(c)) return "00";
      i = Math.round(Math.min(Math.max(0, i), 255));
      return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
    }
    function trim(s) {
      return s.charAt(0) === "#" ? s.substring(1, 7) : s;
    }
    function convertToRGB(hex) {
      var color = [];
      color[0] = parseInt(trim(hex).substring(0, 2), 16);
      color[1] = parseInt(trim(hex).substring(2, 4), 16);
      color[2] = parseInt(trim(hex).substring(4, 6), 16);
      return color;
    }
    function convertToHex(rgb) {
      return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
    }

    if (value === null || isNaN(value)) {
      return "#ffffff";
    }
    if (value > max) {
      return colors[colors.length - 1].color;
    }
    if (value < min) {
      return colors[0].color;
    }
    var loc = (value - min) / (max - min);
    if (loc < 0 || loc > 1) {
      return "#fff";
    } else {
      var index = 0;
      for (var i = 0; i < colors.length - 1; i++) {
        if (loc >= colors[i].point && loc <= colors[i + 1].point) {
          index = i;
        }
      }
      var color1 = convertToRGB(colors[index].color);
      var color2 = convertToRGB(colors[index + 1].color);

      var f =
        (loc - colors[index].point) /
        (colors[index + 1].point - colors[index].point);
      var rgb = [
        color1[0] + (color2[0] - color1[0]) * f,
        color1[1] + (color2[1] - color1[1]) * f,
        color1[2] + (color2[2] - color1[2]) * f,
      ];

      return `#${convertToHex(rgb)}`;
    }
  }



  //////Layer variable
  if(i==0){
    ////CORGeo
        heatmapLayer5= L.contour(data, {
          thresholds:100,
          style: (feature) => {
            return {
              color: getColor(feature.geometry.value,-3,1.4, colors),
              opacity: 0.05,
              fillOpacity: 0.05,
            };
          },
          onEachFeature: onEachContour(),
        });
      
        function onEachContour() {
          return function onEachFeature(feature, layer) {
            //console.log(feature.value);
        
            layer.bindPopup(
              `<table><tbody><tr><td>${feature.value} m </td></tr></tbody></table>`
            );
          };
      
        }
    
      }




  if(i==2){
////BOuguer WGM 2012
    heatmapLayer3= L.contour(data, {
      thresholds:200,
      style: (feature) => {
        return {
          color: getColor(feature.geometry.value,150,200, colors),
          opacity: 0.05,
          fillOpacity: 0.06,
        };
      },
      onEachFeature: onEachContour(),
    });
  
    function onEachContour() {
      return function onEachFeature(feature, layer) {
        //console.log(feature.value);
    
        layer.bindPopup(
          `<table><tbody><tr><td>${feature.value} mgal </td></tr></tbody></table>`
        );
      };
  
    }

  }

  if(i==3){
// GEOID EGM2008
  heatmapLayer2= L.contour(data, {
    thresholds:100,
    style: (feature) => {
      return {
        color: getColor(feature.geometry.value,-31,11, colors),
        opacity: 0.2,
        fillOpacity: 0.04,
      };
    },
    onEachFeature: onEachContour(),
  });

  function onEachContour() {
    return function onEachFeature(feature, layer) {
      //console.log(feature.value);
  
      layer.bindPopup(
        `<table><tbody><tr><td>${feature.value} m</td></tr></tbody></table>`
      );
    };

  }

}

if(i==4){
  // SRTM
    heatmapLayer4= L.contour(data, {
      thresholds:100,
      style: (feature) => {
        return {
          color: getColor(feature.geometry.value,-1,2418, colors),
          opacity: 0.2,
          fillOpacity: 0.1,
        };
      },
      onEachFeature: onEachContour(),
    });
  
    function onEachContour() {
      return function onEachFeature(feature, layer) {
        //console.log(feature.value);
    
        layer.bindPopup(
          `<table><tbody><tr><td>${feature.value} m</td></tr></tbody></table>`
        );
      };
  
    }
  
  }





}
/////////////////

  
var obj=[];
for(let f=0; f<=datacor.length-3; f++){

  obj[f]={lat: Latcor[f], lng: Longcor[f], count: Cor[f]}
  Datab.push(obj[f]);

  //leaflet-heat data format
  var txt= + Cor[f];
  //console.log(txt);
  obj[f]=[Latcor[f],Longcor[f],txt];
  addressPoints.push(obj[f]);

 

}




////

  

      testData[i] = {
    
       
        data: Datab
      };

      if (i<=4){
          i=i+1;
        loadcor();

      }

    else{
        display();
       

    }


           
        
    //return console.log(datacorr);

           
           }
      }