// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // delay of 1 second
      console.log(value);
    }
  }
  
  // Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  // Task 04: Awaiting Concurrent Requests
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2')
      ]);
      
      const data1 = await response1.json();
      const data2 = await response2.json();
      
      console.log('Data from first API call:', data1);
      console.log('Data from second API call:', data2);
    } catch (error) {
      console.log('Error with one or more requests:', error);
    }
  }
  
  // Execute functions
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  awaitCall();
  concurrentRequests();
  