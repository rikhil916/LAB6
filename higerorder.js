//demonstrate asynchronous execution of js with higher order function

function startTask(msg,callback) {
    setTimeout(() => {
        console.log(msg);
        console.log("Task started");
        callback();
    }, 1000);
}

function runTask(task) {
    task("task1",() => {
        console.log("Callback task done");
    });
}

runTask(startTask);
