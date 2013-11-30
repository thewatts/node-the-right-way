const
  fs = require('fs');
  data = fs.readFileSync('target-2.txt');

process.stdout.write(data.toString());
