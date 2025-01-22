function flattenObject(nestedObject, parentKey = '', result = {}) {
    for (const key in nestedObject) {
        if (nestedObject.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof nestedObject[key] === 'object' && nestedObject[key] !== null) {
              
                flattenObject(nestedObject[key], newKey, result);
            } else {
               y
                result[newKey] = nestedObject[key];
            }
        }
    }
    return result;
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25
        },
        preferences: {
            theme: "dark",
            notifications: true
        }
    },
    status: "active"
};

console.log(flattenObject(input));

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })); 


console.log(flattenObject({}));


console.log(flattenObject({ key: null }));

