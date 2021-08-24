<script> 
// Area function 
const area = function (length, breadth) { 
    const a = length * breadth; 
    console.log('Area of the rectangle is ' + a + ' square unit'); 
} 
  
// Perimeter function 
const perimeter = function (length, breadth) { 
    const p = 2 * (length + breadth); 
    console.log('Perimeter of the rectangle is ' + p + ' unit'); 
} 
  
// Making all functions available in this 
// module to exports that we have made 
// so that we can import this module and 
// use these functions whenever we want. 
module.exports = { 
    area, 
    perimeter 
} 
</script> 