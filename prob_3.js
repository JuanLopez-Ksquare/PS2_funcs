const spiral =[[1,2,9,10,25],
               [4,3,8,11,24],
               [5,6,7,12,23],
               [16,15,14,13,22],
               [17,18,19,20,21]];


const searchFun = (toSearch) =>{

    let ans = [];

    for(let i=0;i< toSearch.length;i++)
    {
        toSearch[i].reverse();
        let aux = [];
        aux = aux.concat(toSearch[i]);
        let row = aux[0]-1;
        let col = aux[1]-1;
        //console.log(aux);
        if(col >= 5 || row >= 5 || col < 0 || row < 0)
        {
            ans.push('Invalid pos');
        }
        else
        {
            ans.push(spiral[col][row]);
        }
        
    }

    return ans;

}

//let input = [ [4,4], [3,1], [5,2] ];
let input = [[2,3], [4,2], [6,1]];
let ans = searchFun(input);

console.log(ans);

//console.log(input[0] - aux[0]);