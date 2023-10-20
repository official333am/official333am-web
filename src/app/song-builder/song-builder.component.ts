import { Component } from '@angular/core';

@Component({
  selector: 'app-song-builder',
  templateUrl: './song-builder.component.html',
  styleUrls: ['./song-builder.component.css']
})
export class SongBuilderComponent {
  public tempo!: String;
  public key!: String;
  public currentArtist = ['BLASÉ','MIKEWAVE'][Math.floor(Math.random() * 2)];

  public commonInstruments!: any;

  public getRandomTempo() {
    const max = 160;
    const min = 60

    this.tempo = Math.floor(Math.random() * (max - min) + min) + 'bpm';
  }

  public getRandomKey() {
    const commonChords = [
      "C Major / A Natural Minor",
      "D Major / B Natural Minor",
      "E Major / C# Natural Minor",
      "F Major / D Natural Minor",
      "G Major / E Natural Minor",
      "A Major / F# Natural Minor",
      "Bb Major / G Natural Minor",
      "C# Major / A# Natural Minor",
      "D# Major / B# (or C) Natural Minor",
      "Gb Major / E♭ Natural Minor",
      "Ab Major / F Natural Minor",
      "Bb Major / G Natural Minor"
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
    if (this.currentArtist === 'BLASÉ') {
      this.currentArtist = 'MIKEWAVE'
    } else {
      this.currentArtist = 'BLASÉ'
    }


    return this.currentArtist;
  }

}
