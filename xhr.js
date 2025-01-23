//demonstrate asynchronous execution of javascript with XHR:response
const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
const xhr=new XMLHttpRequest();
function makeRequest(){
    xhr.open('GET','https://api.thecatapi.com/v1/images/search',true);
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
            console.log('Response:',xhr.responseText);
        }
        else{
            console.error(`Request Failed`);
        }
    };
    xhr.onerror=function(){
        console.error(`Request Failed`);
    };
    xhr.send();
}
makeRequest();
