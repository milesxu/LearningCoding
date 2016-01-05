var http = require("http");
var fs = require("fs");

var data = fs.readFileSync('D:/Documents/血肉之花1.txt');

http.createServer(function(request, response){
	response.writeHead(200, {'Conte-Type': 'text/plain'});
	response.end(data.toString() + "Hello, I want to be a muscular live stock!");
}).listen(7923);

fs.readFile('D:/Documents/血肉之花1.txt', function(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log("Accepting real chef!");