const active = document.getElementById("active");
const newData = document.getElementById("new");
const recovered = document.getElementById("recovered");
const totalCases = document.getElementById("total-cases");
const totalDeaths = document.getElementById("total-deaths");
const totalTest = document.getElementById("total-test");

const input = document.getElementById("input");
const button = document.getElementById("button");
button.addEventListener("click", getData);

async function getData() {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "315e2612b6msh49dd8c3b76f3d3bp16bffajsn480fa6fe6339",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(URL, options);
  const data = await response.json();
console.log(data);
  if (data.response.length) {
    active.innerHTML = data.response[0].cases.active;
    newData.innerHTML = data.response[0].cases.new
      ? data.response[0].cases.new
      : 0;
    recovered.innerHTML = data.response[0].cases.recovered;
    totalDeaths.innerHTML = data.response[0].deaths.total;
    totalCases.innerHTML = data.response[0].cases.total;
    totalTest.innerHTML = data.response[0].tests.total;
  } else {
    active.innerHTML = 0;
    newData.innerHTML = 0;
    recovered.innerHTML = 0;
    totalDeaths.innerHTML = 0;
    totalCases.innerHTML = 0;
    totalTest.innerHTML = 0;
  }
}
