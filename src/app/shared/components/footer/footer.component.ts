import { Component } from '@angular/core';
import { PersonalInfo } from '../../../Data/personal-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  personalInfo = PersonalInfo

  constructor() { }

  ngOnInit() {
  }

}
