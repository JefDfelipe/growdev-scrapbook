const users = JSON.parse(localStorage.getItem('user'))

const tableBody = document.querySelector('#table-body');
const addButton = document.querySelector('#add-item');

async function showNotes() {
    const { status, data } = await axios.get(`https://growdev-jeferson-backend.herokuapp.com/show-user/${users.id}`);
    const showNotes = document.getElementById('table-body');

    showNotes.innerHTML = ''

    if (status === 200) {
        data.notes.map(item => {
            showNotes.innerHTML += `<td>${item.description}</td>
                                    <td>${today}</td>
                                    <td>
                                        <input type="button" value="Excluir" id="delete-note" onclick="deleteNotes(${data.id}, ${item.id})"></input>
                                        <input type="button" value="Editar" id="update-note" onclick="editNotes(${data.id}, ${item.id})"></input>
                                    </td>`
        });
    };
};

async function addNotes() {
    const noteDescription = document.getElementById('note-description');

    let noteContent = {
        description: noteDescription.value
    };

    const { status, data } = await axios.post(`https://growdev-jeferson-backend.herokuapp.com/notes/${users.id}/new-note`, noteContent);

    if (status === 201) {
        const showNotes = document.getElementById('table-body');

        data.description = noteContent.description;

        showNotes.innerHTML += `<td>${data.description}</td>
                                <td>${data.date}</td>
                                <td>
                                    <input type="button" value="Excluir" id="delete-note"></input>
                                    <input type="button" value="Editar" id="update-note" ></input>
                                </td>`;
    };

    showNotes();
};

async function deleteNotes(userId, noteId) {
    await axios.delete(`https://growdev-jeferson-backend.herokuapp.com/notes/${userId}/delete-notes/${noteId}`, {
        method: 'DELETE'
    });

    showNotes();
};

async function editNotes(userId, noteId) {
    const newNote = prompt('Atualizar recado.');

    const updatedNote = {
        note: newNote
    };

    await axios.put(`https://growdev-jeferson-backend.herokuapp.com/notes/${userId}/${noteId}`, updatedNote);
    showNotes();
};

showNotes();

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;