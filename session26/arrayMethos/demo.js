function myFn(fn){
    fn();

    return () => 10;
}

// myFn(() => {});

let numberList = [10, 30, 20, 50, 70];

//.forEach();

// numberList.forEach(function(element, index) 
//     console.log(index, element);
// {});


// numberList.map(function(element, index) {
//     console.log(element, index);
// })


// numberList.filter(function(element, index){
//     console.log(element, index);
// });

numberList.reduce(function (acc,cur) {
    console.log("acc", acc);
    console.log("cur", cur);
    return
}, 0)