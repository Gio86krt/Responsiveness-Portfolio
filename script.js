async function getData() {
  let url = `https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?rapidapi-key=4ce060cc20msh979307ea98f66b2p1d7958jsnbdd5527db2b6`;
  let result = await fetch(url).then((res) => res.json());

  document.querySelector(
    ".quote"
  ).innerHTML += `${result.text} <br>  <p> ${result.author}</p><p class="cit">Powered by: https://bestinfopoint.com/</p>`;
  console.log(result);
}

window.onload = getData();
