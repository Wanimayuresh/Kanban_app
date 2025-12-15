const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');

const tasks= document.querySelectorAll(".task")
let dragElement=null;
tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
        dragElement=task
    })
})

function addTaskOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over")

    })

    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    column.addEventListener("drop",(e)=>{
        e.preventDefault()
        if(dragElement){
            column.appendChild(dragElement)
        }
        column.classList.remove("hover-over")
        console.log("dropped",column,e,dragElement);
        
    })
}
addTaskOnColumn(todo);
addTaskOnColumn(progress);
addTaskOnColumn(done);

const modal= document.querySelector(".modal")
const toggleModalButton = document.querySelector("#toggle-modal");
const toggleBG = document.querySelector('.modal .bg');

toggleModalButton.addEventListener("click",(e)=>{
    modal.classList.toggle('active')
})
toggleBG.addEventListener("click",()=>{
     modal.classList.toggle('active')
})
