function flattenArray(nestedArray, depth = Infinity) {
    if (depth === 0) {
        return nestedArray.slice(); 
    }

    const result = [];

    for (const item of nestedArray) {
        if (Array.isArray(item) && depth > 0) {
            
            result.push(...flattenArray(item, depth - 1));
        } else {
            
            result.push(item);
        }
    }

    return result;
}


console.log(flattenArray([1, [2, [3, [4, 5]]]], 2)); 
console.log(flattenArray([1, [2, [3, [4, 5]]]]));     
console.log(flattenArray([]));                  
console.log(flattenArray([1, [2, 3]], 0));            
console.log(flattenArray([1, [2, [3]]], 1));          
