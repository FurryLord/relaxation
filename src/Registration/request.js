const xhr = new XMLHttpRequest()

const data = {
  type: "authorization",
  name: "egor",
  surname: "lebedev",
  email: "egor28476@gmail.com",
  password: "12343211",
}

xhr.open("POST", "http://localhost:1337", true)
xhr.setRequestHeader("Content-type", "application/json")
xhr.send(JSON.stringify(data))
xhr.onreadystatechange = () => {
  if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
    // eslint-disable-next-line no-alert
    alert("User is cool")
  } else if (this.status === 403) {
    // eslint-disable-next-line no-alert
    alert("User already exist")
  } else {
    // eslint-disable-next-line no-console
    console.log("fuck you!")
  }
}
