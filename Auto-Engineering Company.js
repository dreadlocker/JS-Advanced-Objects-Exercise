function main(input) {
  const cars = new Map()
  for (const info of input) {
    const car = info.split(" | ")
    const brand = car[0]
    const model = car[1]
    const producedCars = Number(car[2])

    if (!cars.get(brand)) {
      cars.set(brand, new Map())
    }
    if (!cars.get(brand).get(model)) {
      cars.get(brand).set(model, 0)
    }
    cars.get(brand).set(model, cars.get(brand).get(model) + producedCars)
  }

  let toString = ""
  for (const [brand, models] of cars) {
    toString += `${brand}\n`
    for (const [model, producedCars] of models) {
      toString += `###${model} -> ${producedCars}\n`
    }
  }

  return toString
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
'Citroen | C5 | 10',
]
console.log(main(a));