const fs = require('fs');

const data = fs.readFileSync('./hello.txt','utf-8');
console.log(data)

function showMessage() {
    console.log('Done')
}

showMessage();