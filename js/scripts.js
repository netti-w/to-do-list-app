// function with jQuery
function newItem(){

  // 1. Adding a new item to the list:
  let list = $('#list');
  let li = $('<li></li>');

  // // Getting input values and add to list item
  let inputValue = $('#input').val();
  li.append(inputValue)

  if (inputValue === '') {
    console.log('Please write something.')
  }
  else {
    list.append(li)
  }

  // 2. Crossing out an item from the list of items:
  li.on("click", function() {
    li.addClass("strike");
  });

  // 3. 3(i). Adding the delete button "X":


  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  // li.addClass("delete");

  // 4. Reordering the items:
}



// function newItem(){
//
// //javascript
// //1. Adding a new item to the list of items:
//    let li = document.createElement("li");
//    let inputValue = document.getElementById("input").value;
//    let text = document.createTextNode(inputValue);
//    li.appendChild(text);
//
//    if (inputValue === '') {
//      alert("You must write something!");
//    } else {
//      let list = document.querySelector('#list');
//      list.appendChild(li);
//    }
//
//  //2. Crossing out an item from the list of items:
//    function crossOut() {
//  		li.classList.toggle("strike");
//  	}
//
//  	li.addEventListener("dblclick",crossOut);
//
//  //3(i). Adding the delete button "X":
//    let crossOutButton = document.createElement("crossOutButton");
//  	crossOutButton.appendChild(document.createTextNode("X"));
//  	li.appendChild(crossOutButton);
//
//  	crossOutButton.addEventListener("click", deleteListItem);
//  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//    function deleteListItem(){
//  		li.classList.add("delete")
//  	}
//  // 4. Reordering the items:
//    $('#list').sortable();
//
// }
