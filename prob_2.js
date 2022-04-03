const minMovements = (array) =>{

    let cont = 0;
    let index = 1

    do {
        if(array[index] < array[index-1])
        {
            cont += array[index-1] - array[index];
            index++;
        }
        else
        {
            index++;
        }
    
    } while (index != array.length);

    return cont;

}

let array = [4,2,1,7,3];//[1,3,1,5,2];//[5,2,1,4,8];

let ans = minMovements(array);




console.log(ans);