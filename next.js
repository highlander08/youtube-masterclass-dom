const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
const temnada = document.querySelector('.tem-nada');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    console.log(e)
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;

    // Create new li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item p-3 mb-2 bg-info text-dark';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    const deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    temnada.textContent = ''

}

// Remove item
function removeItem(e) {
    // console.log(e.path[1].attributes[0].nodeValue)

    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}