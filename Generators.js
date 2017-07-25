function* greet (){
	let friendly=yield "How";
	friendly= yield friendly + "are";
	friendly= yield friendly + "you";

}

var greeter=greet();
console.log(greeter.next().value);
console.log(greeter.next("the heck").value);
console.log(greeter.next("silly ol'").value);
console.log(greeter.next());

	
