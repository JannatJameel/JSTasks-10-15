const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

const sum = (array) => {
    let total = 0;
    array.forEach((element) => {
        if(Array.isArray(element)){
            total += sum(element);
        } else {
            total+= element;
    }});
    return total;
}

console.log(sum(numbers));
