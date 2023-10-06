import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrls: ['./epk.component.css']
})
export class EPKComponent implements OnInit {

  ngOnInit() {
    $("[data-toggle=popover]").popover({html:true})
  }

}
