console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', 
fetch(imgUrl)
.then(resp=>resp.json()
.then(data => addImg(data))));

const addImg = data =>{
  data.message.forEach(url=>{
    const div = document.getElementById('dog-image-container')
    const img = document.createElement('img')
    img.src = url
    div.append(img)
  })
}

document.addEventListener('DOMContentLoaded', 
fetch(breedUrl)
.then(resp=>resp.json()
.then(data => addBreeds(data))));

const addBreeds =(data)=>{
  for(arr in data.message){
    console.log(data.message[arr])
  }

    // li.addEventListener('click',()=>{
    //   li.style.color = "purple"
    // })

    // ul.append(li)
  
}

// Object.keys(data.message).forEach(dog =>{
//   const li = document.createElement('li')
//   const ul = document.getElementById('dog-breeds')
//   li.textContent = dog