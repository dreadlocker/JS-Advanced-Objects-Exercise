function main(input) {
  const allCars = input.map(str => str.split(" | "))
  const uniqueCars = new Set(allCars.map(arr => arr[0]))
  const cars = {}
  for (const key of uniqueCars) {
    cars[key] = {}
    allCars
      .filter(arr => arr[0] === key)
      .forEach(arr => {
        const model = arr[1]
        const producedCars = Number(arr[2])
        if (cars[key][model]) {
          cars[key][model] += producedCars;
        } else {
          cars[key][model] = producedCars;
        }
      });
  }

  let result = ""
  for (const brand in cars) {
    if (cars.hasOwnProperty(brand)) {
      const models = cars[brand];
      result += `${brand}\n`
      for (const model in models) {
        if (models.hasOwnProperty(model)) {
          const producedCars = models[model];
          result += `###${model} -> ${producedCars}\n`
        }
      }
    }
  }

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