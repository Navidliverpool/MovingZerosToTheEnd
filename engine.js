function moveZeros(arr) {
    console.log("input is: ", arr)
    const result = [];
    let count = 0;
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                delete arr[i];
                count++;
            } else {
                result.push(arr[i]);
            }
        }
        for (let i = 0; i < count; i++) {
            result.push(0);
        }
    }
    console.log("result is: ", result)
    return result;
}