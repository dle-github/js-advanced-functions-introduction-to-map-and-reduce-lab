// Your code here
function mapToNegativize(a){
    console.log(a);
    return a.map(x => x * -1);
}

function mapToNoChange(a){
    return a;
}

function mapToDouble(a){
    return a.map(x => x * 2);
}

function mapToSquare(a){
    return a.map(x => x*x);
}


function reduceToTotal(a, int){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (!!int) {
        return a.reduce(reducer,int)
    } else {
        return a.reduce(reducer)
    }
}

function reduceToAllTrue(a){
    if (a.filter(val => !val)[0] == false) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(a){
    if (a.includes(true)) {
        return true
    } else {
        return false
    }
}