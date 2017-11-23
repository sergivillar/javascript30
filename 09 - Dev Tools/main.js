document.addEventListener("DOMContentLoaded", e => {
  const p = document.getElementById("green");

  const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];
  function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
  }

  p.addEventListener("click", makeGreen);

  // Regular
  console.log("Hello");

  // Interpolated
  console.log("Hello i am a %s string!", "hack");

  // Styled
  console.log("%c I am some great text", "font-size: 20px; background: red;");

  // warning!
  console.warn("Oh no, i'm a warning");

  // Error :|
  console.error("Oh no, i'm an Error");

  // Info
  console.info("I'm only info");

  // Testing
  console.assert(2 === 1, "That's wrong");

  // clearing
  console.clear();

  // Viewing DOM Elements
  console.dir(p);

  // Grouping together
  dogs.forEach(dog => {
    // console.group(dog.name);
    console.groupCollapsed(dog.name);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(dog.name);
  })

  // counting
  console.count("sergio");
  console.count("sergio");
  console.count("sergio");
  console.count("sergio");

  // timing
  console.time("fetching data");
  setTimeout(() => console.timeEnd("fetching data"), 500);

});
