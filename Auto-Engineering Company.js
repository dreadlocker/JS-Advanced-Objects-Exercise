function main(input) {
  const cars = {}
  input.forEach(str => {
    let [brand, model, count] = str.split(" | ")
    count = +count
    if (!cars[brand]) {
      cars[brand] = {[model]: count}
    } else {
      if (cars[brand][model]) {
        cars[brand][model] += count
      } else {
        cars[brand][model] = count
      }
    }
  });

  let result = ""
  Object.keys(cars)
    .forEach(key => {
      result += `${key}\n`
      Object.keys(cars[key]).forEach(model => {
        result += `###${model} -> ${cars[key][model]}\n`
      });
    });

  return result
}

const a = [
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'
]
console.log(main(a));