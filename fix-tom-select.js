const fs = require('fs');
const filePath = 'node_modules/tom-select/src/vanilla.ts';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/\\011/g, '\\x09')
                     .replace(/\\012/g, '\\x0a')
                     .replace(/\\014/g, '\\x0c')
                     .replace(/\\015/g, '\\x0d')
                     .replace(/\\020/g, '\\x20');
  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
