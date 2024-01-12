const arr = [1,2,3,4,5];

let size = arr.length;

for(let i=0;i<size/2;i++)
{
    
        let temp = arr[i];
     arr[i] = arr[size-i-1];
     arr[size-i-1] = temp;
   

}
console.log(arr);

// const arr1 = arr.reverse();
// console.log(arr1);

