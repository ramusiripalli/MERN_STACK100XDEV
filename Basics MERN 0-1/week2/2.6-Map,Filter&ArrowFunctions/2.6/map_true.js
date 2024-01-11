// const arr = [1,2,3,4,5];

// function sum(a)
// {
//     return a*2;
// }

// const answer = arr.map(sum);
// console.log(answer);

//whenever we were told to transfer array we will use maps

const arr = [1,2,3,4,5];


const answer = arr.map(function sum(a)
{
    return a*2;
}
);
console.log(answer);