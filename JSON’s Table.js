function main(input) {
  const tableHolder = document.getElementById("holder")
  const table = document.createElement("table")
  tableHolder.appendChild(table)
  
  input.forEach(json => {
    const tr = document.createElement("tr")
    table.appendChild(tr)
    const objValues = Object.values(JSON.parse(json))
    
    objValues.forEach(el => {
      const td = document.createElement("td")
      td.innerText = el
      tr.appendChild(td)
    });
  });
}

const a = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
console.log(main(a));