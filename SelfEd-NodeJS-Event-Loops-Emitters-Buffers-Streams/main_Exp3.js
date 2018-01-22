buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde


buf2 = new Buffer(1,"ascii");
buf3 = new Buffer(1,"hex"); // Not working exactly as expected just yet 11-30-2016
buf2[0] = 77;
buf3[0] = 77;

console.log("And the other result is: " + buf2.toString('ascii'));
console.log("And the result should be a little 'w': " + buf3.toString('hex')); // 