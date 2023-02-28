// Add your code here

function submitData(usersName, usersEmail) {
    let bodyObj = {
        name: usersName,
        email: usersEmail
    }

    let test1Obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bodyObj)
    }
    return fetch("http://localhost:3000/users", test1Obj)
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        let h2 = document.createElement("h2");
        h2.innerHTML = obj.id;
        document.body.appendChild(h2);   
        console.log(obj)
    })
    .catch(function (error) {
        let h3 = document.createElement("h3");
        h3.innerHTML = error.message;
        document.body.appendChild(h3);
        console.log(error.message);
    })
}

submitData()