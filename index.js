console.log('Connection Successful!')
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()

    let inputField = document.querySelector('input')

    let movie = document.createElement('li')

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    movie.addEventListener('click', crossOffMovie)

    let movieList = document.querySelector('ul');
    movieList.appendChild(movie)

    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true){
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie Added Back!'
    }
}

function (deleteMovie, crossOffMovie){

}