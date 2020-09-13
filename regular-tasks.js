// Task #1
const string = "Привет! Как дела?";

function getVowels(string) {
    return string.replace(/[^аеёиоуыэюя]/ig, '');
}

console.log("Task #1 result:");
console.log(getVowels(string));
console.log('\n');


// Task #2
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
    ];

function getWorthyWorkers(workers) {
    let worthyWorkersNames = [];
    worthyWorkers = workers.filter(worker => worker.salary > 1000);
    worthyWorkers.forEach(function (entry) {
        worthyWorkersNames.push(entry.name)
    });

    return worthyWorkersNames;
}

console.log("Task #2 result:");
console.log(getWorthyWorkers(workers));
console.log('\n');


// Task #3
const path = "/users/download/index.html"

function isHtml(path) {
    return path.includes(".html")
}

console.log("Task #3 result:");
console.log(isHtml(path));
console.log('\n');


// Task #4
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => num % 2 === 0;

function filterArray(array, func) {
    return array.filter(func);
}

console.log("Task #4 result:");
console.log(filterArray(mixedArray, isEven));