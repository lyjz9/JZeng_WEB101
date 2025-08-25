/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    // Write your code here
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (person) => {
  // Step 2: Write your code to manipulate the DOM here
  const newrsvp = document.createElement("p");
  newrsvp.textContent = `🎟️ ${person.name} from ${person.state} has RSVP'd.`;

  const rsvpParticipants = document.querySelector(".rsvp-participants");
  rsvpParticipants.appendChild(newrsvp);

}

// Step 3: Add a click event listener to the submit RSVP button here
// removed for form validation- rsvpButton.addEventListener("click", addParticipant); 

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements; // holds a list of all the different inputs for our form

let person = {
    name: rsvpInputs[0].value,// accesses and saves value of first input
    // add more properties here
    state:rsvpInputs[1].value,
    email:rsvpInputs[2].value
  }

  // TODO: Loop through all inputs
  for (let input of rsvpInputs) {
  let value = input.value.trim(); // use trim() to remove extra spaces in input.value
    if (value.length < 2) {
      input.classList.add("error");
      containsErrors = true;
    } 
    else if (input.name === "email" && !value.includes("@")) {
      input.classList.add("error");
      containsErrors = true;
    } 
    else {
    input.classList.remove("error");
    }
}
  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant(person); // add a call to addParticipant()
    toggleModal(person); // call this for modal to appear
  } 
  for (let i = 0; i < rsvpInputs.length; i++) {
  rsvpInputs[i].value = "";
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm)
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal"); // TODO
    let modalContent = document.getElementById("modal-text");
    // TODO: Update modal display to flex
    modal.style.display = "flex";
    // TODO: Update modal text to personalized message
    modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;
    // Set modal timeout to 5 seconds
    setTimeout(() => {
      // TODO: Update modal display to none
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000);

    let intervalId = setInterval(animateImage, 500)
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById("modal-img");
function animateImage() {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  // JavaScript ES6 includes the ternary operator, which acts like a short, one-line if statement. Here's what that code would look like
  // rotateFactor = rotateFactor === 1 ? 0.8 : 1
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;

}

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/
