# googlebooksreact

## **LINK TO HEROKU**


## **OVERVIEW**

In this assignment, I was tasked with creating React-based Google Books Search app. The app will all users to seearch for books using the Google Books API and saved like books. This will be a full-stack MERN App.

## **TECHNOLOGIES USED**

### **JavaScript:**
#### **Platforms:**
* Node
* MongoDB
* Express

## **Installed Packages:**
### **Backend**
* Express
Routes
- /api/books (get) - Should return all saved books as JSON.
- /api/books (post) - Will be used to save a new book to the database.
- /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
* Mongoose
* Axios

### **Frontend**
* Axios
* React 
* React-dom
* React-router-dom
* React - scripts

## **APP FUNCTION**
### **Search Page**
* User will search for book title in search bar
* Search will pull the following book information:
- title: Title of the book from the Google Books API
- author(s): The books's author(s) as returned from the Google Books API
- description: The book's description as returned from the Google Books API
- image: The Book's thumbnail image as returned from the Google Books API
- link: The Book's information link as returned from the Google Books API
* App will return books as per user query
* User will have the option to save save book and review later or "click" link to take user directly to book page.

### **Save Page**
* All of the user saved books are listed. 
* User will have the option to delete books from saved that they no longer wish to be listed or "click" link to take user directly to book page.
