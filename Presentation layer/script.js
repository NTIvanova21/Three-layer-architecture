function getData() {
    fetch('/get_data') // Assuming we're using a web framework like Flask or Django
        .then(response => response.json())
        .then(data => {
            // Process the data received from the server
            document.getElementById('dataContainer').innerText = data.join(', ');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}