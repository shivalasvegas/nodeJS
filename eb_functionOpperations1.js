//User defined function
//This is called a procedure as there is no return statement
function calculator(num1, num2, opp="add"){
	let result=0;
	if(opp=="add"){
	result=num1+num2;
	
	}
	if(opp=="subtract"){
	result=num1-num2;
	
	}
	if(opp=="multiply"){
	result=num1*num2;
	}
	if(opp=="divide"){
	result=num1/num2;
	
	}


	console.log("Result of ", opp, " is: ",result.toFixed(2));	// 2 d.p.
	return result;	
}

//calculator(89, 90);
//calculator(56, 45, "subtract");
//calculator(num2=20, num1=10) // named parameter passing

//calculator(89, 90, "divide");
//calculator(34, 65, "multiply");

// creates an argument structure and store all the values in the function call
function add(a,b){
	let result=0;
	console.log(arguments) // predefined variable
	//console.log(result);
}

add(2, 3);
add(3, 4, 5, 6, 7, 7, 8); // arguments do not have to be named in function call
//result: [Arguments] { '0': 2, '1': 3 }
//[Arguments] { '0': 3, '1': 4, '2': 5, '3': 6, '4': 7, '5': 7, '6': 8 }

function add2(){
	let result=0;
	console.log("Number of arguments: ", arguments.length) // predefined variable
	//console.log(result);
}

add2(2, 4, 5, 6, 7, 8);


function add3(){
	let result=0;
	let i=0;
	while (i<arguments.length){
	result=result+arguments[i];
	console.log("->", arguments[i], "result: ", result);
	i++;
	}
}

add3(3, 4, 5,6 ,7, 9);

// find the highest number
// find the first second and third highest numbers

function sortHighest(){
	const array1 = Array.from(arguments);

	const sorted = array1.sort((a, b)=>{
		return a-b;
	});
	console.log("sortin it out:  ", sorted);
	console.log("The highest: ", sorted[sorted.length-1]);
}

sortHighest(3, 4, 5, 6, 10, 1,3);

function sortFirstThree(){
	const array1 = Array.from(arguments);
	const array2 = [];
	const array3 = [];
	let num1 = 0;
	const sorted = array1.sort((a, b)=>{
		return a-b;
	});
	//console.log("sortin it out: (again)  ", sorted);
	let index = array1.length-1;
	for (i=0; i<=array1.length; i++){
		num1 = sorted[index-i];
		if (num1 != sorted[index-i-1])
		array2.push(num1);
	}
	//console.log("The highest array: ", array2);
	
	for (i=0; i<=2; i++){
		num1=array2[i];
		array3.push(num1);
	}
	console.log("The highest 3:  ", array3);
}

sortFirstThree(4, 4, 4, 2, 1, 6, 6,3);

module.exports = {calculator};