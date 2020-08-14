// // Add your code here

// let nameUser = document.getElementById("name").value;
// let email = document.getElementById("email").value;
function submitData(name , email){
   let formData = {
  Name: nameUser,
  Age: email
};
 
let configObj = {
  method :"POST" ,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
}
