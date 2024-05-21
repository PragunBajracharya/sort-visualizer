let orderedArr = [];

const heapify = (dataArr, start, dataArrSize) => {
    let root = start;
    let left = 2 * start + 1;
    let right = 2 * start + 2; 
    orderedArr.push([root, null, null, null]);
    if (left < dataArrSize && dataArr[left] > dataArr[root]) {
        root = left;
        orderedArr.push([root, null, null, null]);
    }

    if (right < dataArrSize && dataArr[right] > dataArr[root]) {
        root = right;
        orderedArr.push([null, root, null, null]);
    }

    if (root !== start) {
        [dataArr[start], dataArr[root]] = [dataArr[root], dataArr[start]];
        heapify(dataArr, root, dataArrSize);
        orderedArr.push([root, start, [...dataArr], null]);
    }
};

const heapSort = (dataArr) => {
    let tempDataArr = [...dataArr];
    let arrLenght = tempDataArr.length;
    let i;
    orderedArr = [];
    for (i = Math.floor(arrLenght / 2); i >= 0; i--) {
        heapify(tempDataArr, i, arrLenght);
    }

    while (arrLenght > 0) {
        [tempDataArr[0], tempDataArr[arrLenght - 1]] = [tempDataArr[arrLenght - 1], tempDataArr[0]];
        orderedArr.push([0, arrLenght - 1, [...tempDataArr], null]);
        arrLenght--;
        heapify(tempDataArr, 0, arrLenght);
    }
    
    for (i = 0; i < tempDataArr.length; i++) {
        orderedArr.push([null, null, null, i]);
    }
	return orderedArr;
};

export default heapSort;