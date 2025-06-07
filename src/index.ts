async function function1(name: string) {
  let i = 0;
  while (i < 10) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('function1', name);
    i++;
  }
}

async function function2(name: string) {
  let i = 0;
  while (i < 10) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('function2', name);
    i++;
  }
}

async function GlobalFunction(name: string) {
  return Promise.all([function1(name + '-Alice'), function2(name + '-Bob')]);
}

async function main() {
  await GlobalFunction('Toto');
  console.log('----------------');
  await GlobalFunction('Titi');
}

main();
