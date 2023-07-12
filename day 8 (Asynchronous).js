//CallBack
console.log("1. callback")
const notify = () => {
  console.log('Download complete!\n');
};

const download = (url, callback) => {
  console.log(`Downloading from ${url}....`);

  callback();
};

const url = 'https://amaledu.site/download';

download(url, notify);

//setTimeout
console.log("2. setTimeout");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");
