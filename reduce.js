const arr = [1,2,10,-10,19,-9,18,15];
Array.prototype.myReduce = function(cb, curr){
    let accumulator = curr;
    for(let i=0; i<this.length;i++){
        accumulator = accumulator?cb(accumulator, this[i]):this[i];
    }
    return accumulator
}
const reducedData = arr.myReduce((acc, curr)=>{
    return acc+curr;
});

console.log(reducedData);