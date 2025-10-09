console.log("Iam sum module")

function calculateSum(a, b){
    console.log('inside calculate sum function')
    return a+b
}

const  name='kiran'

// exporting a single thing
// module.exports = calculateSum


// exporting multiple things
module.exports = {
    calculateSum: calculateSum,
    name: name
}

