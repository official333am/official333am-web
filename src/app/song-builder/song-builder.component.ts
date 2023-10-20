import { Component } from '@angular/core';

@Component({
  selector: 'app-song-builder',
  templateUrl: './song-builder.component.html',
  styleUrls: ['./song-builder.component.css']
})
export class SongBuilderComponent {
  public tempo!: String;
  public key!: String;
  public currentArtist!: String;

  public commonInstruments!: any;

  public getRandomTempo() {
    const max = 160;
    const min = 60

    this.tempo = Math.floor(Math.random() * (max - min) + min) + 'bpm';
  }

  public getRandomKey() {
    const commonChords = [
      "C Major",
      "D Major",
      "E Major",
      "F Major",
      "G Major",
      "A Major",
      "Bb Major",
      "C# Major",
      "D# Major",
      "Gb Major",
      "Ab Major",
      "Bb Major",
      "A Natural Minor",
      "B Natural Minor",
      "C# Natural Minor",
      "D Natural Minor",
      "E Natural Minor",
      "F# Natural Minor",
      "G Natural Minor",
      "A# Natural Minor",
      "B# (or C) Natural Minor",
      "E♭ Natural Minor",
      "F Natural Minor",
      "G Natural Minor"
    ]

    const randomKey = commonChords[Math.floor(Math.random() * commonChords.length)];

    this.key = randomKey;
  }

  public shuffleArray() {
    const array = [
      "DRUMS: KICK/SNARE/CLAP",
      "DRUMS: HATS/CYMBALS",
      "DRUMS: PERCS",
      "GUITAR: ACOUSTIC (RYTHYM)",
      "GUITAR: ELECTRIC (RYTHYM)",
      "GUITAR: ACOUSTIC (LEAD)",
      "GUITAR: ELECTRIC (LEAD)",
      "BASS",
      "808",
      "SYNTH",
      "RHODES/ORGAN",
      "VOCODER",
      "PAD",
      "VINTAGE SAMPLE",
      "PIANO",
      "STRINGS",
      "VOCAL SAMPLE",
      "FLIP A RANDOM SAMPLE OF YOU TALKING",
      "MAKE A HARMO CHOIR WITH YOUR VOICE AND RESAMPLE IT"
    ]

    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   this.commonInstruments = array;
 }

  public flipArtist() {
    if (!this.currentArtist) {
      const listOfArtist = ['BLASÉ','MIKEWAVE'];

      var m = listOfArtist.length, t, i;
  
      while (m) {    
      i = Math.floor(Math.random() * m--);
      t = listOfArtist[m];
      listOfArtist[m] = listOfArtist[i];
      listOfArtist[i] = t;
      }
  
      this.currentArtist = listOfArtist[0];
    }
    else if (this.currentArtist === 'BLASÉ') {
      this.currentArtist = 'MIKEWAVE'
    } else {
      this.currentArtist = 'BLASÉ'
    }


    return this.currentArtist;
  }

}
