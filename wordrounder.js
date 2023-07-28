var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('output.txt')
});

myInterface.on('line', function (line) {
	lineRound = Math.ceil(line/100)*100;
	console.log(lineRound);
});
