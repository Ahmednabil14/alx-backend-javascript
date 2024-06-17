interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
}
const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles"
}

let studentsList: Student[] = [student1, student2]

let body = document.body
let table = document.createElement("table")
body.appendChild(table)
studentsList.forEach(element => {
    let row = document.createElement('tr')
    table.appendChild(row)
    let cell1 = document.createElement('td')
    cell1.textContent = element.firstName
    row.appendChild(cell1)
    let cell2 = document.createElement('td')
    cell2.textContent = element.location
    row.appendChild(cell2)
});