// filter for line
let arrays = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];
const result = arrays.filter(word => {

    return word.includes("line")


});


//Filter for tram

const result1 = arrays.filter(word => {

    return word.includes("tram")
});
console.log(result)
console.log(result1)

    // filter for sorting line in an ascending other
const result3 = arrays.filter(word => {

   return word.includes("line")
});
    result3.sort();
    console.log(result3);

    // filter for sorting tram
    const result4 = arrays.filter(word => {
     return word.includes("tram")
});
    result4.sort();
    console.log(result4)
