document.addEventListener("DOMContentLoaded", e => {
  const pressed = [];
  const secretCode = "sergio";

  window.addEventListener("keyup", event => {
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join("").includes(secretCode)){
      console.log("DING DING");
      cornify_add();
    }
  })
});