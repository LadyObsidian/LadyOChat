
let countdown = 135;
const countdownElement = document.getElementById("countdown");
const chatBox = document.getElementById("chat-box");
const payBtn = document.getElementById("pay-btn");
const tipBtn = document.getElementById("tip-btn");
const fanvueBtn = document.getElementById("fanvue-btn");

function addMessage(msg) {
  const message = document.createElement("div");
  message.textContent = msg;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 0) {
    clearInterval(interval);
    addMessage("Tick tock, pet. Your free time has ended. If you want more of Me... pay the price.");
    payBtn.classList.remove("hidden");
  }
}, 1000);

payBtn.addEventListener("click", () => {
  payBtn.classList.add("hidden");
  addMessage("Good choice, little plaything. You now have 15 minutes of My attention. Don’t waste them.");
  setTimeout(() => {
    addMessage("Your time with Me is up. If you want more, prove it.");
    tipBtn.classList.remove("hidden");
    fanvueBtn.classList.remove("hidden");
  }, 15 * 60 * 1000); // 15 minutes
});
