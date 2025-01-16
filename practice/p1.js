//generator

async function* gen() {
    let res = yield fetch("https://jsonplaceholder.typicode.com/todos");
  
    if (res.status === 404) {
      return console.error("404 error");
    }
  
    let result = yield res.json();
    console.log(result);
  }
  
  async function test() {
    let res;
    let startGen = gen();
    let gg = (await startGen.next()).value; // console.log(gg);
    setTimeout(async () => {
      res = await startGen.next(gg);
      startGen.next(res.value);
    }, 3000);
  }
  test();
  