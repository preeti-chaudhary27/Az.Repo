// A normal JavaScript object
const user = {
  name: "Alex",
  clicks: 0
};

// A normal function
function greetUser() {
  console.log(`Welcome, ${user.name}!`);
}

// Call the function
greetUser();

// Select HTML elements
const title = document.getElementById("title");
const button = document.getElementById("btn");

// Add an event listener to the button
button.addEventListener("click", function () {
  user.clicks++;           // increase clicks
  title.textContent = `You clicked ${user.clicks} times`; // update UI
});
