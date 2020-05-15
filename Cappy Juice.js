function main(input) {
  const fruits = {}

  input.forEach(str => {
    let [fruit, quatity] = str.split(" => ")
    quatity = Number(quatity)
    if (fruits[fruit]) {
      fruits[fruit] += quatity
    } else {
      fruits[fruit] = quatity
    }
  });

  let result = "";
  for (const key in fruits) {
    if (fruits.hasOwnProperty(key)) {
      const quatity = fruits[key];
      if (quatity > 1000) {
        result += `${key} => ${Math.floor(quatity / 1000)}\n`
      }
    }
  }

  return result
}

const a = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
const b = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
console.log(main(a));
console.log("");
console.log(main(b));