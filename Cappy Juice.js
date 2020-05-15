function main(input) {
  const fruits = {}

  input.forEach(str => {
    const [fruit, quatity] = str.split(" => ")
    if (fruits[fruit]) {
      return fruits[fruit] += +quatity
    }
    return fruits[fruit] = +quatity
  });

  let result = "";
  Object.values(fruits).forEach((quatity, index) => {
    if (quatity > 1000) {
      return result += `${Object.keys(fruits)[index]} => ${Math.floor(quatity / 1000)}\n`
    }
  })

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