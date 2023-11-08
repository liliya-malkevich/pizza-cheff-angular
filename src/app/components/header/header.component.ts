import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showToggle = false;
  bigScreen = false;
  constructor() { }

  ngOnInit(): void {
    this.bigScreen = window.innerWidth > 768;
    window.addEventListener("resize", event => {
      this.bigScreen = window.innerWidth > 768;
    });
  }

  onToggle() {
    console.log(this.showToggle)
    this.showToggle = !this.showToggle;
  }
}
