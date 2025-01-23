//demonstrate asynchronus execution of js with promise chaining and aync/await
function fetchData(uid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(uid>0){
                console.log(`Fetched data for user ${uid}`);
                resolve({uid,name:`User${uid}`});
            } else {
                reject(`Invalid User: ${uid}`);
            }
        },1000);
    });
}

fetchData(1)
.then((user)=>{
    console.log(`User data from promise:`,user);
    return fetchData(2);
})
.then((user) => {
    console.log(`User data from promise: `,user);
})
.catch((error)=>{
    console.log(`Eror fetching data:`,error);
});


async function fetchAllUsers(){
    console.log(`Fetching data using aync/await`);
    const u1=await fetchData(1);
    console.log(`User data from async/await:`,u1);
    const u2=await fetchData(2);
    console.log(`User data from async/await:`,u2); 
    console.log(`all the data is fetched`);
}

fetchAllUsers();