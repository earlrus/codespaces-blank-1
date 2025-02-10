//generator

async function* gen() {
    let res = yield fetch("https://mart-node-49hw.vercel.app/login",{
      method:"POST",
      body:{
        email: "genny@test.com",
        password: "geny123!",
      }
    });
  
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
  