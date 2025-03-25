const myProfile = {
    name: 'Nimisha'
};

const secondProfile= {
    name:'John',
    age: 42
}

function primitiveMutate(primitive){
    primitive++
    console.log(primitive)
}


function mutate(obj) {
    obj.age++
}

let num=100
primitiveMutate(num)
console.log(num)

mutate(secondProfile)
console.log(secondProfile)