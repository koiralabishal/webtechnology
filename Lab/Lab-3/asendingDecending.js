let numbers = [10, 20 , 2, 3, 0, 20, 30 ];
numbers.sort( function( asc , desc){
    if(asc > desc) return 1;
    if(asc < desc) return -1;
    return 0;
});
console.log(`Ascending order is: ${numbers}`);
numbers.reverse();
console.log(`Descending order is: ${numbers}`);
