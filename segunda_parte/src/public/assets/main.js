const departmentName = document.querySelector('#name');
const groupName = document.querySelector('#group-name');
const rangoFechaInicio = document.querySelector('#rango-fecha-inicio');
const rangoFechaTermino = document.querySelector('#rango-fecha-termino');

const dataTable = [];


const btn = document.querySelector('#btn');
const table = document.querySelector('#render-data');

fetch('http://localhost:3000/api/departments')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        dataTable.push(...data);
        dataTable.map(element => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${element.departmentid}</td>
                <td>${element.name}</td>
                <td>${element.groupname}</td>
                <td>${element.businessentityid}</td>
                <td>${element.startdate}</td>
            `;
            table.appendChild(row);
        });
    }
);

console.log(dataTable);


const arrayFiltrado = dataTable.filter(element => {
    return element.name == departmentName.value;
});

console.log(arrayFiltrado);

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const arrayFiltrado = dataTable.filter(element => {
//         return element.name === departmentName.value;
//     });
//     console.log(arrayFiltrado);
//     table.innerHTML = '';
//     arrayFiltrado.map(element => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${element.departmentid}</td>
//             <td>${element.name}</td>
//             <td>${element.groupname}</td>
//             <td>${element.businessentityid}</td>
//             <td>${element.startdate}</td>
//         `;
//         table.appendChild(row);
//         });
//     }
// );

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const arrayFiltrado = dataTable.filter(element => {
        let matches = true;

        if (departmentName.value) {
            matches = matches && element.name === departmentName.value;
        }

        if (groupName.value) {
            matches = matches && element.groupname === groupName.value;
        }

        if (rangoFechaInicio.value) {
            const startDate = new Date(rangoFechaInicio.value);
            const elementDate = new Date(element.startdate);
            matches = matches && elementDate >= startDate;
        }

        if (rangoFechaTermino.value) {
            const endDate = new Date(rangoFechaTermino.value);
            const elementDate = new Date(element.startdate);
            matches = matches && elementDate <= endDate;
        }

        return matches;
    });
    
    console.log(arrayFiltrado);

    table.innerHTML = '';
    arrayFiltrado.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.departmentid}</td>
            <td>${element.name}</td>
            <td>${element.groupname}</td>
            <td>${element.businessentityid}</td>
            <td>${element.startdate}</td>
        `;
        table.appendChild(row);
    });
});