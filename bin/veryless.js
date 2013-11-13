#!/usr/bin/env node

//bin
//@author feichang <veryued@gmail.com>
var fs = require('fs'),
    https = require('https'),
    argv = process.argv,
    commend = argv[2],
    folderPath = argv[3],
    root = argv[4];

if(commend == '-init' && folderPath){
    console.log('Init... Please wait for a moment!');
    fs.mkdir(folderPath+'/veryless');
    fs.mkdir(folderPath+'/veryless/plugin');
    fs.mkdir(folderPath+'/less');
    fs.mkdir(folderPath+'/css');

    https.get("https://raw.github.com/feichang/veryless/master/dist/2.0/veryless.less", function(res) {

        var ws = fs.createWriteStream(folderPath+'/veryless/veryless.less');
        res.pipe(ws);
        console.log('Init success!');
      
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
}else if(commend == '-use' && folderPath && root){

    console.log('Download plugin... '+folderPath+' Please wait for a moment!');
    https.get("https://raw.github.com/feichang/veryless/master/plugins/"+folderPath+"/index.less", function(res) {

        var ws = fs.createWriteStream(root+'/veryless/plugin/'+folderPath+'.less');
        res.pipe(ws);
        console.log('Download plugin success!');
      
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

}else{
    console.log('Usage: \n'+
      ' Init & Download Veryless: veryless -init path (ex: veryless -init ./myfolder) \n'+
      ' Download Veryless Plugin: veryless -use pluginname path (ex: veryless -use css3 ./myfolder) ');
}
