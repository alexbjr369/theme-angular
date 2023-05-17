import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  badgeColor = 'primary';
  cardColor = '';

  ngOnInit(): void {
    setTimeout(() => {
      // this.badgeColor = '';
      this.badgeColor = 'secondary';

      this.cardColor = 'primary';
    }, 3000);
  }

}
