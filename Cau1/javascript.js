
let scores = [9, 8, 8, 7, 6, 7, 5]
function findAvg() {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum/scores.length
}

let average = findAvg(scores)
console.log(average)