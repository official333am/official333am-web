import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  ngOnInit() {
    // $(document).scroll(function () {
    //   var $nav = $(".navbar");
    //   $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    // });
  }

}
