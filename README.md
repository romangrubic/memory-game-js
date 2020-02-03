## Interactive Frontend Development Project - Code Institute
---
# Memory game

Concentration, also known as Match, Memory, Pelmanism or simply Pairs, is a card game in which all of the cards are laid face down on a 
surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
It is a particularly good game for young children, though adults may find it challenging and stimulating as well. 
The invention of the memory game is sometimes attributed to Christopher Louis
Pelman and the game is often called Pelmanism. 

#### A live game demo is hosted [here](https://romangrubic.github.io/memory-game-js/.).
![Memory game Demo](https://raw.githubusercontent.com/romangrubic/memory-game-js/master/assets/images/readme/live-demo/responsive.png "Memory game Demo")

---
## Summary
* [User Experience](#ux)
    * [User Stories](#user-stories)
    * [Five planes](#strategy)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Future Features](#future-features)
* [Technology used](#technology-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)
---
## UX
### User stories
As a user visiting the website, I would like:

* **a simple design** 
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/user/landing.png?raw=true" width="400" height="200" alt="Landing page">
</p>

* **to see instructions and how to play**
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/user/instruction.png?raw=true" width="400" height="200" alt="Instruction modal">
</p>

* **to play**
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/user/play.png?raw=true" width="400" height="200" alt="Main page">
</p>

* **see scores of my games**
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/user/scoreboard.png?raw=true" width="400" height="200" alt="Scoreboard">
</p>

[Back to top](#summary)

### Strategy
This site was made for user's who are trying to improve their concentration and/or memory and for user's who are looking for a simple game to pass the time.

### Scope 
I would like to make this game simple to use. Design should be minimalist and to the point.
It should contain landing page with instructions and Play! button and a scoreboard. For future,
I would like to add few difficulty levels and option for two-players to play.
### Structure
Once the user arrives at the page, will see a landing page with the heading, a help button, an action button and a footer with social link and a contact modal form.
All of them are centered through the middle so user don't have to run across the screen and they can easily follow up-down the screen.

If they need information about the game, they can click on "How to play?" button where a modal 
will show instructing the user on basic information about the game and logic behind it.
Once they are ready to play, they can click on a "Play!" button and then a board with 16 (sixteen) cards will show.
User can then click on the backside of the cards in order to turn it around. I added a 3-d effect for turning the cards using the CSS styles `perspective` and ` transform-style: preserve-3d;`.
Time counter will start counting the seconds passed and turn counter will start counting turns taken by the user. Once the user has matched all the pairs, board will lock itself, time will stop and a score will show up. 
Also their score will be saved temporarily on the scoreboard on the right side using JavaScript `sessionStorage()`,
 so multiple users can compete by taking turns in finishing the game. Once the user reload the page or closes it down, the scores will delete themselves.

### Wireframes

* **Landing page**
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/wireframe/landing-page.jpg?raw=true" width="400" height="200" alt="Landing page">
</p>

* **Main page**
<p align="center">
  <img src="https://github.com/romangrubic/memory-game-js/blob/master/assets/images/readme/wireframe/main-page.jpg?raw=true" width="400" height="200" alt="Main page">
</p>

### Surface
Using only two colors (light-blue and light-red), background photo and making all the right elements stand out,the visitor knows exactly
what they see and where to go the moment they open the website.

[Back to top](#summary)

## Features
### Existing Features
* Help Button

  - Show the user instructions on how to start the game, what will happen when the game is started and how to finish the game. Also, tells the user how the score is calculated and where the score will be stored and for how long.

* Play Button

  - Shuffles the deck of cards, starts the timer and sets the board. Flips the cards back over. Sets the timer and the turns taken to 0.

* Timer

  - Starts counting after the start button has been clicked. Counts up in seconds. Stops when the game is complete.

* Turns Taken

  - Counts the number of times the user has tried to match two cards. Stops when the game is complete.

* Scoreboard

  - Show the list of scores achieved during this session using `sessionStorage()` and resets once the user has left the page or closed it.

[Back to top](#summary)

### Future features
  - I would like to add option for selecting different number of cards(16, 20, 24)
  
  - I would like to add option for two-players.

[Back to top](#summary)

## Technology used

* HTML5 & CCS3: Essential languages used to build a websites foundations.
* Bootstrap: An easy to use, responsive framework. Bootstrap was used to allow easy implementation of the overall responsivness and pop-up modals. Bootstrap's grid system was also used for simplicity and efficiency.

    - https://getbootstrap.com/
* Font Awesome: A vast and free library of responsive icons. This library was used for the social link icons found in the footer.

    - https://fontawesome.com/
* Google fonts: Library of fonts. This library was used for the font across the page.

    - https://fonts.google.com/
* JavaScript and jQuery: These technologies were essential for the function of the game (interactivity with the user), and to allow Bootstap to display/hide the help modal.

    - https://jquery.com/
* EmailJS: Service that helps sending emails using client side technologies only. It only requires to connect EmailJS to one of the supported email services, 
create an email template, and use their Javascript library to trigger an email. This was used for contact modal so that user's can get in contact with me. 

    - https://www.emailjs.com/

[Back to top](#summary)

## Testing
This site was was tested on multiple browsers (Google Chrome, Mozzila Firefox and Opera), multiple mobile devices (Samsung Galaxy, Huawei, Sony) and tablet device(Samsung Galaxy Tab) and it shown responsivness and compatibility.

All links will open in a new tab using 'target="_blank". All links have been manually tested to ensure that they are pointing to the correct destination.

If you try to submit the contact form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name,' 'email,' and 'message' fields, so if those fields are not filled in, the form will not submit. If all field are valid, e-mail will be sent and modal will close itself. If an user is interested in contacting me, they will have to fill out all fields in order for the form to go through.

Additional manual testing was done to ensure:
* The game plays as intended.
* Appropriate notifications show up when the specific condition was met.
* Scoreboard updates correctly when game is finished.
* Modals worked correctly.
* The buttons provided to the player, functioned as intended.
* Tests to make sure the game was enjoyable.

### Validating code
HTML
 - code is validated through [W3 validator](https://validator.w3.org/).

CSS
 - code is validated through [W3 Jigsaw](https://jigsaw.w3.org/css-validator/).

JS
 - code is validated through [JS Hint](https://jshint.com/).

[Back to top](#summary)

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master 
branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

Process to deploy on Github pages: 
  - Login into your GitHub
  - Go to you profile and click on repository you wish to deploy.
  - In the row below title, on the right side, click on `Settings`.
  - Scroll down to `Github pages` section and select master branch.
  - Wait for a little while and then you can go on web-site by the link provided to you.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/romangrubic/memory-game-js.git` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.  

Further help with cloning can be found on this GitHub Help [page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

[Back to top](#summary)
## Credits 
### Content
+ All content in the game was written by me
### Media
+ Pictures of animals and background photo used in this game were obtained from [Pexels](https://www.pexels.com/), a stock image library.
### Acknowledgement
* Big thanks to [W3 Schools](https://www.w3schools.com/) for all the content and clarification of different methods.
* I would like acknowledge [this work](https://pdf.sciencedirectassets.com/271538/1-s2.0-S0304397500X04057/1-s2.0-030439759390355W/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD9ri%2BXn6v8YcRoekUHdHxTdHLC3huwWNBmj0XTMf3HrgIgao0lQE1QdFjhPyfsh9bgLMeO0RLlQux5ETAkHNeahTAqtAMIXBACGgwwNTkwMDM1NDY4NjUiDFVQbOsik%2Bkl2k3K7SqRA%2Foq6bCZ%2F3aRtmR910Gd%2FNXJJEiR5WcK1AUFYUcXDyrVq4RUSRWQ90cD%2BOkCp1P%2Fq11erR%2FbpujDAq35xXkNGETiRW0r6z4YYBhrys9pkrj4owVy1gODXJpLCyr%2BGiFv4727ZGWx0yXUwI62YHxtdshy0t3Aoofxyy5WvqESSB8wkiAq%2FjtXigoxBoedI7AlBZ5PwZAqYdXkW0q7B10PcO87iePVWTyeZglK%2Ffc2Sgh1WnBh874k2pywA4pTGG8qovQ2CKwC%2FBO3B59fn5EWd3q5hdhwYlml1qWF2YuyJngCqBzxRObndtE%2FOZEdNPAJJi3xzs5x5JcuX8TFSTy9bfvIK5SPT5uEnOgXgyn7Acr7wuB7ldb%2F9oCckrS9o2hfd3uVIVT1SSx63xdwYmv9Yowh6UAXtPx8QhE5B9TJMzssSxEFIV%2BNApWfGzpLTJ1QypDtvrGjuh0HEEGHeIbbLWCWTRcfLuUlerpLG7NuvJP7Qf77wakhcy%2B2%2FS0GgZ3%2BKbPpl4sEXKGtTBzxswzIl6miMLPG9vAFOusBp2JdfEw4Bs5J6h%2BIhNp26LGwtOKH8rJ6ymDV5FAjw8Kc8ieL5uuEbeert916fPbdfPJWUNYg2BwpRsQRJRKxV712fgMcRr4czFvrdRvuPfvN2gYx7Tv2GRF7jT9QyPtqDejJP3LPtRb1Ke6zzSpgQk%2BOiwital6qHH2yzTbq5h%2Bfm4obhWv72WCNJpVcuRsmsLZx6rczhN9ph5hvN9ZlAObp7LD7a4eAB3wtHH9pC8a4IyR1xgpOu9ZMIKBmfpAsWAeKixOKPocKZUGfelLFaFRRCgCbOrnNkzk5qg2yD6YjNjm%2FsIFiXym9lA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200114T122737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY6MZCWTSC%2F20200114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=038af3f1857b0743f05c669a671968353979daa3e77f963db58421186eb4976e&hash=5701d464dfdc24c1b662d77779ad6cf0ade7f810b781c159834c2969f0d48af6&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=030439759390355W&tid=spdf-2b6c1744-8b39-4cbf-b018-950fc6a9c270&sid=75ec1153806ce54db5782a69622df1abfce7gxrqb&type=client) for in-depth cover of the memory match game concept.
* I would like to acknowledge [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game)) for help with the game.

#### This is for educational use.

[Back to top](#summary)