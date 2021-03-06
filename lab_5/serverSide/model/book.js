let books = [];
//id, title, ISBN, publishedDate, author
class Books{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id,
        this.title = title,
        this.ISBN = ISBN,
        this.publishedDate = publishedDate,
        this.author = author
    }
    save(){
        this.id = Math.random().toString();
        books.push(this);
        return this;
    }
    update(){
        const item = books.findIndex(book=> book.id!==this.id);
        if(item> -1){
            books.splice(item, 1, this)
            return this;
        } 
        throw new Error('Book Not Found!')
    }
    static fetchAll(){
        return books;
    }
    static findById(bookId){
        const item = books.findIndex(id=> id!==bookId);
        if(item> -1){
            return books[item];
        }
        throw new Error('Not Found!')
    }
    static deleteById(bookId){
        const item = books.findIndex(item=> item.id===bookId);
        if(item > -1){
            books= books.filter(item=> item.id!==bookId);
        } else {
            throw new Error (`${bookId} not found`)
        }
    }
}

module.exports = Books;