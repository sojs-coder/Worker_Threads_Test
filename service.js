const { workerData, parentPort } = require("worker_threads");

for(var i = 0; i < workerData; i++){
    i**2
}
parentPort.postMessage({ done: true })