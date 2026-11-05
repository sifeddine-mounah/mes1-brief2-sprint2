// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];
let prochainId = 104;
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
const formulaire = document.getElementById("formulaire-participant");

let isChanged = false

function afficher() {
  data.textContent = "";

  participants.forEach(participant => {
    const listeParticipant = document.createElement("ul");
    listeParticipant.classList.add("participants");

    const candidat = document.createElement("li");
    candidat.classList.add("participant");

    if (participant.statut === "Présent") {
      candidat.classList.add("est-present")
    }


    const candidatId = document.createElement("span");
    candidatId.classList.add("participant-id");
    candidatId.textContent = participant.id;


    const nomParticipant = document.createElement("h3");
    nomParticipant.classList.add("participant-name");
    nomParticipant.textContent = participant.nom;

    const candidatStatus = document.createElement("span");
    candidatStatus.textContent = participant.statut;
    if (participant.statut === "Inscrit") {
      candidatStatus.classList.add("badge", "badge-inscrit")
    } else if (participant.statut === "Présent") {
      candidatStatus.classList.add("badge", "badge-present")
    }

    const spanDiv = document.createElement("div");
    spanDiv.classList.add("participant-info");
    spanDiv.appendChild(candidatId);



    const nomBadge = document.createElement("div");
    nomBadge.appendChild(nomParticipant);
    nomBadge.appendChild(candidatStatus);
    spanDiv.appendChild(nomBadge);
    candidat.appendChild(spanDiv);



    const editButton = document.createElement("button");
    editButton.classList.add("button", "button-presence");

    if (participant.statut === "Inscrit") {
      editButton.textContent = "Marquer présent";
    } else if (participant.statut === "Présent") {
      editButton.textContent = "Remettre inscrit";
    }
    candidat.appendChild(editButton);

    editButton.addEventListener("click", () => {
      if (participant.statut === "Inscrit") {
        participant.statut = "Présent"
      } else if (participant.statut === "Présent") {
        participant.statut = "Inscrit"
      }

      // participant.statut = participant.statut === "Inscrit" ? "Présent" : "Inscrit"
      afficher()
    });

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
    const buttonsHolder = document.createElement("div");
    buttonsHolder.classList.add("participant-actions");
    buttonsHolder.appendChild(editButton);
    buttonsHolder.appendChild(deleteButton);
    candidat.appendChild(buttonsHolder);

    listeParticipant.appendChild(candidat);

    data.appendChild(listeParticipant);

  });
}
afficher();

ajoutbtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (nameChamp.value == "") {
    alert("please fill the field")
    return;
  }
  const nouveauCandidat = {
    id: prochainId++,
    nom: nameChamp.value,
    statut: "Inscrit"
  }
  participants.push(nouveauCandidat);
  afficher();
  formulaire.reset();
});

