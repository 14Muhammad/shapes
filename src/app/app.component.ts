import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidebarItems = [
    {
      name: 'Area',
      icon: 'filter_b_and_w',
      route: 'area',
      class: 'list-group-item'
    }, {
      name: 'Perimeter',
      icon: 'signal_cellular_null',
      route: 'perimeter',
      class: 'list-group-item'
    },
    {
      name: 'Surface Area',
      icon: '3d_rotation',
      route: 'surface-area',
      class: 'list-group-item'
    },
    {
      name: 'Volume',
      icon: 'format_color_fill',
      route: 'volume',
      class: 'list-group-item'
    }];
  reason = '';


  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(private router: Router) {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
