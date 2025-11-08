<!-- to view this document: Ctrl + Shift + P, Markdown: Open Preview -->

# Notes App Code Documentation

## Technical Documentation Overview

This documentation explains the architecture and functionality of the Notes web application. It focuses on JavaScript logic, DOM manipulation, autosave behavior, and LocalStorage data persistence. The goal is to help developers quickly understand how every feature works behind the scenes.

---

## 🔹 Functional Flow Breakdown

Below is the functional architecture of the Notes Application explained based on actual user actions and internal event flow.

---

# ✅ 1️⃣ Add Note — Flow and Logic

**Event Trigger:** User clicks the `Add Note` button.

### ➤ Steps Executed

1. Create a new `<div class="note">` component.
2. Insert note navbar containing: Edit | Save | Delete.
3. Insert `<textarea>` with default or stored text.
4. Append note to the main container.
5. Save updated data to LocalStorage.

### ➤ Data Flow

```
Click Add Note → Create Note Component → Update DOM → Save Notes in LocalStorage
```

### ✅ Key Code

```js
addBtn.addEventListener("click", function () {
    addNote()
});
```

```js
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="note-navbar">
            <ul>
                <li class="edit">Edit</li>
                <li class="save">Save</li>
                <li class="remove-Note">Delete</li>
            </ul>
        </div>
        <textarea>${text}</textarea>
    `;

    main.appendChild(note);
    saveNots();
}
```

---

# ✅ 2️⃣ Save Note — Flow and Logic

**Event Trigger:**

* User clicks `Save`, or
* User clicks outside the textarea (`focusout` event).

### ➤ Steps Executed

1. Collect all `<textarea>` content.
2. Put them into an array.
3. Convert array to JSON.
4. Store inside LocalStorage.

### ➤ Data Flow

```
Textarea Input → JavaScript Array → JSON → LocalStorage
```

### ✅ Key Code

```js
const saveNots = () => {
    const Notes = document.querySelectorAll(".note textarea");
    const Data = [];

    Notes.forEach((note) => Data.push(note.value));
    localStorage.setItem("Notes", JSON.stringify(Data));
}
```

---

# ✅ 3️⃣ Delete Note — Flow and Logic

**Event Trigger:** User clicks `Delete` button.

### ➤ Steps Executed

1. Remove the selected `<div class="note">` from DOM.
2. Update and rewrite LocalStorage.

### ✅ Key Code

```js
note.querySelector(".remove-Note").addEventListener("click", function () {
    note.remove();
    saveNots();
});
```

### ➤ LocalStorage Update Logic

After deletion, `saveNots()` runs again and rewrites all notes.

---

# ✅ 4️⃣ Auto Save Notes — Flow and Logic

**Event Trigger:** User leaves the textarea (blur).

### ➤ Steps Executed

1. Detect when textarea loses focus.
2. Trigger save function to update LocalStorage.

### ✅ Key Code

```js
note.querySelector("textarea").addEventListener("focusout", function () {
    saveNots();
});
```

---

# ✅ 5️⃣ Load Notes from LocalStorage (on Page Refresh)

**Event Trigger:** Self invoking function when script loads.

### ➤ Steps Executed

1. Fetch stored notes array.
2. Parse JSON to JavaScript array.
3. Loop through array → create notes using `addNote(text)`.

### ✅ Key Code

```js
(function () {
    const lsNotes = JSON.parse(localStorage.getItem("Notes"));
    lsNotes.forEach((lsNote) => {
        addNote(lsNote);
    })
})();
```

### ➤ Data Flow

```
LocalStorage → JSON Parse → Create Notes → Show on UI
```

---

# 🌙 6️⃣ Future Enhancement: Dark Mode

Future versions may include:

* Toggle button for Light/Dark UI
* Save theme preference in LocalStorage

---

# ✅ Summary

This Notes App uses a clean functional approach:

* DOM creation for notes
* LocalStorage for data
* Auto save features
* Responsive UI layout

Perfect for beginners learning CRUD operations without a backend.
