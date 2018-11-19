
/*

let recipesApiUrl ='https://api.edamam.com/search?q=&app_id=37ee2a99&app_key=0d0cb3c50df032cc7d8de9fc9b95f13b-&diet=low-carb'

function getRecipes(){
    fetch(recipesApiUrl).then((response) => {return response.json();
    }).then((data) => {
        tempWeather = data
        console.log('the temperature is: '+tampaWeather.main.temp+ 'degree');
    });
    // create a paragrough element to show the Tampa weather
   
}

function updateweather(){

    let newPara = document.reateElement('p')
    newPara.innerText = 'the temperature is: '+tampaWeather.main.temp+ 'degree';
    //add new p element as a child of weatherDiv
    document.getElementById('weatherDiv').appendChild(newPara);
}

*/

(function() {
    const result = document.querySelector('#result')
  
    function initEvent() {
      document.querySelector('#search').addEventListener('submit', function(e) {
        e.preventDefault()
        if (e.target[0].value) {
          result.innerHTML = ''
          changeTextButton(e.target[1], 'SEARCHING...')
          search(e.target)
        }
      }, false)
    }
  
    function changeTextButton (button, text) {
      button.textContent = text
    }
  
    function search (form) {
      const formData = new FormData(form)
      fetch(`http://localhost:3000/foods/${formData.get('name')}`)
        .then(resp => resp.json())
        .then(resp => {
          if (!resp.error) {
            resp.forEach(hint => {
              insertCard(hint.food)
            })
          }
          else {
            changeInput(form[0], 'placeholder', 'We didn\'t found any food.')
            resetInput(form[0])
          }
          changeTextButton(form[1], 'SEARCH')
          changeInput(form[0], 'value', '')
        }).catch(() => {
          changeTextButton(form[1], 'SEARCH')
          changeInput(form[0], 'placeholder', 'An error has occurred. Try again later.')
          resetInput(form[0])
        })
    }
  
    function resetInput (input) {
      setTimeout(() => {
        changeInput(input, 'placeholder', 'Type a food or a meal...')
      }, 3000)
    }
  
    function changeInput (input, prop, value) {
      input[prop] = value
    }
  
    function insertCard (food) {
      result.insertAdjacentHTML('beforeend', buildCard(food))
    }
  