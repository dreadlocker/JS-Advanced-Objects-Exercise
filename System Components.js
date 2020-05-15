function main(input) {
  const systems = {}
  input.map(str => {
    const [systemName, componentName, subcomponentName] = str.split(" | ")
    if (!systems[systemName]) {
      systems[systemName] = 1
    } else {
      
    }
  })

  return systems
}

const a = [
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'
]
console.log(main(a));