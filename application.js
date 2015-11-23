var myElement = 'input'
var inputBox = document.querySelector(myElement)
inputBox.value = 'Sebastiaan'
document.querySelector('h1').textContent = inputBox.value

inputBox.addEventListener('keypress', function (event) {
  console.log(event)
  fetch('address.json?name=' + inputBox.value).then(function (response) {
    response.json().then(function (data) {
      // console.log(data)
      document.querySelector('h1').textContent = data.office
    })
  })
})
