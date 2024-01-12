const users = [
    {
      firstName:"Ramu",
      lastName:"Siripalli",
      age:27,
      gender:"M"
    },
    {
        firstName:"lahari",
        lastName:"Mallareddy",
        age:27,
        gender:"F"

    },
    {
        firstName:"Sarita",
        lastName:"Siripalli",
        age:22,
        gender:"F"
    },
    {
        firstName:"Bhavani",
        lastName:"Siripalli",
        age:24,
        gender:"F"
    },
    {
        firstName:"Sudheer",
        lastName:"Paila",
        age:24,
        gender:"M"
    }
]

for(let i=0;i<users.length;i++)
{
    if(users[i].gender == "M")
    {
        console.log(`FirstName of the person is ${users[i].firstName}`);
    }
}