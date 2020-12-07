let notesPlayed = [] // An empty array (will hold our music)

let btnA = document.querySelector(`#btnA`)
let btnB = document.querySelector(`#btnB`)
let btnReplay = document.querySelector(`#replay`)

let clickedA = function() {
	notesPlayed.push(`A`)  // Add A to the history
	// Play the A note
}
let clickedB = function() {
	notesPlayed.push(`B`)  // Add B to the history
	// Play the B note
}
let replayNotes = function() {
	let playOneNote = function(note) {
		// Play the audio for the note
		console.log(`Playing note: ${note}`)
	}
	notesPlayed.forEach(playOneNote)
}

btnA.addEventListener(`click`, clickedA)
btnB.addEventListener(`click`, clickedB)
btnReplay.addEventListener(`click`, replayNotes)