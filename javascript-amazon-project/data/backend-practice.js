const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response); 
});

xhr.open('GET', 'https://supersimplebackend.dev'); // GET = get some information from the backend
xhr.send(); // send request to the backend
xhr.response // it takes time for the request to be sent to the internet
