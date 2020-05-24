const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }


    for (let objKey of obj1Keys) {
        typeof obj1[objKey] //?
        if (obj1[objKey] !== obj2[objKey] && typeof obj1[objKey] !== 'object') {
            typeof obj1[objKey] //?
           console.log(typeof obj1[objKey])
           return false;
        } else if (typeof obj1[objKey] === ' object') {
            typeof obj1[objKey] //?
        }
 {

 }    }
    
    return true;
};

const obj1 = {
    name: "Noah",
    age: 28,
    favorites: {
        food: "Pizza"
    }
}
const obj2 = {
    name: "Noah",
    age: 28,
    favorttes: {
        food: "Pizza",
       // talent: 'self-hate'
    }
}


isEqual(obj1, obj2)//?