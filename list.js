var myList = document.getElementsByTagName("li");
    for (var i = 0; i < myList.length; i++ ){
        var span = document.createElement("span");
        var cross = document.createTextNode("\u00D7");
        span.className = "removeItem";
        span.appendChild(cross);
        myList[i].appendChild(span);
    }
    
var removeItem = document.getElementsByClassName("removeItem");
    for (var i = 0; i < removeItem.length ; i++ ){
        removeItem[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    
    var toDoList = document.querySelector("ul");
    toDoList.addEventListener("click", function(ev){
       if(ev.target.tagName === "LI"){
           ev.target.classList.toggle("completed");
       }
    }, false );
    
    function addItem(){
        var li = document.createElement("li");
        var inputItem = document.getElementById("toDoItem").value;
        var p = document.createTextNode(inputItem);
        li.appendChild(p);
            if (inputItem === ""){
                alert("Add an item to the list!");
            }
            else{
                document.getElementById("toDoList").appendChild(li);
            }
        document.getElementById("toDoItem").value = "";
        var span = document.createElement("span");
        var cross = document.createTextNode("\u00D7");
        span.className = "removeItem";
        span.appendChild(cross);
        li.appendChild(span);

        for (var i = 0; i < removeItem.length; i++){
            removeItem[i].onclick = function(){
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
