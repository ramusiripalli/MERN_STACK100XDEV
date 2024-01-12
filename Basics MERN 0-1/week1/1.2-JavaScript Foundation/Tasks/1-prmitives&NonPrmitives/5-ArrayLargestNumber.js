const arr = [34,56,23,12,32,45,77,88,99,12345];
let largest =arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i] > largest)
    {
        largest = arr[i];
    }

}
console.log(largest);