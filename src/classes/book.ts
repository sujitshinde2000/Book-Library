export default class Book {
  id: number;
  name: string;
  author: string;
  description: string;
  favourite: boolean = false;

  constructor(id: number, name: string, author: string, description: string, favourite:boolean) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.description = description;
    this.favourite = favourite;
  }
}
