const tableBody = document.querySelector('#table-body');
const addButton = document.querySelector('#add-item');
const notes = JSON.parse(localStorage.getItem('notesList')) || [];

// função para adicionar recados
function addNotes() {
    const note = prompt('Digite seu recado.');
    notes.push(note);

    showNotes();
    saveNotes();
}

// função para salvar recados
function saveNotes() {
    localStorage.setItem('notesList', JSON.stringify(notes));
}

// função para deletar recados
function deleteNotes(position) {
    notes.splice(position, 1);

    showNotes();
    saveNotes();
}

// função para editar recados
function editNotes(position) {
    const note = prompt('Editar recado.');
    const newNote = notes[position] = note;

    notes.push(newNote);
    notes.splice(notes.length - 1, 1);

    showNotes();
    saveNotes();
}

// função para exibir recados
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;

function showNotes() {
    tableBody.innerHTML = ''

    for (item of notes) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const containerButton = document.createElement('div');
        const editButton = document.createElement('div');
        const deleteButton = document.createElement('div');

        const position = notes.indexOf(item);

        td1.setAttribute('class', 'text-center');
        td2.setAttribute('class', 'text-center');
        td3.setAttribute('class', 'text-center');
        td4.setAttribute('class', 'td4 text-center d-flex align-items-center justify-content-center');
        containerButton.setAttribute('class', 'container-btn');
        editButton.setAttribute('class', 'button-table');
        deleteButton.setAttribute('class', 'button-table');
        deleteButton.setAttribute('onclick', `deleteNotes(${position})`);
        editButton.setAttribute('onclick', `editNotes(${position})`);

        tableBody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td4.appendChild(containerButton);
        containerButton.appendChild(editButton);
        containerButton.appendChild(deleteButton);

        td1.innerText = position + 1;
        td2.innerText = item;
        td3.innerText = today;
        editButton.innerText = 'Editar';
        deleteButton.innerText = 'Excluir';
    }
}