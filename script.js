const inputBox = document.getElementById('input_box');
const list = document.getElementById('list');

inputBox.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i>`;
        listItem.addEventListener("click", function(){
            this.classList.toggle('done');
        })
        listItem.querySelector("i").addEventListener("click", function(){
            listItem.remove();
        })
        list.appendChild(listItem);
}
