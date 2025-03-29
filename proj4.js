//Function to print current date/time
var today = new Date();
var date =
  today.getDate() +
  " / " +
  (today.getMonth() + 1) +
  " / " +
  today.getFullYear();
document.getElementById("display__date").innerHTML = date;

//Declare consts for function to add items to list from input
const listItems = document.getElementById("todoList");
const input = document.getElementById("input");
const remove = document.getElementById("clear");

//Add item by also pressing enter key instead of Add Item button
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

//addItem function
function addItem() {
  //Need to create a single outer div for Item + Checkbox
  var divParent = document.createElement("div");

  //Add 'item' class to divParent
  divParent.className = "item";

  //Create the Item + Checkbox Div
  divParent.innerHTML = `<div style="display: flex;">
    <input type="checkbox" style="margin-top: 2px; margin-top: 5px;" name="" id="check">
    <p style="margin-left: 10px;">${input.value}</p> 
  <div>`;

  //Use Clear Button to remove contents
  listItems.appendChild(divParent);
  input.value = "";
}

//Function to clear list with clear tasks button
function clearItem() {
  let divToRemove = document.getElementsByClassName("item");
  while (divToRemove.length > 0) {
    //While there is an item to remove
    divToRemove[0].remove(); //Remove the item in the first position, and continue
  }
}
