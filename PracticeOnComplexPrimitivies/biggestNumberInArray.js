var array = [1, 4, 5, 3, 10, 26, 11, 13, 15, 16];
var len = array.length;
var ans = array[0];
for(let i=0;i<len;i++){
    if(ans<array[i]){
        ans = array[i];
    }
}

console.log(ans);