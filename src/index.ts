import * as path from 'path';

const Tail = require('tail').Tail;

const tail = new Tail(path.join(__dirname, '..', 'test-read-write.txt'));

tail.on("line", function(data: any) {
  console.log(data);
});

tail.on("error", function(error: any) {
  console.log('ERROR: ', error);
});

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    while (true) {
        await sleep(1000);
    }
})();
