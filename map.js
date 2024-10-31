Array.prototype.myMap = (cb)=>{
    let temp=[];
    for(let i=0;i<this.length;i++){//here this refer to arr
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.myMap((num, ind, newA)=>{
    return num*2; 
});

console.log(newArr);