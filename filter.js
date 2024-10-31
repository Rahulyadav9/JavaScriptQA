Array.prototype.MyFilter = function(cb){
    // arrow function (cb) => {} does not have its own this binding, so this in your code will refer to the global object, not to the array.
    const temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp;
}

const arr = [3,1,2,-10,14,10,50,35,-19];
const newArr = arr.MyFilter((num)=>{
    return num<1;
})
 console.log(newArr);
