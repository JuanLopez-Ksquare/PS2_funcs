const missingNum = (limit,numArray) => {

    for(let i = 1;i < limit;i++)
    {
        if(!numArray.find(element => element == i))
        {
            return i;
        }
    }
    
    return 0;
}

let arrayTest = [5,3,6,4,1];

const ans = missingNum(7,arrayTest);

console.log(ans);


/* const numArray = [5,6,2,4,1];
let limit = 7;

    for(let i = 1;i < limit;i++)
    {
        if(!numArray.find(element => element == i))
        {
            console.log(i);
        }
    } */

