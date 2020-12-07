let notesPlayed = [] // An empty array (will hold our music)
let masterVolume = 0.5


let btnA = document.querySelector(`#tom1`)
let btnB = document.querySelector(`#tom2`)
let btnReplay = document.querySelector(`#replay`)
let rngVol = document.querySelector(`#volume`)

let clickedA = function() {
  let sound = new Audio(`audio/tom1.wav`)
  sound.volume = masterVolume
  sound.play()
  notesPlayed.push(sound)  // Add A to the history
}
let clickedB = function() {
  let sound = new Audio(`audio/tom2.wav`)
  sound.volume = masterVolume
  sound.play()
	notesPlayed.push(sound)  // Add B to the history
}
let replayNotes = function() {
  let index = 0  // counter
  
	let playOneNote = function() {
    let note = notesPlayed[index]
    let speed = document.querySelector(`#speed`).value

		note.volume = masterVolume
    note.play() // Play the audio for the note

    index = index + 1

    // Only if there are still notes to play
    if (index < notesPlayed.length) {
      // Play a function at a 500ms delay
      setTimeout(playOneNote, speed) // Loop this function again, in one second
    }
  }

  playOneNote() // just like a forEach, except it's timed
	//notesPlayed.forEach(playOneNote)
}

let updateVolume = function() {
  masterVolume = rngVol.value
}


btnA.addEventListener(`click`, clickedA)
btnB.addEventListener(`click`, clickedB)
btnReplay.addEventListener(`click`, replayNotes)
rngVol.addEventListener(`change`, updateVolume)