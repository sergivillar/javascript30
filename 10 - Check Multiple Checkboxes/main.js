document.addEventListener("DOMContentLoaded", e => {
  const checkboxes = document.querySelectorAll(".inbox [type='checkbox']");
  let lastCheck;

  function handleCheck(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastCheck) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastCheck = this;
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
});