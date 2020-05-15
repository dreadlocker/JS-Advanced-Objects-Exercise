function main(input) {
  const tableHolder = document.getElementById("holder")
  const table = document.createElement("table")
  tableHolder.appendChild(table)
  
  input.forEach(json => {
    const tr = document.createElement("tr")
    table.appendChild(tr)
    const personInfo = JSON.parse(json);

    for (const key in personInfo) {
      if (personInfo.hasOwnProperty(key)) {
        const el = personInfo[key];
        const td = document.createElement("td")
        td.innerText = el
        tr.appendChild(td)
      }
    }
  });
}

const a = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
console.log(main(a));