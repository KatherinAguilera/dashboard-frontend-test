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

// ==========================================================================
// GRAPHICS
// ==========================================================================
let ctx = document.getElementById('graphic').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Oct", "Nov", "Dic", "Ene", "Feb", "Mar"],
        datasets: [
            {
                backgroundColor: "#7583DE",
                data: [60, 21, 46, 36, 24, 38],
            },
            {
                backgroundColor: "#AEDDEB",
                data: [40, 15, 42, 29, 20, 50],
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        datalabels: {
            display: false,
        },
        scales: {

            y: {
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});