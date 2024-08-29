// function getDataFromInternet(successCallback) {
//     console.log('Getting data from internet');
//         successCallback('Aryan');
// }

// getDataFromInternet((data) => {
//     console.log(`Data is fetched ${data}`);
// })

function getDataFromInternetUsingPromise() {
    return new Promise((reslove, reject) => {
        console.log('Getting data from internet using Promise');
        
        // for(let i = 0; i < 1000; i++){
        //     console.log(i);
        // }

        reslove('Aryan');
        reject('Internet Timeout');
    });
}

getDataFromInternetUsingPromise()
.then((data) => {
    console.log(`Data is fetched ${data}`);
})
.catch((error) => {
    console.error(`Error: ${error}`);
})
.finally(() => {
    console.log('Executed');
})