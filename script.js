document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('groceryForm');
    const groceryList = document.getElementById('groceryList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const itemInput = document.getElementById('itemInput');
        const newItem = itemInput.value.trim();

        if (newItem !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${newItem}</span>
                <button class="boughtBtn">Bought</button>
            `;
            groceryList.appendChild(li);
            itemInput.value = '';
        }
    });

    // Add event listener for 'Bought' button clicks
    groceryList.addEventListener('click', function(event) {
        if (event.target.classList.contains('boughtBtn')) {
            const itemText = event.target.previousElementSibling;
            itemText.style.textDecoration = 'line-through';
            event.target.disabled = true;
            event.target.textContent = 'Brought';
        }
    });
});
