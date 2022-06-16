const sortByProd = arr => {
    const productArr = arr.map((elem, index) => elem * (index + 1));

    //must have a deep copy to preserve immutability of original productArr. For some reason, .sort(comparison) will mutate a const array without
    //throwing an error
    let copyArr = [];
    productArr.forEach(elem => copyArr.push(elem));

    const sortedProductArr = copyArr.sort((a, b) => a - b);
    const shiftVals = [];
    productArr.forEach((element, initialIndex) => {
        let finalIndex = sortedProductArr.indexOf(element);
        shiftVals.push(finalIndex - initialIndex);
    });

    let answer = new Array(arr.length);
    arr.forEach((element, i) => {
        answer.splice(i + shiftVals[i], 1, element);
    });
    return answer;
}

// console.log(sortByProd([1,14,5,2,6])); //should be 1,2,5,14,6
// console.log(sortByProd([23,2,3,4,5])); //should be 2,3,4,23,5
// console.log(sortByProd([-1,-5,6,7,-32,-14,32,-32])); //should be -32,-32,-14,-5,-1,6,7,32