var fs = require("fs");
var path = require("path");

// node moveTo.js "source" "destination" "extension" ======>>>>> Moving without date

// node moveTo.js "source" "destination" "extension" "true" ======>>>>> Moving with date


var source=process.argv[2];
var source_2 = source;
source_2 += "/";
var destination=process.argv[3];
var destination_2 = destination;
destination_2 += "/";
var extension=process.argv[4];
var control=process.argv[5];

console.log("extension :" +extension);
console.log("source: " +source);
console.log("destination : " +destination);
console.log("source_2 :" + source_2);
console.log("destination_2 :" + destination_2);

fs.readdir(source, function(err, files) {
    if (err) return;
    var regex = new RegExp("(.*?)."+(extension)+"$");
    var splitted, old_file, new_file, source, dest, fileName, ext;
    files.forEach(function(f) {
        if(f.match(regex)){
            splitted = f.split(".");
            console.log("mert: "+splitted);
            if(process.argv.length==5){
                fileName = splitted[0];
                ext = splitted[1];
                old_file = source_2+f;
                new_file = destination_2+fileName+"."+ext;
                console.log("Source:"+old_file,"\t","Destination"+new_file);
                fs.renameSync(old_file, new_file);
            }
            else if(process.argv[5]=="true"){
                fileName = splitted[0]+"_"+new Date().toLocaleString().split(",")[0].replace(/\//g,".");
                ext = splitted[1];
                old_file = source_2+f;
                new_file = destination_2+fileName+"."+ext;
                console.log("Source:"+old_file,"\t","Destination : "+new_file);
                fs.renameSync(old_file, new_file);
            }
            else {
                console.log("Error. Please check your arguments");
            }
        }
    });
});




