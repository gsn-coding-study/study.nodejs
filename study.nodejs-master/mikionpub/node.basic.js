//2-1
console.log('Hello World');

//3-1
console.log('filename:', __filename);
console.log('dirname', __dirname);

//3-2
console.log('숫자: %d + %d = %d', 273, 52, 273+52);
console.log('문자열: %s', 'Hello World...!', '특수기호와 상관없음');
console.log('JSON:%j', {name:'RintIanTta'});

//3-3
//시간 측정을 시작합니다.
console.time('alpha');

var output = 1;
for (var i = 1; i<=10; i++){
  output *=i;
}
console.log('Result:', output);

//시간 축정을 종료합니다.
console.timeEnd('alpha');
