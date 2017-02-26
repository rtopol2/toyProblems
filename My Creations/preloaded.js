this.href = {json:{name: "the savior"}};

for (let i=0; i<100; i++) {
  this.href.json[i] = {};
  for (let j=0; j<1000; j++) {
    this.href.json[i][j] = {};
    for (let k=0; k<100; k++) {
      this.href.json[i][j][k] = Math.floor(Math.random()*10000);
    }
  }
}

function randoCreator () {
  let code = '';
  while (code.length < 6) {
    if (!Number(code[0])) { code = code.substring(1)}
    code += Math.floor(Math.random()*10);
  }
  
  this.href.json[Math.floor(Math.random()*100)][Math.floor(Math.random()*1000)][Math.floor(Math.random()*100)] = Number(code);
  
  return () => {
    return defuse() === Number(code);
  }
}

let fuseCheck = randoCreator();