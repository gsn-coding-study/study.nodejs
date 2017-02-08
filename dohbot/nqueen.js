'use strict';

const util = require('util');
var no = 0;

function range(size) {
  return Array.from(new Array(size).keys())
}

function printout(lines) {
  const border = range(lines.length + 1).fill('---+').join('');
  const title = range(lines.length + 1).map(i => util.format(' %d |', i)).join('');

  console.log('No.', no);
  console.log(border);
  console.log(title);
  console.log(border);

  for (var i = 0; i < lines.length; ++i) {
    const list = [i + 1];
    lines.forEach((v, j) => {
      list.push((lines[i] == j) ? 'Q' : ((0 != (i + j) % 2) ? '■' : ' '));
    });
    const line = list.map((i, v) => util.format(' %s |', i)).join('');
    console.log(line);
  }
  console.log(border);
}

function queens(ln, lines) {

  if (lines.length == ln) {
    ++no;
    printout(lines);
    return;
  }

  for (var i = 0; i < lines.length; ++i) {
    var promising = true;
    for (var j = 0; j < ln; ++j) {
      if (i == lines[j] || Math.abs(ln - j) == Math.abs(i - lines[j])) {
        promising = false;
        break;
      }
    }
    if (promising) {
      lines[ln] = i;
      queens(ln + 1, lines);
    }
  }
}

if (require.main === module) {
  const lines = new Array(9);
  lines.fill(0);
  queens(0, lines);
}