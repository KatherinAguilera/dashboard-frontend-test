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
// FILTER
// ==========================================================================
const form = document.querySelector('#form');
const buttonSearch = document.querySelector('#buttonSearch');
const results = document.querySelector('#results');

const  earnings = [
    {
    "month": "Octubre",
    "value": "$629.75"
    },
    {
    "month": "Noviembre",
    "value": "$270.18"
    },
    {
    "month": "Diciembre",
    "value": "$485.35"
    },
    {
    "month": "Enero",
    "value": "$482.53"
    }
]

const filter = () =>{
    results.innerHTML='';
    const text = form.value.toLowerCase();
    for (let gain of earnings) {
        let showResult = gain.month.toLowerCase();
        if (showResult.indexOf(text)  !== -1){
            results.innerHTML +=  `
            <div class="card">
                <p>${gain.month}</p>
                <p>${gain.value}</p>
            </div>
            `
        }
    }
    if(results.innerHTML === ''){
        results.innerHTML +=`
        <p class="search__empty">Resultado de la busqueda: 0</p>
        `
    }
}
buttonSearch.addEventListener('click', filter);
form.addEventListener('keyup', filter);

// ==========================================================================
// GRAPHICS
// ==========================================================================
let resultBar = document.getElementById('graphic').getContext('2d');
let myChart = new Chart(resultBar, {
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


