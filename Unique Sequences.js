function uniqueSequences(input) {
  const numbersSequences = getNumbersSequences(input)
  let toString = ""
  numbersSequences.forEach(arr => {
    toString += `[${arr.join(", ")}]\n`
  });
  return toString
}

function getNumbersSequences(input) {
  return input.reduce((numbersSequences, str) => {
      const currentSequence = JSON.parse(str)
      const isSequenceLengthUnique = numbersSequences.every(singleSequence => singleSequence.length !== currentSequence.length)
      if(isSequenceLengthUnique) {
        const descendingSequence = currentSequence.sort((a, b) => b - a)
        numbersSequences.push(descendingSequence)
      }
      return numbersSequences
    }, [])
    .sort((a, b) => a.length - b.length)
}

const a = [
"[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]",
]
const b = [
"[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]",
]
console.log(uniqueSequences(a));
console.log("");
console.log(uniqueSequences(b));