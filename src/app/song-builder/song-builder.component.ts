import { Component } from '@angular/core';
import { of, Subject, combineLatest, interval, timer } from 'rxjs';
import { map, take, startWith, mapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-song-builder',
  templateUrl: './song-builder.component.html',
  styleUrls: ['./song-builder.component.css']
})
export class SongBuilderComponent {
  public tempo!: String;
  public key!: any;
  public currentArtist!: String;
  public currentStep = 0;

  public commonInstruments!: any;


  public resetClock$ = new Subject();

  public getRandomTempo() {
    const max = 160;
    const min = 60

    this.tempo = Math.floor(Math.random() * (max - min) + min) + "";
  }

  public getRandomKey() {
    const commonChords = [
      { key: "C Major", ref: "https://www.piano-keyboard-guide.com/c-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=C&chord_type=major&asset_category_slug=loop" },
      { key: "D Major", ref: "https://www.piano-keyboard-guide.com/d-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=D&chord_type=major&asset_category_slug=loop" },
      { key: "E Major", ref: "https://www.piano-keyboard-guide.com/e-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=E&chord_type=major&asset_category_slug=loop" },
      { key: "F Major", ref: "https://www.piano-keyboard-guide.com/f-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=F&chord_type=major&asset_category_slug=loop" },
      { key: "G Major", ref: "https://www.piano-keyboard-guide.com/key-of-g.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=G&chord_type=major&asset_category_slug=loop" },
      { key: "A Major", ref: "https://www.piano-keyboard-guide.com/a-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=A&chord_type=major&asset_category_slug=loop" },
      { key: "Bb Major", ref: "https://www.piano-keyboard-guide.com/b-flat-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=Bb&chord_type=major&asset_category_slug=loop" },
      { key: "C# Major", ref: "https://www.piano-keyboard-guide.com/c-sharp-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=C%23&chord_type=major&asset_category_slug=loop" },
      { key: "D# Major", ref: "https://www.piano-keyboard-guide.com/e-flat-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=D%23&chord_type=major&asset_category_slug=loop" },
      { key: "Gb Major", ref: "https://www.piano-keyboard-guide.com/f-sharp-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=Gb&chord_type=major&asset_category_slug=loop" },
      { key: "Ab Major", ref: "https://www.piano-keyboard-guide.com/a-flat-major-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=Ab&chord_type=major&asset_category_slug=loop" },
      { key: "A Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-a-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=A&chord_type=minor&asset_category_slug=loop" },
      { key: "B Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-b-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=B&chord_type=minor&asset_category_slug=loop" },
      { key: "C# Natural Minor", ref: "https://www.piano-keyboard-guide.com/c-sharp-minor-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=C%23&chord_type=minor&asset_category_slug=loop" },
      { key: "D Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-d-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=D&chord_type=minor&asset_category_slug=loop" },
      { key: "E Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-e-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=E&chord_type=minor&asset_category_slug=loop" },
      { key: "F# Natural Minor", ref: "https://www.piano-keyboard-guide.com/f-sharp-minor-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=F%23&chord_type=minor&asset_category_slug=loop" },
      { key: "G Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-g-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=G&chord_type=minor&asset_category_slug=loop" },
      { key: "A# Natural Minor", ref: "https://www.piano-keyboard-guide.com/b-flat-minor-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=A%23&chord_type=minor&asset_category_slug=loop" },
      { key: "B# (or C) Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-c-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=C&chord_type=minor&asset_category_slug=loop" },
      { key: "E♭ Natural Minor", ref: "https://www.piano-keyboard-guide.com/e-flat-minor-scale.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=Eb&chord_type=minor&asset_category_slug=loop" },
      { key: "F Natural Minor", ref: "https://www.piano-keyboard-guide.com/key-of-f-minor.html", splice: "https://splice.com/sounds/search/samples/create?filepath=chords&key=F&chord_type=minor&asset_category_slug=loop" },
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
      "MAKE A HARMO CHOIR WITH YOUR VOICE AND RESAMPLE IT",
      "TALK BOX!!!!!"
    ]

    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    this.commonInstruments = ["RECORD REFERENCE SCATTER VOCAL", ...array];
  }

  public flipArtist() {
    if (!this.currentArtist) {
      const listOfArtist = ['BLASÉ', 'MIKEWAVE'];

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

  public previous(index: number): void {
    this.currentStep = this.currentStep - 1;
  }

  public next(index: number): void {
    this.currentStep = this.currentStep + 1;
  }

  public resetIndex(): void {
    this.currentStep = 0;
  }

  public get isCurrentStep(): number {
    return this.currentStep;
  }

  displayLogic$ = this.resetClock$.pipe(
    startWith([1, false]),
    switchMap(() => combineLatest([
      this.duration$,
      timer(0, 1000).pipe(
        take(4),
        map(time => time >= 3))
    ]))
  );

  get duration$() { return of(60000 * 7.5) };
  resetClock() {
    this.resetClock$.next(void 0);
  }

  getDing(event: Event) {
    console.log(event);
  }

  goToLink(key: any){
    window.open(key.ref, "_blank");

    window.open(key.splice + "&bpm=" + this.tempo, "_blank");
}
}
