var xhr = new XMLHttpRequest();

let data = {
    "type": 'authorization',
    "name": "egor",
    "surname": "lebedev",
    "email": "egor28476@gmail.com",
    "password": "12343211",
}

xhr.open('POST', 'http://localhost:1337', true);
xhr.setRequestHeader("Content-type", "application/json")
xhr.send(JSON.stringify(data));
xhr.onreadystatechange = () => {
    if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
        alert("User is cool");
    }
    else if (this.status == 403) {
        alert("User already exist");
    }
    else {
        console.log('fuck you!')
    }

}