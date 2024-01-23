const digits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
//  PUSH
digits.push( 10 );
console.log( digits );
//  POP
digits.pop();
console.log( digits );
//  SHIFT
digits.shift();
console.log( digits );
//  UNSHIFT
digits.unshift( 0 );
console.log( digits );
//  CONCAT
const tens = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
const mix  = tens.concat( digits );
console.log( "This is combined !!! ", mix );
//  SLICE
const slice = mix.slice( 0, 4 );
console.log( slice );
//array.splice(index, howmany, item1, ....., itemX)
slice.splice( 0, 1, 9 );
console.log( "Splices", slice );
//  FOR EACH
slice.forEach( ( n ) =>
{
  console.log("ELEMENT" , n, "\n" );
} );

slice.forEach( ( numbers ) =>
{
  numbers *= 2;
  console.log( "MULTIPLICATION BY 2 ", numbers , "\n");
} );
// JOIN
const abs = [ 'a', 'b', 'c', 'd', 'd', 'a', 'c'];
const mixed = abs.join("  ");
console.log( mixed );
// INDEX OF
var index = abs.indexOf( 'd' );
console.log( index );
// LAST INDEX LAST APPEARANCE OF ELEMNT
var last = abs.lastIndexOf( 'd' );
console.log( last );
// Include
let is_true = abs.includes( 'a' );
console.log( is_true );
// Filter
const variable = abs.filter( ( el ) => 'a' < el );
console.log( variable );
const var1 = abs.filter((el) => "d" > el);
console.log( var1 );
// Reduce
var vare = [ 9, 8, 7, 6, 5, 4, 3 ];
const var2 = vare.reduce( ( p1, p2 ) => p1 - p2 );
console.log( var2 );
// Find
var s = abs.find( ( num ) => num > "a" && num < "c" );
console.log( s );