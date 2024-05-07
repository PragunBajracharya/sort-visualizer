const insertionSort = (dataArr) => {
    let tempDataArr = [...dataArr];
    let orderedArr = [];
    let temp;
    let i,j;

    for (i = 0; i < tempDataArr.length; i++) {

        j = i - 1;
        while (j > -1 && tempDataArr[j] > tempDataArr[j + 1]) {
            
            temp = tempDataArr[j];
            tempDataArr[j] = tempDataArr[j + 1];
            tempDataArr[j + 1] = temp;
            
            orderedArr.push([j, j + 1, null, null]);     //Comparing
            orderedArr.push([j, j + 1, [...tempDataArr], null]);    //Swapping
            j--;
        }
    }

    for (let i = 0; i < tempDataArr.length; i++) {
        orderedArr.push([null, null, null, i]);    //Sorted
    }
	return orderedArr;
};

export default insertionSort;