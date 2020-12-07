let notesPlayed = [] // An empty array (will hold our music)
let masterVolume = 0.5
let sfxFolder = `audio`

// Select all playable drum parts
let drumParts = document.querySelectorAll(`.playable`)
let btnReplay = document.querySelector(`#replay`)
let rngVol = document.querySelector(`#volume`)

// Runs once for each playable part of the drum kit
let makesItPlayable = function(part) {
  let theSfxFile = part.getAttribute(`data-sound`)
  let playTheSound = function() {
    let sound = new Audio(`${sfxFolder}/${theSfxFile}`)
    sound.volume = masterVolume
    sound.play()
    notesPlayed.push(sound)
  }
  part.addEventListener(`click`, playTheSound)
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


// For each of the parts, call makeItPlayable, passing the item reference
drumParts.forEach(makesItPlayable)
btnReplay.addEventListener(`click`, replayNotes)
rngVol.addEventListener(`change`, updateVolume)
