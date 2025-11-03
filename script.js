const addBtn = document.querySelector('#addbtn');
const main = document.querySelector('.container')
const remove = document.querySelector('.remove-Note');

// colling add note function
addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
);


// function to add note
const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
            <div class="note-navbar">
                <ul>
                    <li class="edit">
                        Edit
                    </li>
                    <li class="save">
                        Save
                    </li>
                    <li class="remove-Note">
                        Delete
                    </li>
                </ul>
            </div>
            <textarea></textarea>
        `;

    //function to remove note
    note.addEventListener("click", function () {
        note.remove();
    }
    );

    // note.addEventListener("click", function () {
    //     saveNots(){
    //         17.21
    //     }
    // })
    main.appendChild(note)

}
