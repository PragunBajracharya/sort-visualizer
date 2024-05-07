let orderArr = [];

const partition = (dataArr, start, end) => {
	const pivotIndex = start;
	let j = start;

	for (let i = start + 1; i <= end; i++) {
		orderArr.push([i, pivotIndex, null, null]);
		if (dataArr[i] < dataArr[pivotIndex]) {
			j++;
			[dataArr[i], dataArr[j]] = [dataArr[j], dataArr[i]];
			orderArr.push([i, j, [...dataArr], null]);
		}
	}

	[dataArr[pivotIndex], dataArr[j]] = [dataArr[j], dataArr[pivotIndex]];
	orderArr.push([j, pivotIndex, [...dataArr], null]);
	orderArr.push([null, null, null, j]);
	return j;
};

const quickSortHelper = (dataArr, start, end) => {
	if (start >= end) {
		if (start === end) orderArr.push([null, null, null, start]);
		return;
	}

	const pivotIndex = partition(dataArr, start, end);
	quickSortHelper(dataArr, start, pivotIndex - 1);
	quickSortHelper(dataArr, pivotIndex + 1, end);
};

const quickSort = (dataArr) => {
	const tempArray = [...dataArr];
	orderArr = [];
	quickSortHelper(tempArray, 0, tempArray.length - 1);
	return orderArr;
};

export default quickSort;
