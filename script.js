const notesContainer = document.querySelector(".notescontainer")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".inputbox")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className="inputbox"
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img)
    updateStorage();

})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG" ){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p")
    {
        notes = document.querySelectorAll(".inputbox")
        notes.forEach(nt=>{
            nt.onKeyup = function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown",event=>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})