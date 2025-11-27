
let info = [
{ name: "Alice", tasksCompleted: 8, rating: 4.7},
{name: "Bob", tasksCompleted: 4, rating: 4.0},
{name: "Charlie", tasksCompleted: 6, rating: 3.5 }, 
{name: "David", tasksCompleted: 10, rating: 4.9}, 
{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
]

let filterInfo = info.filter(n => n.tasksCompleted>5);
console.log(filterInfo);

let mapInfo = filterInfo.map(function(n){
    let perfLevel = 0;

    if(n.rating>4.5) perfLevel = "Excellent";
    else if (n.rating>3 && n.rating<=4.5) perfLevel = "Good";
    else perfLevel = "Needs Improvement";

    return [n.name, perfLevel];
});
console.log(mapInfo);

const priority = {
    'Excellent' : 3,
    'Good': 2,
    'Needs Improvement': 1
};

mapInfo.sort((a, b) => {
    return priority[b[1]] - priority[a[1]];
})

console.log(mapInfo);