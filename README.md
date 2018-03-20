# WDI Project 4

A flashcard-generating application, used for vocabulary acquisition. This application was inspired by my love of language learning and allows users to create and share flashcards, and also test themselves. The logic ensures repetition of the flashcards which the user finds more difficult to remember.

<kbd>
  <img src="src/assets/images/screenshots/landing-page.png" />
</kbd>

### Installation and Setup

**Run locally**

* Download or clone the GitHub repo

**View online**

* [View on Heroku](https://mysterious-anchorage-60146.herokuapp.com)
* View on GitHub

### Technologies used

During the creation of this project, I used the following technologies:

* Animate CSS
* Axios
* Babel
* bcrypt
* Bluebird
* Body-parser
* Chai
* Enzyme
* Express
* Font Awesome
* Git
* GitHub
* Heroku
* HTML 5
* JavaScript (ECMAScript 6)
* JSON Web Token
* Lodash
* Mocha
* MongoDB
* Mongoose
* Morgan
* Node.js
* NYC
* React
* SCSS
* Sinon
* Supertest
* Webpack

After logging in, users are directed to their profile page. Here are listed the flashcard decks that they have created and also, in a separate list, the flashcard decks that they have favourited.

<kbd>
  <img src="src/assets/images/screenshots/profile-page.png" />
</kbd>

The users own decks are stored in a virtual 'myDecks' on the user model, whilst the favourites are a virtual 'favourites' on the deck model. Both are shown here by populating the myDecks and favourites field when making the request to the back-end.

On the decksIndex page, users have access to all decks created by themselves or by other users.

<kbd>
  <img src="src/assets/images/screenshots/decks-index.png" />
</kbd>

Users can filter the decks by a particular language or by typing in the name of the deck. All decks (or search results) can be ordered according to the number of favourites, or may be ordered alphabetically.

The filtering and sorting takes place on the front end. Each of the select boxes, or input box for the search, has a handler attached to it, which updates state if changed. The direction of the sort is, by default, set to descending, so decks with the most favourites are shown first.

When a user clicks on a particular deck, a request is made to the back-end for data relating to the deck in question. The flashcards of that deck are stored as an array on state. The user is given the word in English and their challenge is to say this word out loud.

<kbd>
  <img src="src/assets/images/screenshots/decks-show1.png" />
</kbd>

Once they have done this, or they have decided that they are unable to recall the word, they click the 'Reveal' button. They are prompted to state whether their answer was correct or incorrect.

<kbd>
  <img src="src/assets/images/screenshots/decks-show2.png" />
</kbd>

If they clicked correct, the card is deleted from the array and will not appear again. If they clicked correct, the card will be pushed to the end of the array, so it will appear again.

The user is informed that they have completed the deck once there are no cards left in the array.

### Wins

* The application is fully mobile responsive. As wordUp is designed for regular and quick vocabulary testing, it is vital that it functions on mobile devices. This was achieved through a mobile-first design approach, using Balsamiq wireframes during the planning stage.

<img src="src/assets/images/screenshots/decks-show-mobile.png" style="height: 300;" /><img src="src/assets/images/screenshots/decks-index-mobile.png" style="height: 300;" />

* A clean, fresh design was achieved on this project. This is particularly down to the integration of Animate CSS for the pop up messages during form validation and also during flash-card utilisation - giving the app a slick, professional feel. Bulma.io was used for its lightweight feel and customised using a colour palette from the Coolors website, providing an individual edge. FontAwesome icons also enhance the appearance of the app.

### Challenges faced

currentIndex 0 - there are no cards in this deck

* This was my first large-scale project built using React. As such, it proved difficult to plan the project. This challenge was overcome by using Trello during the planning stage to ensure that each process was thought through prior to the build stage.

### Where next?

* I would like to incorporate a translation API into the flashcard-creation process of the app. This would allow users to create flashcards by typing in the word in English, then the API would translate this for them into the target language.

whilst loading - animation - so it is slicker.
