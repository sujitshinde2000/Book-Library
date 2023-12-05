import { defineStore } from "pinia";
import Book from "../classes/book";
import User from "../classes/user";

export const useAppStore = defineStore("app", () => {
  const rahul = new User(1, "Rahul");
  const sachin = new User(2, "Sachin");
  const suresh = new User(3, "Suresh");

  // const bookNames:string = ["Discovery of India", "Glimpses of World History", "A Tale of Two Cities", "David Copperfield", "Geetanjali", "Raghuvamsa", "Shakuntala"];
  // const authors : string = ["Pandit Jawaharlal Nehru", "Charles Dickens", "Rabindra Nath Tagore", "Kalidas"];

  const books: Book[] = [
    {
      id: 20,
      name: "Discovery of India",
      author: "Nehru",
      description: "nice",
      favourite: false,
    },
    {
      id: 23,
      name: "Glimpses of World History",
      author: "Nehru",
      description: "good",
      favourite: false,
    },
    {
      id: 24,
      name: "A Tale of Two Cities",
      author: "Charles Dickens",
      description: "good",
      favourite: false,
    },
    {
      id: 25,
      name: "David Copperfield",
      author: "Charles Dickens",
      description: "good",
      favourite: false,
    },
    {
      id: 26,
      name: "Geetanjali",
      author: "Rabindra Nath Tagore",
      description: "good",
      favourite: false,
    },
    {
      id: 27,
      name: "Raghuvamsa",
      author: "Kalidas",
      description: "good",
      favourite: false,
    },
    {
      id: 28,
      name: "Avigyan Sakuntalam",
      author: "Kalidas",
      description: "good",
      favourite: false,
    },
    {
      id: 29,
      name: "Shakuntala",
      author: "Kalidas",
      description: "good",
      favourite: false,
    },
    {
      id: 30,
      name: "Das Kapital",
      author: "Karl Marx",
      description: "good",
      favourite: false,
    },
    {
      id: 31,
      name: "My Experiments with Truth",
      author: "M K Gandhi",
      description: "good",
      favourite: false,
    },
  ];

  // this function will remove a book from book array
  // and pass the book to user list
  function pickBook(book: Book): Book | undefined {
    console.log("inside appstore");

    console.log(book);

    // [book1,book2,book3]
    const index = books.findIndex((value: Book) => {
      return value.id == book.id;
    });

    console.log(index);
    if (index >= 0) {
      books.splice(index, 1);
      return book;
    }
    return undefined;
  }

  function returnBook(book: Book) {
    books.push(book);
    console.log(
      "Book" + book.name + " is successfully returned to the library"
    );
  }

  return { books, pickBook, returnBook, rahul, sachin, suresh };
});
