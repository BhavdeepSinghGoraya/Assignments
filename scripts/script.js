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