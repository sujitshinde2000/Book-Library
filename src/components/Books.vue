<template>
  <div></div>
  <div>
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <MDBBtn @click="() => updateFilter('All')" color="primary">
            All
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          <MDBBtn @click="() => updateFilter('Author')" color="primary">
            Author
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          <MDBBtn @click="() => updateFilter('Favourite')" color="primary">
            Favourite
          </MDBBtn></MDBCol
        >
      </MDBRow>
      <MDBRow>
        <MDBListGroup light>
          <MDBListGroupItem v-for="book in books">
            {{ book.name }} | {{ book.author }}

            <i
              v-if="book.favourite == false || book.favourite == undefined"
              id="notFavourite"
              @click="book.favourite = true"
              class="fas fa-star"
            ></i>
            <i
              v-if="book.favourite == true"
              @click="book.favourite = false"
              id="favourite"
              class="fas fa-star"
            ></i>

            <MDBBtn @click="deleteBook(book)" id="deleteButton" color="danger">
              Delete
            </MDBBtn>
            <!-- <button id="Button" color="primary">Delete</button> -->
          </MDBListGroupItem>
        </MDBListGroup>

        <div v-if="filterBy == 'Author'">
          <MDBInput
            id="searchAuthor"
            v-model="searchedText"
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          >
            <MDBBtn v-model="searchedAuthor" color="primary">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
        </div>
      </MDBRow>
    </MDBContainer>
  </div>
</template>

<script setup lang="ts">
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { useAppStore } from "../store/app-store";
import Book from "../classes/book";
import User from "../classes/user";
import { ComputedRef, Ref, ref } from "vue";
import { computed } from "@vue/reactivity";



//as soon as user enters the text it should start searching for author names in the list
//so book list is required computed is required
const searchedText: Ref<string > = ref("");

//getting the input from the user as soon as user enters somethiing in the search bar
const searchedAuthor: ComputedRef<string > = computed(() => {
  return searchedText ? searchedText.value : "Search author";
});



//define props
const props = defineProps<{
  user: User;
}>();

//getting the instance of the appStore
const appStore = useAppStore();

//creating user defined type 
type FilterBy = "All" | "Favourite" | "Author";

// const filterBy: Ref<string> = ref("All");
//filterBy variable only accept three types // All | Favourite | Author
const filterBy: Ref<FilterBy> = ref("All"); 

//updaing the filterBy variable when user clicks on any one button
function updateFilter(newValue: FilterBy) {
  filterBy.value = newValue;
}

//getting the books of user as per users choice ALL | by Author | favourite 
const books: ComputedRef<Book[]> = computed(() => {
  const _books = props.user.books;

  //getting the current value of filterby
  const _filterBy = filterBy.value;
  const _searchedAuthor = searchedAuthor.value;

  // return a filter list by a favourite attribute = true
  if (_filterBy == "Favourite") {
    return _books.filter((value: Book) => value.favourite);
    // return _books.filter((value:Book) => {
    // return value.favourite;
    // if(value.favourite == true) return true;
    // return false;
    // });
  }

  //by default it will return empty array
  // filter by author name in attribute and return it
  if (_filterBy == "Author") {
    if (_searchedAuthor.length == 0) return [];

    return _books.filter(
      (value) =>

        value.author.toLowerCase().includes(_searchedAuthor.toLowerCase())
      // value.author.match(_searchedAuthor)
      // value.author.includes(_searchedAuthor)
      // value.author.search(_searchedAuthor)
      // );
    );
  }


  // if filter by is all return whole book list
  return _books;
});


//delete the book from user's list and return back to librarys i.e. pinia store
function deleteBook(book: Book) {

  //remove from rahul's list
  const removedBook = props.user.remove(book.id);

  //add to the library
  if (removedBook != undefined) {
    appStore.returnBook(removedBook);
  }
}

</script>

<style scoped>
#notFavourite {
  color: red;
}

#favourite {
  color: green;
}



</style>
