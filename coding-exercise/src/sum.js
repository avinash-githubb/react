let elements = [ [3, 2, 1, 3], [1, 2, 3, 4], [4, 3, 1, 2] ];

//output 8 7 5 9


for(let i=0; i<elements[0].length; i++){
    let sum =0;
    for(let j=0; j<elements.length; j++){
        sum= sum + elements[j][i];
    }
    console.log(sum);
}