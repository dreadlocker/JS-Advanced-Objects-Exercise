function init(input) {
  const gladiators = {}
  const battleStartCheck = " vs "
  input.forEach(gladiator => {
    if (gladiator.indexOf(battleStartCheck) > -1) {
      const [gladiator1, gladiator2] = gladiator.split(battleStartCheck);
      return startBattle(gladiators, gladiator1, gladiator2)
    }

    if(gladiator === "Ave Cesar") {
      const gladiatorsSortedByTechniques = sortGladiatorsByTechniques(gladiators)
      const gladiatorsSortedByTotalSkill = sortGladiatorsByTotalSkill(gladiatorsSortedByTechniques)
      return console.log(battlesResult(gladiatorsSortedByTotalSkill));
    }

    createGladiator(gladiators, gladiator)
  })
}

function startBattle(gladiators, gladiator1Name, gladiator2Name) {
  if(!gladiators[gladiator1Name] || !gladiators[gladiator2Name]) return

  const gladiator1Techniques = Object.keys(gladiators[gladiator1Name])
    .filter(technique => technique !== "totalSkill");
  const gladiator2Techniques = Object.keys(gladiators[gladiator2Name])
    .filter(technique => technique !== "totalSkill");
  const gladiatorsTechniquesTotal = gladiator1Techniques.length + gladiator2Techniques.length
  const allRivalTechniques = new Set([...gladiator1Techniques, ...gladiator2Techniques])
  if (gladiatorsTechniquesTotal !== allRivalTechniques.size) {
    const gladiator1TotalSkillLeft =
      gladiators[gladiator1Name]["totalSkill"] - gladiators[gladiator2Name]["totalSkill"]

    gladiator1TotalSkillLeft > 0
      ? delete gladiators[gladiator2Name]
      : delete gladiators[gladiator1Name]
  }
}

function sortGladiatorsByTechniques(gladiators) {
  const gladiatorsTechniquesSorted = {}
  for (const gladiatorName in gladiators) {
    if (gladiators.hasOwnProperty(gladiatorName)) {
      const techniques = gladiators[gladiatorName];
      const sortedTechniques = Object.keys(techniques)
        .sort((a, b) => techniques[b] - techniques[a])
      gladiatorsTechniquesSorted[gladiatorName] = {}
      sortedTechniques.forEach(technique => {
        gladiatorsTechniquesSorted[gladiatorName][technique] = gladiators[gladiatorName][technique]
      });
    }
  }

  return gladiatorsTechniquesSorted
}

function sortGladiatorsByTotalSkill(gladiators) {
  const gladiatorsNameSorted = Object.keys(gladiators)
    .sort((a, b) => gladiators[b]["totalSkill"] - gladiators[a]["totalSkill"])
  const gladiatorsTotalSkillSorted = {}
  gladiatorsNameSorted.forEach(name => {
    gladiatorsTotalSkillSorted[name] = gladiators[name]
  });

  return gladiatorsTotalSkillSorted
}

function battlesResult(gladiators) {
  let toString = ""
  for (const gladiatoName in gladiators) {
    if (gladiators.hasOwnProperty(gladiatoName)) {
      const techniques = gladiators[gladiatoName];
      toString += `${gladiatoName}: ${techniques["totalSkill"]} skill\n`
      delete techniques["totalSkill"];
      const techniquesName = Object.keys(techniques)
      techniquesName.forEach(technique => {
        const skill = techniques[technique]
        toString += `- ${technique} <!> ${skill}\n`
      });
    }
  }

  return toString
}

function createGladiator(gladiators, gladiator) {
  const gladiatorInfo = gladiator.split(" -> ")
  const name = gladiatorInfo[0]
  const technique = gladiatorInfo[1]
  const skill = Number(gladiatorInfo[2])

  if(!gladiators[name]) gladiators[name] = {}
  if(!gladiators[name][technique]) gladiators[name][technique] = skill
  if(!gladiators[name]["totalSkill"]) gladiators[name]["totalSkill"] = skill
  else gladiators[name]["totalSkill"] += skill
}

const a = [
"Pesho -> BattleCry -> 400",
"Gosho -> PowerPunch -> 300",
"Stamat -> Duck -> 200",
"Stamat -> Tiger -> 250",
"Ave Cesar",
]
const b = [
"Pesho -> Duck -> 400",
"Julius -> Shield -> 150",
"Gladius -> Heal -> 200",
"Gladius -> Support -> 250",
"Gladius -> Shield -> 250",
"Pesho vs Gladius",
"Gladius vs Julius",
"Gladius vs Gosho",
"Ave Cesar",
]

init(a);
console.log("");
init(b);