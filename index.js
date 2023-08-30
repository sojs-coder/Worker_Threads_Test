const { Worker } = require("worker_threads");


const thingsToProcess = [ 1_000_000_000, 100_000_000, 2_000_000_000, 10_000_000_000 ]; // four cores on my machine

console.log("Testing ", thingsToProcess);
console.log("Looping over each element (X) x times, then squaring list[x]");


var t1 = performance.now()
for (thing of thingsToProcess){
    for(var i = 0; i < thing; i++){
        i**2;
    }
}
var t2 = performance.now();

console.log("Without worker theads, computed in "+ (t2-t1)+" ms");
t1 = performance.now();
var processesDone = 0;
var completedWhen = thingsToProcess.length;
for (thing of thingsToProcess){
    var worker = new Worker('./service.js',{ workerData: thing });
    worker.on('message',(data)=>{
        var t2 = performance.now()
        if(data.done){
            processesDone++;
        }
        var ms = t2-t1;
        console.log(processesDone, " process finished ("+ ms + " ms)")
        if(processesDone == completedWhen){
            console.log("Threads done computing... finished in "+ms+ " ms");
        }
    });
}

