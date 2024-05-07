let orderArr = [];

const merge = (dataArr, left, mid, right) => {
	let i = left, j = mid + 1;

    const arr = [];

    while (i <= mid && j <= right) {
        orderArr.push([i, j, null, null]);     // Compare i-th and j-th elements
        if (dataArr[i] < dataArr[j]) {
            arr.push(dataArr[i++]);
        } else {
            arr.push(dataArr[j++]);
        }
    }

    while (i <= mid) {
        orderArr.push([i, null, null, null]);
        arr.push(dataArr[i++]);
    }

    while (j <= right) {
        orderArr.push([null, j, null, null]);
        arr.push(dataArr[j++]);

    }

    for (i = left; i <= right; i++) {
        dataArr[i] = arr[i - left];
        orderArr.push([i, null, [...dataArr], null]);
    }
};

const mergeSortHelper = (dataArr, left, right) => {
    if (left >= right) {
        return;
    }
    const mid = left + Math.floor((right - left) / 2);
    mergeSortHelper(dataArr, left, mid);
    mergeSortHelper(dataArr, mid + 1, right);

    merge(dataArr, left, mid, right);
};

const mergeSort = (dataArr) => {
	const tempArray = [...dataArr];
	orderArr = [];
	mergeSortHelper(tempArray, 0, tempArray.length - 1);
    for (let i = 0; i < tempArray.length; i++) {
        orderArr.push([null, null, null, i]); // i th element will be in correct position
    }
	return orderArr;
};


export default mergeSort;