const fs = require('fs')

const book = {
    title: 'Your name',
    book: 'Name book'
}

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();
const editBook = JSON.parse(dataJson)

editBook.title = "Intro to Node JS"
editBook.book = 'Node js'

const editBookJSON = JSON.stringify(editBook)
fs.writeFileSync('1-json.json', editBookJSON)
