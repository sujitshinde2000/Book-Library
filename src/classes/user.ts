import Book from "./book";

export default class User{
    id: number;
    name: string;

    books : Book[] = [];
    favouriteBooks : Book[] = [];

    

    //parameterised constructor to set the id and name of the user
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
        // this.books.filter((x)=>{
        //     return 
        // })
    }


    

    //get the favourite Book
    public get getFavouriteBookList(){
        return this.books.filter((x)=> x.favourite)

    //    return this.books.filter((x)=> {
    //     return x.favourite;
    //    })

    }

    
    //add method which adds a book to the array
     addBook(book : Book){
        this.books.push(book);
    }

    //remove method deletes the book from the books on basis of id
    remove(id : number){
        const index = this.books.findIndex((value:Book)=>{
            return value.id == id;
        })
        console.log(index);
        if(index >= 0) {
            const removedBook =  this.books.splice(index,1); 
            return removedBook[0];  
        }
    }

    //addtofavourites() will take a book and add it to the favourites
    addToFavourites(book:Book){


        //check if book exist in the favourites
        const index = this.favouriteBooks.findIndex((value:Book)=>{
            return value.id == book.id;


        })

        //if index is -1 i.e. book is not in the favourite list then add the book the favourite
        if(index == -1){
            this.favouriteBooks.push(book);
        }
        
        //if index is 1 then return 1 and show the message that book is already in the favourite list
        console.log(book.name+" is already exists in the favourite list.");
        
    }

    //removeFromFavourites() will take a the id of a book and will remove from the favorites
    removeFromFavourites(id:number){
        console.log("inside user.ts : ");
        
        console.log("books in favourite list : "+this.favouriteBooks.length);
        

        const index = this.favouriteBooks.findIndex((value:Book)=>{
            
            return value.id == id;
        })

        
        console.log("index of the book to be removed from the list : "+index);
        if(index >=  -1) {
            const removedBook =  this.favouriteBooks.splice(index,1); 
            console.log(removedBook[0]);
            
            return removedBook[0];  
        }
    }



    


}