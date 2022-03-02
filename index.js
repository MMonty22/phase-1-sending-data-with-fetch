// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
        }, 
        body:JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(resp => resp.json())
    .then(function (data) {
        document.querySelector('body').append(data.id)
    })
    .catch(function (error) {
        alert("Error, please wait")
        console.log(error.message)
        document.querySelector('body').append(error)
    })
}