var fs = require('fs');
var request = require('request');
/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback); 
}

let fileUrl  = 'https://sf1-ttcdn-tos.pstatp.com/obj/ttfe/1107/webviewtests.html';
let filename = 'template/template.html';
downloadFile(fileUrl, filename, function(){
    console.log(filename+'下载完毕');
});