function bubbleSort(array) {
    let length = array.length;
    for (let i = (length - 1); i >= 0; i--) {
        // Will iterate through the given array
        for (let j = (length - i); j > 0; j--) {
            // Compares if the previous element is greater than the current element
            if (array[j] < array[j - 1]) {
                // Rearranges the elements so that the greater numbers are toward the end
                let tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort(array);
