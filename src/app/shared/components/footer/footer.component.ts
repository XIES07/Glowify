import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  personalInfo = {
    location: 'La Ceja, Antioquia, Colombia',
    email: 'javsaz2009@gmail.com',
    phone: '+57 3137854717',
    gitHubUser: 'XIES07',
    linkedinUser: 'julian vargas',
    linkedin: 'https://www.linkedin.com/in/julian-vargas-8ab182260/',
    gitHub: 'https://github.com/XIES07',
  }

  constructor() { }

  ngOnInit() {
  }

}
