const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.getElementById("my-card-container");
let cards = "";

for (let index = 0; index < teamMembers.length; index++) {
  const member = teamMembers[index];

  cards += createNewCard(member);
}

cardContainer.innerHTML = cards;

// FUNZIONE PER GENERARE NUOVE CARD
function createNewCard(objRef) {
  const { name, role, email, img } = objRef;

  const card = `
  <div class="card col-md-3">
    <img src="${img}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${role}</p>
      <p class="card-text">${email}</p>
    </div>
  </div>`;

  return card;
}