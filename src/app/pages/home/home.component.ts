import { HomeService } from './services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.getGames().subscribe(data => {
  console.log(data);
    })
  }

}
