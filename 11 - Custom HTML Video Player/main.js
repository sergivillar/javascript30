document.addEventListener("DOMContentLoaded", e => {
  const player = document.querySelector(".player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');

  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
  }

  function skip() {
    const skip = this.dataset["skip"];
    video.currentTime += parseFloat(skip);
  }

  function handleRangeUpdate() {
    video[this.name] = this.value;
  }

  function handlerProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handlerProgress);

  toggle.addEventListener("click", togglePlay);

  skipButtons.forEach(button => button.addEventListener("click", skip));

  ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
  ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

  let mouseDown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
  progress.addEventListener("mousedown", () => mouseDown = true);
  progress.addEventListener("mouseup", () => mouseDown = false);
});