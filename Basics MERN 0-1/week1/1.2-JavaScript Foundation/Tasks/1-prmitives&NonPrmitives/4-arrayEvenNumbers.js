// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2 == 0)
//     {
//         console.log(arr[i] + " ");
//     }
// }


const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var string = " ";
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]%2 == 0)
    {
        string += arr1[i] + " ";
    }
}
console.log(string);
