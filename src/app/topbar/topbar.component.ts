import { Component, OnInit, ElementRef} from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  faMapMarkerAlt=faMapMarkerAlt; faFacebook=faFacebook; faInstagram=faInstagram;
  isOpen = false;
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {}

  // checkIfNavDropDown() {
  //   console.log('checkIfNavDropDown')
  //   if (this.isOpen) {
  //     this.isOpen = false;
  //   }
  // }

  onMenu() {
    this.isOpen = !this.isOpen;
  }
}
