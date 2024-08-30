function hello() {
  return "hello world";
}

let str1 = hello();
console.log(str1);
console.log(typeof str1);

function namaste() {
  return new Promise((reslove, reject) => {
    reslove("Namaste");
  });
}

let str2 = namaste();
console.log(str2);
console.log(typeof str2);

//* using async
async function hola() {
  return "hola Mundo";
}

let str3 = hola();
console.log(str2);
console.log(typeof str3);

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

//* using await
async function getUsers() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
          }
        let data = await response.json();
        console.log(data);
    } catch(error){
        console.error(error);
    }

}

getUsers();