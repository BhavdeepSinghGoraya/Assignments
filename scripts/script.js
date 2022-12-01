const clickDarkTheme = document.querySelector('.DarkTheme');
const SideBar = document.querySelector('aside');
const cancelBtn = document.querySelector('.Cancel');
const saveBtn = document.querySelector('.Save');
const textArea = document.querySelector('textarea');
const newNoteBtn = document.querySelector('.Note');
const notesArray =[ {title:"note one" , body:"this is my first note"},
                    {title:"note two" , body:"this is my second note"}
                ];
const unorderedList = document.querySelector('.notes-list'); 
function buttonDarkTheme(e){
    document.body.classList.toggle('dark-background-color');
    document.body.classList.toggle('light-text-color');
    SideBar.classList.toggle('dark-aside-color');
    newNoteBtn.classList.toggle('btn-dark-background-color');
    clickDarkTheme.classList.toggle('darktheme-background-color');
    cancelBtn.classList.toggle('cancel-background-color');
    saveBtn.classList.toggle('btn-dark-background-color');
};

clickDarkTheme.addEventListener('click', buttonDarkTheme);

function changeText(e){
    if ( clickDarkTheme.textContent === "Dark Theme"){
        clickDarkTheme.textContent = "Light Theme"
    }
    else{
        clickDarkTheme.textContent = "Dark Theme"
    }
};

clickDarkTheme.addEventListener('click', changeText);

function displayNone(){
    saveBtn.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    cancelBtn.classList.toggle('hidden');
}

cancelBtn.addEventListener('click',displayNone);

function handelClick(){
    textArea.value = ''
}

function display(){
    saveBtn.classList.remove('hidden');
    textArea.classList.remove('hidden');
    cancelBtn.classList.remove('hidden');

}

newNoteBtn.addEventListener('click',display);
newNoteBtn.addEventListener('click',handelClick);

function saveNotes(){
    userInput = prompt(`Enter the Title of the note to be saved:`);
    newNote = {title: userInput, body: textArea.value};
    notesArray.push(newNote)
    console.log(notesArray)
}

saveBtn.addEventListener('click',saveNotes);

const notesList = document.querySelector('.notes-list').getElementsByTagName('li');
function addNote(){
    unorderedList.innerHTML = "";
    for (i=0; i < notesArray.length; i++) {
    if (notesArray[i].title != notesList){
        let li = document.createElement('li');
        li.textContent = notesArray[i].title;
        unorderedList.appendChild(li);
    }
}
}

saveBtn.addEventListener('click',addNote);

function openNote(e){
    for (i=0; i < notesArray.length; i++){
        if (e.target.textContent === notesArray[i].title){
            textArea.value = notesArray[i].body;
        }
    } 
};

unorderedList.addEventListener('click', openNote);