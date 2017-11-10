document.addEventListener("DOMContentLoaded", event => {
    const secondHand = document.querySelector(".second-hand");
    const minsHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + 90;

        if(secondsDegrees === 90) {
            secondHand.style.setProperty("transition" , "none");
        } else if (secondHand.style.transition === "none") {
            secondHand.style.transition = "all 0.05s";
            secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
        }

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;        
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);
})