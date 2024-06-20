// Function to get the indexes from the URL hash
function getIndexesFromHash() {
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    const indexes = hash.split(',');

    return indexes;
}

// Display the indexes on the page
function displayIndexes() {
    const indexes = getIndexesFromHash();
    const contentDiv = document.getElementById('content');

    // Create a list of indexes
    const ul = document.createElement('ul');
    indexes.forEach(index => {
        const li = document.createElement('li');
        li.textContent = `Index: ${index}`;
        ul.appendChild(li);
    });

    contentDiv.appendChild(ul);
}

// Run the displayIndexes function when the page loads
window.onload = displayIndexes;
