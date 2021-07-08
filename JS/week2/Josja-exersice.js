/* So here is an exercise for you if you are ahead already, to deepen your knowledge on the topics of this week (so for this exercise only use this weeks and last weeks topics):
I have a couple of books on my shelf:
1. Create a data structure to represent these books with properties like title, author, summary, haveRead, topics etc.
2. How would you add a book to the shelf?
3. How would you find a book by author?
4. If I lend a book to someone, how would you represent that in the shelf?
5. I have a notebook with notes I made about these books, which are stored in a separate object, how would I link the books to the notes?
6. Write a loop to store the books in alphabetical order of the title. */

let favBooks = [
    {
        Title : "HTML from A 2 Z",
        Author : "Nekolas" ,
        Summary : "teach you every thing about HTML",
        "Have read" : false
    },
    {
        Title : "CSS from A 2 Z",
        Author : "John" ,
        Summary : "teach you every thing about CSS",
        "Have read" : true
    },
    {
        Title : "Javascript from A 2 Z",
        Author : "Malolo" ,
        Summary : "teach you every thing about JS",
        "Have read" : false
    },
    {
        Title : "React from A 2 Z",
        Author : "Chamlolo" ,
        Summary : "teach you every thing about React",
        "Have read" : true
    }
]

let addNewBook = function (x) {
    x.push({
        Title : prompt("what is the book title"),
        Author : prompt("what is the author's name") ,
        Summary : prompt("write a summery"),
        "Have read" : prompt("did you read the book ?", "only true or false")
    })
}

let findByAuthor = function (AuthorName) {
    for (let books of favBooks) {
        if (books.Author === AuthorName) {
            return console.log(books);          
        } 
    } console.log("This Author doesn't have books in your library");
}

addNewBook(favBooks);
findByAuthor("Malolo");