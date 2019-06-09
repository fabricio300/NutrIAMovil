import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages=[
    {
      title:'Dieta',
      icon: 'restaurant',
      url:'/menu/cont1'
    },
    {
      title:'historial de avance',
      icon: 'trending-up',
      url:'/menu/historial'
    },
    {
      title:'Peso actual',
      icon: 'stats',
      url:'/menu/peso'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
