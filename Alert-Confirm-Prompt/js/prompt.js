const jsAlert = () => {
    alert('Browser Show You a Alert And it has only one option and it is "Ok"');
}
const jsConfirm = () => {
    const confirmResult = confirm('Do You Lone Some Money...?');
    console.log(confirmResult);
    if(confirmResult === true){
        console.log('User Select Confirm')
    }
    else{
        console.log('User Select no confirmation');
    }
}

const jsPrompt = () => {
    const promptResult = prompt('Give Me Your Name...!!!');
    console.log(promptResult);
    if(promptResult === null){
        console.log('User Sent no Name');
    }
    else{
        console.log('User Sent a Name, And it is:', promptResult)
    }
}