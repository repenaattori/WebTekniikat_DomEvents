let searchInput = document.getElementById("search");
let listItems = document.querySelectorAll("li");

searchInput.addEventListener("input", search);


function search(){
    let keyword = searchInput.value;
    console.log(keyword);
    for (const li of listItems) {
        if(li.textContent.includes(keyword)){
            li.style.display = "list-item";
        }else{
            li.style.display = "none";
        }

    }
}