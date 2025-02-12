var fs = require('fs');
var shp2stl = require('shp2stl');

var file = 'douglas500fpoly.shp';

shp2stl.shp2stl(file,
    {
        width: 100, //in STL arbitrary units, but typically 3D printers use mm
        height: 10,
        extraBaseHeight: 0,
        extrudeBy: "ELEV",
        simplification: .8,
        binary: false,
        cutoutHoles: false,
        verbose: true,
        extrusionMode: 'straight'
    },
    function(err, stl) {
        fs.writeFileSync('douglas500fpoly.stl',  stl);
    }
);
