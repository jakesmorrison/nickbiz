import { Component, OnInit } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  faMapMarker = faMapMarker;
  faInstagram = faInstagram;
  faFacebook = faFacebook
  constructor() { }

  ngOnInit(): void {
  }

}
