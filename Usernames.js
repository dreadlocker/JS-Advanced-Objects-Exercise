function main(input) {
  const users = Array.from(new Set(input))
  const sortedUsers = users.sort((a, b) => {
    if(a.length < b.length) return -1
    if(a.length > b.length) return 1
    if(a < b) return -1
    if(a > b) return 1
    return 0
  })

  return sortedUsers.join("\n")
}

const a = [
'Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston',
]
const b = [
'Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot',
]
console.log(main(a));
console.log("");
console.log(main(b));