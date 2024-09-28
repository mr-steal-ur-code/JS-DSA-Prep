function createCounter() {
    let counter = 0;
    const counterObj = {
        increment:()=>{
            counter++
            return counter
        },
        decrement:()=>{
            counter--
            return counter
        }
    }
    return counterObj
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.decrement()); // 0
