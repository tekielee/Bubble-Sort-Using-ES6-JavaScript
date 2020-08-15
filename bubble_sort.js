function bubbleSort(array) {
	let len = array.length;
	let count = 0;
	let bound = len - 1;
	for(let i = 0; i < len; i++) {
		let swapped = false;
		let newBound = 0;
		for(let j = 0; j < bound; j++) {
			count++;
			if(array[j] > array[j + 1]) {
				let tmp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = tmp;
				swapped = true;
				newBound = j;
			}
		}
		bound = newBound;
		if(!swapped) {
			break;
		}
	}
	return array;
}

let array = [20, 45, 93, 67, 10, 97, 52, 88, 33, 92];
let sortedArray = bubbleSort(array);
console.log(sortedArray);