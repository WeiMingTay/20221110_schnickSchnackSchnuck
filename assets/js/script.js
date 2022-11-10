// Variablen bestimmen
let rangeInput = document.getElementById("rangeInput"),
	rangeOutput = document.getElementById("rangeOutput"),
	userScore = 0,
	computerScore = 0,
	rundenZaehler = 0,
	displayErgebnis = document.getElementById("displayErgebnis");

let stein = document.getElementById("rock"),
	schere = document.getElementById("scissors"),
	papier = document.getElementById("paper"),
	userOptions = [stein, schere, papier],
	computerOptions = ["stein", "schere", "papier"];

let userName = document.getElementById("userName");
let runden = document.getElementById("rundenUebrig");
let auswahl = document.getElementById("auswahl");
let motivationalSpeech = document.getElementById("motivationalSpeech");

// Funktionen

// Usernamen ändern
userName.addEventListener("click", function () {
	userName.innerHTML = prompt("Wie ist Dein Name?", "User");
});

/* Rundenzahl bestimmen */

rangeInput.addEventListener("input", () => {
	rangeOutput.innerHTML = rangeInput.value;
});

// Restliche Züge berechnen
let spielStarten = () => {
	userOptions.forEach((e) => {
		e.addEventListener("click", function () {
			rundenZaehler++;
			if (rangeInput.value - rundenZaehler === 1) {
				runden.innerHTML = `noch eine Runde`;
			} else if (rangeInput.value - rundenZaehler <= 0) {
				runden.innerHTML = "Spielende";
			} else {
				runden.innerHTML = `noch ${rangeInput.value - rundenZaehler} Runden`;
			}

			let computerWahlNummer = Math.floor(Math.random() * 3);
			let computerWahl = computerOptions[computerWahlNummer];

			gewinner(this.value, computerWahl);
		});
	});
};

// Gewinner bestimmen
let gewinner = (user, computer) => {
	let userScoreAnzeige = document.getElementById("userScore");
	let computerScoreAnzeige = document.getElementById("computerScore");

	rangeInput.style.display = "none";
	rangeOutput.style.display = "none";
	if (user == "stein") {
		if (computer == "papier") {
			displayErgebnis.innerHTML = `${computer.charAt(0).toUpperCase() + computer.slice(1)} schlägt ${user.charAt(0).toUpperCase()+user.slice(1)}. Computer gewinnt diese Runde`;

			stein.classList.add("verloren");
			setTimeout(() => stein.classList.remove("verloren"), 500);
			computerScore++;
			computerScoreAnzeige.innerHTML = computerScore;
			// computerScore+="I";
			// computerScore.push("<li>I</li>");
			// computerScoreAnzeige.innerHTML = computerScore.join("");

			// computerScore[2].style.transform = "rotate(90deg)";

			// computerScore+="<li>I</li>"
		} else if (computer == "stein") {
			displayErgebnis.innerHTML = "Unentschieden";
			stein.classList.add("unentschieden");
			setTimeout(() => stein.classList.remove("unentschieden"), 500);
		} else {
			displayErgebnis.innerHTML = `${user.charAt(0).toUpperCase()+user.slice(1)} schlägt ${computer.charAt(0).toUpperCase() + computer.slice(1)}. Du hast diese Runde gewonnen`;

			stein.classList.add("gewonnen");
			setTimeout(() => stein.classList.remove("gewonnen"), 500);

			userScore++;
			userScoreAnzeige.innerHTML = userScore;
		}
	} else if (user == "schere") {
		if (computer == "stein") {
			displayErgebnis.innerHTML = `${computer.charAt(0).toUpperCase() + computer.slice(1)} schlägt ${user.charAt(0).toUpperCase()+user.slice(1)}. Computer gewinnt diese Runde`;

			schere.classList.add("verloren");
			setTimeout(() => schere.classList.remove("verloren"), 500);

			computerScore++;
			computerScoreAnzeige.innerHTML = computerScore;
		} else if (computer == "stein") {
			displayErgebnis.innerHTML = "Unentschieden";
			schere.classList.add("unentschieden");
			setTimeout(() => schere.classList.remove("unentschieden"), 500);
		} else {
			displayErgebnis.innerHTML = `${user.charAt(0).toUpperCase()+user.slice(1)} schlägt ${computer.charAt(0).toUpperCase() + computer.slice(1)}. Du hast diese Runde gewonnen`;

			schere.classList.add("gewonnen");
			setTimeout(() => schere.classList.remove("gewonnen"), 500);

			userScore++;
			userScoreAnzeige.innerHTML = userScore;
		}
	} else if (user == "papier") {
		if (computer == "schere") {
			displayErgebnis.innerHTML = `${computer.charAt(0).toUpperCase() + computer.slice(1)} schlägt ${user.charAt(0).toUpperCase()+user.slice(1)}. Computer gewinnt diese Runde`;

			papier.classList.add("verloren");
			setTimeout(() => papier.classList.remove("verloren"), 500);

			computerScore++;
			computerScoreAnzeige.innerHTML = computerScore;
		} else if (computer == "stein") {
			displayErgebnis.innerHTML = "Unentschieden";
			papier.classList.add("unentschieden");
			setTimeout(() => papier.classList.remove("unentschieden"), 500);
		} else {
			displayErgebnis.innerHTML = `${user.charAt(0).toUpperCase()+user.slice(1)} schlägt ${computer.charAt(0).toUpperCase() + computer.slice(1)}. Du hast diese Runde gewonnen`;

			papier.classList.add("gewonnen");
			setTimeout(() => papier.classList.remove("gewonnen"), 500);

			userScore++;
			userScoreAnzeige.innerHTML = userScore;
		}
	}
	console.log(+rundenZaehler + "/" + +rangeInput.value);
	if (rundenZaehler == rangeInput.value) {
		console.log(userScore + ":" + computerScore);
		console.log(
			"Unentschieden: " + (rangeInput.value - (userScore + computerScore))
		);
		auswahl.innerHTML = "";
		motivationalSpeech.innerHTML = "";
		restart.style.fontSize = "2rem";

		if (userScore > computerScore) {
			displayErgebnis.innerHTML = "Gewonnen";
			displayErgebnis.classList.add("gewonnen");
		} else if (userScore < computerScore) {
			displayErgebnis.innerHTML = "Verloren";
			displayErgebnis.classList.add("verloren");
		} else {
			displayErgebnis.innerHTML = "Unentschieden";
		}
	}
	console.log(computerScore);
};

// restart
let restart = document.getElementById("restart");

restart.addEventListener("click", () => {
	window.location.reload();
});

spielStarten();
