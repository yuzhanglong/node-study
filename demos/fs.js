const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'timeout.js');

const data = fs.readFileSync(filePath);

console.log(data.toString());
