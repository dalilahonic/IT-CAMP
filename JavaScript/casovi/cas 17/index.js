function sum(a, b, fun) {
    console.log(fun);
    let res = a + b;
    console.log(res);
    fun(res);
  }
  function res(res) {
    console.log('izvrsio sam se', res);
  }
  
  sum(1, 2, res);
  
  let ime = 'Dzelal';
  let prezime = 'Dupljak';
  
  function ispisImenaPrezimena(ime, prezime) {
    console.log(ime, prezime);
  }
  
  function errorFun() {
    console.log('Error');
  }
  
  function testFun(ime, prezime, fun1, fun2) {
    if (ime === 'Dzelal' && prezime === 'Dupljak') {
      fun1(ime, prezime);
    } else {
      fun2();
    }
  }
  
  testFun(ime, prezime, ispisImenaPrezimena, errorFun);