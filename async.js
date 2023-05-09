// 1.Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.

// function messageToPass(){
//     console.log(`Architecture`)
// }
// setTimeout(messageToPass, 5000)
async function messageToPass(message,delay){
    await new Promise(resolve =>setTimeout(resolve,delay));
    console.log({message})
}
messageToPass(`Rose is a bright student`,5000)

//2.You have an array of user IDs and a function getUserData(id) that returns a Promise with user
// data when given a user ID. Write an asynchronous function that fetches and logs the data for each
// user ID one by one, in sequence.

function getUserData(id){
    if(id){
      console.log(`The user id is found`)
    }else{
        console.log(`The user id is not found`)
    }

}
let id=[202823,127755,89088,7887]
console.log(getUserData(id))

//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the 
//task is successful and rejects if there's an error. Write a function that calls performTask() and 
//logs a custom success message if the task is successful, and a custom error message if there's an 
//error.
let task=true;

let performingTask = new Promise(function(resolve,reject){
    if(task){
        resolve(`Task is done`)
    }else{
        reject(`Task not done`)

    }
});
let showTask = async()=>{
    let result = await performingTask;
    console.log({result})
};
showTask();
