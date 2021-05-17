// ==========================================================================
// DATA JSON
// ==========================================================================
const students = document.getElementById('students');
const date = document.getElementById('date');
const items = document.getElementById('items');

function data(){
  fetch('../data.json')
  .then(res => res.json())
  .then(datos => {
    for(let i of datos["students"]){
        console.log(i.name);
        const row = document.createElement('div');
        row.innerHTML += `
            <p>${i.number}</p>
            <p>${i.name}</p>
        `;
        students.appendChild(row);
    }

    for(let i of datos["date"]){
      console.log(i.month);
      const row = document.createElement('div');
      row.innerHTML += `
          <p>${i.month}</p>
          <p>${i.value}</p>
      `;
      date.appendChild(row);
  }

  for(let i of datos["items"]){
    console.log(i.month);
    const row = document.createElement('div');
    row.innerHTML += `
      <img src="${i.img}" alt = "Imagen Item" />
      <p>${i.description}</p>
    `;
    items.appendChild(row);
}
});
}
data();