//Fetch
//Fetch is buildin js method used to make http request
//it returns Promise me arya mad ahee.\

// fetch("URL");
// fetch("HTTPS://jsonplaceholder.typicode.com/users");

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((data) => {
    console.log(data); // actual users data
  })
  .catch((error) => {
    console.log(error);
  });

/*
 activity
 //1. assync ex with fetch method 
 
 //fet diplaying names in html list 
 how to async await wth fetch() 
 fetch post show only frst 5 records
 fetch create  a fetch prmse manually resolve after 3 sec and rejct after 3 sec
 dff betw promse and call back
 what s fetch method n js?
 what does fetch return?
 why do we use response.json method ?
 df between then and catch and sync and await
 what is promse chaining?
  
  */
