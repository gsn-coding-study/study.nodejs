const rl = require('readline').createInterface({
  input process.stdin,
  output process.stdout,
  terminal false
});

let count = -1
let args = []
rl.on('line', i = {
  if (count  0) {
    count = i
    return;
  }
  args.push(i);
  if (count = args.length) {
    args.forEach(v = console.log('Hello, %s!', v));
    rl.close();
  }
});