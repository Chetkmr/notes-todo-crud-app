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

// function to save the Notes
const saveNots = () => {
    const Notes = document.querySelectorAll(".note textarea");
    console.log(Notes);
    
    const Data = [];
    Notes.forEach((note) =>{
        Data.push(note.value);
    });
    console.log(Data);

    localStorage.setItem("Notes", JSON.stringify(Data));
}

// (
//     function(){
//         const lsNotes = localStorage.parse(getItem("Notes"));
//         console.log(lsNotes);
        
//     }
// )()

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
    note.querySelector(".remove-Note").addEventListener("click", function () {
        note.remove();
        saveNots();
    }
    );

    note.querySelector(".save").addEventListener("click", function () {
        saveNots();
    });
    main.appendChild(note);

}
