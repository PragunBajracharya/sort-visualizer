const bubbleSort = (dataArr) => {
    let tempDataArr = [...dataArr];
    let orderedArr = [];
    let temp;
    let i,j

	for (i = 0; i < tempDataArr.length; i++) {
        for (j = 0; j < tempDataArr.length - i - 1; j++) {
            orderedArr.push([j, j + 1, null, null]);
            if (tempDataArr[j] > tempDataArr[j + 1]) {
                temp = tempDataArr[j];
                tempDataArr[j] = tempDataArr[j + 1];
                tempDataArr[j + 1] = temp;
                orderedArr.push([j, j + 1, [...tempDataArr], null]);
            }
        }
        orderedArr.push([null, null, null, j]);
    }
	return orderedArr;
};

export default bubbleSort;