// function with jQuery
function newItem(){

  // 1. Adding a new item to the list:
  let list = $('#list');
  let li = $('<li></li>');

  // // Getting input values and add to list item
  let inputValue = $('#input').val();
  li.append(inputValue)

  if (inputValue === '') {
    alert('Please write something.')
  }
  else {
    list.append(li)
  }

  // 2. Crossing out an item from the list of items:
  // // double click event handler adding strike class to li element when clicking list item
  li.on('dblclick', function() {
    li.toggleClass('strike');
  });

  // 3. 3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');

  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  // // click event handler adding delete class to li element when clicking 'X'
  crossOutButton.on('click', function() {
    li.addClass('delete');
  });

  // 4. Reordering the items:
  list.sortable();
}
