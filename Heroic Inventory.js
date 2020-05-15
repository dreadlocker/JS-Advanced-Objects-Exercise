function main(input) {
  const keys = ["name", "level", "items"]
  
  const result = input.map(str => {
    const singleHero = {}
    const singleHeroInfo = str.split(" / ")

    singleHeroInfo.forEach((el, index) => {
      if (index === keys.length - 1) {
        return singleHero[keys[index]] = el.split(", ")
      }
      singleHero[keys[index]] = el
    })
    return singleHero
  })

  return JSON.stringify(result)
}

const a = ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
const b = ['Jake / 1000 / Gauss, HolidayGrenade']
console.log(main(a));
console.log("");
console.log(main(b));