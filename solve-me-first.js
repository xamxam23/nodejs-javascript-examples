process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var args = "";
var line = 0;

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', () => {
	console.log("end");
    args = input.split("\n");
    console.log(args);
	main();
});

function readLine(){
	return args[line++];
}

function add(a,b){ return a+b;}

function main(){
	var a = parseInt(readLine());
	var b = parseInt(readLine());
	 
	var res = add(a, b);
	return console.log("ans = " +  res);
}