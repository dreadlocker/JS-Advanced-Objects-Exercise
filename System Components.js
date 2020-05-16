function init(input) {
  // returns a Object, Keys are system names, every Values is an Object,
  // every Keys is component name, every Value is an Array with subcomponents name
  const systems = createData(input)
  // returns an Array with systems name
  const sortedSystems = sortSystems(systems)
  // returns an Array with Objects
  // their Keys are components name, every Value is an Array with subcomponents name
  const sortedSystemComponents = sortSystemComponents(sortedSystems, systems)
  return displaySortedData(sortedSystems, sortedSystemComponents)
}

function createData(input) {
  const systems = {}
  for (const system of input) {
    const systemInfo = system.split(" | ")
    const systemName = systemInfo[0]
    const componentName = systemInfo[1]
    const subcomponentName = systemInfo[2]

    if (!systems[systemName]) {
      systems[systemName] = {}
    }
    if (!systems[systemName][componentName]) {
      systems[systemName][componentName] = []
    }
    if (!systems[systemName][componentName].includes(subcomponentName)) {
      systems[systemName][componentName].push(subcomponentName)
    }
  }

  return systems
}

function sortSystems(systems) {
  return Object.keys(systems).sort((a, b) => {
    const sortByComponentsCount = (Object.keys(systems[b]).length) - (Object.keys(systems[a]).length)
    if (sortByComponentsCount) {
      return sortByComponentsCount
    } else {
      if (a > b) return 1
      if (a < b) return -1
      return 0
    }
  })
}

function sortSystemComponents(sortedSystems, systems) {
  return sortedSystems.map(system => {
    const currentSystemComponents = {}
    const components = systems[system]
    const sortedComponents = Object.keys(components).sort((a, b) => components[b].length - components[a].length)
    sortedComponents.forEach(componentName => {
      currentSystemComponents[componentName] = systems[system][componentName]
    });
    return currentSystemComponents
  });
}

function displaySortedData(sortedSystems, sortedSystemComponents) {
  let toString = ""
  const devider = "|||"
  sortedSystems.forEach((systemName, index) => {
    toString += `${systemName}\n`
    const components = sortedSystemComponents[index]
    for (const component in components) {
      if (components.hasOwnProperty(component)) {
        const subcomponents = components[component];
        toString += `${devider}${component}\n`
        subcomponents.forEach(subcomponent => {
          toString += `${devider.repeat(2)}${subcomponent}\n`
        });
      }
    }
  });

  return toString
}

const a = [
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'
]
console.log(init(a));