const input = document.getElementById("input")
const inputBtn = document.getElementById("input-btn")
const todoList = document.getElementById("todo-list")
const blankText = document.getElementById("blacktxt")

inputBtn.addEventListener("click", function() {

   const li = document.createElement("li")
   const inputValue = input.value
   const txt = document.createTextNode(inputValue)
   li.appendChild(txt)
   input.value = ""

   if(inputValue === "") {
      alert("please, write your to-do list")
   } else {
     
   todoList.appendChild(li)

   const checkBox = document.createElement("input")
   const att = document.createAttribute("type")
   att.value = "checkbox"
   checkBox.className = "check-box"
   checkBox.setAttributeNode(att)
   li.appendChild(checkBox)

   const btn = document.createElement("button")
   btn.className = "close"
   const btnTxt = document.createTextNode("❌")
   btn.appendChild(btnTxt)
   li.appendChild(btn)

   const close = document.getElementsByClassName("close")

   for(let i=0; i <close.length; i ++) {
      close[i].onclick = function() {
         this.parentElement.style.display = "none"
      } 
   }
   } 
})





































