setInterval(update,100);
function update(){
    var input = document.querySelectorAll("input");
    input.forEach(item =>{
        if (item.value !== ""){
            item.parentNode.querySelector("legend").classList.remove("inexist");
        }
        else{
            item.parentNode.querySelector("legend").classList.add("inexist");
        }
        item.addEventListener('focus', () => {
            item.style.backgroundColor = "#ffffff";
            item.parentNode.style.backgroundColor = "#ffffff";
            item.parentNode.querySelector("legend").classList.add("legfocus");
        });
        item.addEventListener('blur', () => {
            item.style.backgroundColor = "rgb(216, 213, 213)";
            item.parentNode.style.backgroundColor = "rgb(216, 213, 213)";
            item.parentNode.querySelector("legend").classList.remove("legfocus");
        });
    })
}

