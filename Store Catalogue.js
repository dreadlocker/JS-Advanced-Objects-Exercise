function main(input) {
  const items = {}
  input.forEach((str, index) => {
    const key = str[0]
    if (!items[key]) {
      items[key] =
        input.filter(str => str[0] === key)
        .sort((a, b) => {
            if (a < b) {
              return -1
            }
            if (a > b) {
              return 1
            }
            return 0
        })
    }
  })

  let result = ""
  Object.keys(items)
    .sort()
    .forEach(str => {
      result += `${str}\n  ${items[str].join("\n  ")}\n`
    })

  return result
}

const a = ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
const b = ['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
console.log(main(a));
console.log("");
console.log(main(b));