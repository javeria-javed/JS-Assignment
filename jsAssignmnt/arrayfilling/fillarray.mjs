let arraying = [11,0,0,0,15,0,17,18,19];

for(let i = 0 ; i < arraying.length; i++)
{ 
if (arraying[i] === 0)
{
    
    let missingEl = '1' + (i+1);
    console.log(' missing index no is : ' + i + ' , and element is : ' + missingEl);
    arraying[i] = missingEl;
    
}
}

console.log('final array is : ' + arraying);

