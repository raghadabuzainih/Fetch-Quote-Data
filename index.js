const api = 'https://dummyjson.com/quotes'
const list = document.querySelector('ul')
const data = []
const search = document.querySelector('#search')

async function getQuote(){
    await fetch(api)
    .then(data => data.json())  // convert string to object
    .then(result => {
        // display quotes in the list
    for(let i=0; i<result.quotes.length; i++){
        const li = document.createElement('li')
        li.textContent = result.quotes[i].quote
        li.id = "quote" + result.quotes[i].id
        list.appendChild(li)
        data.push(li.textContent)
    }
    })
    .catch(err => {
      console.log(err)
      const errMsg = document.querySelector('p')
      errMsg.textContent = 'Failed to fetch quotes'
      errMsg.style.color = 'red'
    })
}

getQuote()

search.addEventListener('input', (e)=>{
    e.preventDefault()
    // elements of data array are quotes text
    for(let i=0; i<data.length; i++){
        if(data[i].toLowerCase().includes(e.target.value.toLowerCase())){
            // "list-item" to show the style type during the search process
            document.getElementById(`quote${i+1}`).style.display = 'list-item'
        }
        else document.getElementById(`quote${i+1}`).style.display = 'none'
    }
})
