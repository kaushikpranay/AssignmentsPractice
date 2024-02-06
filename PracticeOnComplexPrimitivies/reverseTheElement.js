var arr = [1, 2, 3, 4, 5, 6, 7, 8];
let len = arr.length;
let half = len/2;
for(let i=0;i<half;i++){
    let temp = arr[i];
    arr[i] = arr[len-i];
    arr[len-i] = temp;
}
console.log(arr);