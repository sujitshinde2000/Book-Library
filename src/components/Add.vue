<template>
  <div  class="text-center mt-5 mb-5    " >
    <!-- Button trigger modal   -->
    <!-- <MDBBtn>hello</MDBBtn> -->

    <MDBBtn
      color="success"
      aria-controls="popupWindow"
      @click="popupWindow = true"
    >
      Add Book
    </MDBBtn>
    <MDBModal
      id="popupWindow"
      tabindex="-1"
      labelledby="popupWindowLabel"
      v-model="popupWindow"
    >
      <MDBModalHeader>
        <MDBModalTitle id="popupWindowLabel"> Add a book </MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <div>
          <MDBDropdown v-model="dropdown">
            <MDBDropdownToggle @click="dropdown = !dropdown">
              {{ dropdownTitle }}
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <!-- <MDBDropdownItem href="#">Action</MDBDropdownItem> -->
              <MDBDropdownItem
                v-for="book in books"
                href="#"
                @click="() => selectBook(book)"
              >
                {{ book.name }}
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" @click="popupWindow = false">Close</MDBBtn>
        <MDBBtn color="secondary" @click="add" :disabled="selectedBook == undefined">Add</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </div>
  <!-- <div>
    <p class="text-center">this is paragraph</p>
  </div> -->
</template>

<script setup lang="ts">
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";

import { useAppStore } from "../store/app-store";
import { Ref, ref } from "vue";
import Book from "../classes/book";
import User from "../classes/user";
import { ComputedRef, computed } from "@vue/reactivity";

const dropdown = ref(false);

const popupWindow = ref(false);

//getting the instance of appstore
const appStore = useAppStore();

//getting the library books
const books = appStore.books;

//if we use computed() then we dont need to track the variable 
const dropdownTitle: ComputedRef<string> = computed(() => {
  //NOTE:
  // console.log(selectedBook.value); => return the object
  // console.log(!selectedBook.value); => if there is value returns true else false
  

  return selectedBook.value ? selectedBook.value.name : "select a book"
  // if (!selectedBook.value) return "select a book";
  // return selectedBook.value.name;
});

// const searchedBook:ComputedRef<>
const selectedBook: Ref<Book | undefined> = ref();

  //function which assigns value to the variable selectedBook and also close the dropdown
function selectBook(book: Book) {
  selectedBook.value = book;
  // close drop down after selecting
  // dropdown=false;
  dropdown.value=false;
}

//define props
const props = defineProps<{
  user: User;
}>();


//add function will get the book from the library and add it to the users list
function add() {
  const book = selectedBook.value;

  if(!book) return;

  //removing book from the library
  const removedBook = appStore.pickBook(book);

  //if book not found show the error message
  if (removedBook == undefined) {
    console.log("Book not found.");
    return;
  }

  //if book found then add to the user list
  props.user.addBook(book);
  console.log(props.user.name + " has received the book : " + removedBook.name);

  //when book is added set the selected book value to undefined
  //and close the popwindow
  selectedBook.value=undefined;
  popupWindow.value=false;
}
</script>

<style scoped>


</style>
