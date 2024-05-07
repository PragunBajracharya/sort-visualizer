const selectionSort = (dataArr) => {
    let tempDataArr = [...dataArr];
    let orderedArr = [];
    let i,j

	for (i = 0; i < tempDataArr.length; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (j = i + 1; j < tempDataArr.length; j++) {
            orderedArr.push([i, j, null, null]);    //Comparing

            if (tempDataArr[j] < tempDataArr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = tempDataArr[i];
            tempDataArr[i] = tempDataArr[min];
            tempDataArr[min] = tmp;
            orderedArr.push([i, min, [...tempDataArr], null]);   //Swapping
        }
        orderedArr.push([null, null, null, i]);    //i-th element is sorted
    }
	return orderedArr;
};

export default selectionSort;