// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

let participantNouv = [...participants];


// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.


const data = document.querySelector("#liste-participants");
const nameChamp = document.getElementById("nom");
const ajoutbtn = document.getElementById("ajoutbtn");


function afficher() {

data.textContent = "";
  participants.forEach(participant => {
    

    const listeParticipant = document.createElement("ul");
    listeParticipant.classList.add("participants");

    const candidat = document.createElement("li");
    candidat.classList.add("participant");


    const candidatId = document.createElement("span");
    candidatId.classList.add("participant-id");
    candidatId.textContent = participant.id;
    candidat.appendChild(candidatId);


    const nomParticipant = document.createElement("h3");
    nomParticipant.classList.add("participant-name");
    nomParticipant.textContent = participant.nom;
    candidat.appendChild(nomParticipant);

    const candidatStatus = document.createElement("span");
    candidatStatus.textContent = participant.statut;
    if (participant.statut === "Inscrit") {
      candidatStatus.classList.add("badge", "badge-inscrit")
    } else if (participant.statut === "Présent") {
      candidatStatus.classList.add("badge", "badge-present")
    }
    candidat.appendChild(candidatStatus);




    const editButton = document.createElement("button");
    editButton.classList.add("button", "button-presence");
    editButton.textContent = "Marquer présent";
    candidat.appendChild(editButton);

    editButton.addEventListener("click", () => {

      ajoutbtn.textContent = "modifier"
      
    })


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button", "button-delete");
    deleteButton.textContent = "Supprimer";
    candidat.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      if (confirm("etes vous sur de supprimer cette participant !?")) {
        participants = participants.filter((p) => p.id !== participant.id);
        afficher();
      }
    })

    listeParticipant.appendChild(candidat);

    data.appendChild(listeParticipant);

  });
}
afficher();

ajoutbtn.addEventListener("click", (event) => {
  event.preventDefault();


  const nouveauCandidat = {
    nom : nameChamp.value,
  }
  participants.push(nouveauCandidat);
  afficher();
})

