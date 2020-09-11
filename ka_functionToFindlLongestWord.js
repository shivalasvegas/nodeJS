// print longest word
function longestWord(message){
	var splitMessage = message.split(" ");
	let wordLength = 0;
	let lWord = "";
	
	for (let i=0; i<splitMessage.length; i++){
		if(splitMessage[i].length > wordLength){
			wordLength = splitMessage[i].length; 
			lWord = splitMessage[i];
		}	
	}
	console.log(lWord);
}

longestWord("I am going to London, and will be back tomorrow");