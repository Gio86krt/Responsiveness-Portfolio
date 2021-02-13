const quotes = [
  {
    text:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: " Walt Disney",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text:
      "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    text:
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    text:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  { text: "Only the paranoid survive.", author: "Andy Grove" },
  {
    text: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    text:
      "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
    author: "Leah Busque",
  },
  {
    text:
      "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author: "Michele Ruiz",
  },
  {
    text:
      "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    text:
      "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    author: "Joss Whedon",
  },
];

let index = Math.floor(Math.random() * quotes.length);

async function getData() {
  let url = `https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?rapidapi-key=4ce060cc20msh979307ea98f66b2p1d7958jsnbdd5527db2b6`;
  let result = await fetch(url).then((res) => res.json());

  if (!result.text) {
    let text = quotes[index].text;
    let author = quotes[index].author;
    document.querySelector(
      ".quote"
    ).innerHTML += `${text} <br>  <p> ${author}</p><p class="cit">Powered by: https://bestinfopoint.com/</p>`;
    console.log(result);
  } else {
    document.querySelector(
      ".quote"
    ).innerHTML += `${result.text} <br>  <p> ${result.author}</p><p class="cit">Powered by: https://bestinfopoint.com/</p>`;
    console.log(result);
  }
}

function getInputs(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector("#floatingTextarea2").value;
  // console.log(name, email, message);
  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  Email.send({
    // Host: "smtp.gmail.com",
    SecureToken: "54c85e71-4bb4-482d-91c9-fe30d4ea515c",
    To: `webdevgiova86@gmail.com`,
    From: `${email}`,
    Subject: `${name} has sent you a message`,
    Body: `${message}`,
  })
    .then((message) => {
      clearInputs();
      console.log(message);
      alert("Message was sent");
    })
    .catch((err) => {
      alert("Message not sent, try again!");
      console.log(err);
    });
}

function clearInputs() {
  document.querySelector("#name").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector(".email").value = "";
  document.querySelector("#floatingTextarea2").value = "";
}

window.onload = getData();
document.querySelector(".send").addEventListener("click", getInputs);
