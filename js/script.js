let notesPlayed = [] // An empty array (will hold our music notes)
let masterVolume = 0.5 // Default volume
let sfxFolder = `audio` // Folder that all the audio clips are in

let drumParts = document.querySelectorAll(`.playable`) // Select all playable drum parts
let btnReplay = document.querySelector(`#replay`) // Button
let btnNewsong = document.querySelector(`#newsong`) // Button
let rngVol = document.querySelector(`#volume`) // Volume

// Runs once for each playable part of the drum kit
let makesItPlayable = function(part) {
  
  // When we click on the playable drum part
  let playTheSound = function() {
    // Get the sound file url
    let theSfxFile = part.getAttribute(`data-sound`)

    // Creates the new audio clip
    let sound = new Audio(`${sfxFolder}/${theSfxFile}`) // Load the clip from a url
    sound.volume = masterVolume // Set the volume
    sound.play() // play it once

    // Store it in the song history array
    notesPlayed.push(sound)
  }
  part.addEventListener(`click`, playTheSound)
}

// "Replay" button was pressed...
let replayNotes = function() {

  // If there is no instrument history
  if (notesPlayed.length === 0) {
    console.log(`There's no song to play!`)
    return // leave immediately
  }

  let index = 0  // counter
  
  // Call this on a time delay, once for each note (like forEach, but slower)
	let playOneNote = function() {
    let note = notesPlayed[index] // The note saved in the Array
    
		note.volume = masterVolume // Set the volume
    note.play() // Play the audio for the note

    index = index + 1 // Increase the counter for next time

    // Only if there are still notes to play...
    if (index < notesPlayed.length) {
      // Figure out what delay is required (default is 500ms)
      let speed = document.querySelector(`#speed`).value  //
      // Play a function at a Xms delay
      setTimeout(playOneNote, speed) // Loop this function again, in Xms
    }
  }

  playOneNote() // just like a forEach, except it's timed. This kicks off a loop of the function above
	//notesPlayed.forEach(playOneNote)  // Would play all the sounds immediately (overlapping!)
}

let clearNotes = function() {
  // Reset the history by assining a new empty array
  notesPlayed = []
}

let updateVolume = function() {
  // Change the master volume when the slider changes
  masterVolume = rngVol.value
}

// For each of the parts, call makeItPlayable, passing the item reference
drumParts.forEach(makesItPlayable)
btnReplay.addEventListener(`click`, replayNotes) // Replay button
btnNewsong.addEventListener(`click`, clearNotes) // Clear button
rngVol.addEventListener(`change`, updateVolume) // Volume slide was updated
