import app from './app';

app
  .listen(3001, () => {
    console.log(`server running on port : ${3001}`);
  })
  .on('error', (e) => console.log(e));