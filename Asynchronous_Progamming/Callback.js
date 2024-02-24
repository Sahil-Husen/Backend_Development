// Simulating a function to fetch data from an API
function fetchData(callback) {
    // Assume an asynchronous operation, such as making an HTTP request
    setTimeout(() => {
        const data = { id: 1, name: 'Sahil hussain', email: 'sahilhussainsahil76@example.com' };
        callback(null, data); // Pass null for error and data for success
    }, 1000); // Simulate delay of 1 second
}

// Callback function to process the fetched data
function processData(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data fetched:', data);
    }
}

// Calling fetchData function and passing processData as a callback
fetchData(processData);
