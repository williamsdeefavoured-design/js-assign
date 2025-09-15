const listInput = document.getElementById("listInput");
const addItem = document.getElementById("addItem");
const newItem = document.getElementById("newItem");
const rmItem = document.getElementById("rmItem")


// ADD LIST ITEM

addItem.addEventListener("click", () =>{
    if (listInput.value) {
        const inputItem = listInput.value;

    const liItem = document.createElement("li");
    liItem.textContent = inputItem;

    newItem.appendChild(liItem);
    listInput.value = ""
    }else if(listInput.value = ""){
        addItem.disabled = true;
    }
    
})


// MARK COMPLETED TASK
newItem.addEventListener("click", (event) =>{
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
        
        
        event.target.style.boxShadow = "1px 4px 8px #0000007e";
        event.target.style.border = "1px solid #ffffff7e";
        event.target.style.borderRadius = "3px"
    }
})




// REMOVE LIST ITEM

rmItem.addEventListener("click", (event) =>{
    const deleteTask = document.querySelectorAll(".completed");

    deleteTask.forEach((task) =>{
        alert("Task Deleted");
        task.remove();
    })

})