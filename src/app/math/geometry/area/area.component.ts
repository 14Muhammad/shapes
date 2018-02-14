import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabNav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  @ViewChild(MatTabNav) private tabs: MatTabNav;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Polygon Areas',
        link: './polygon-areas',
        icon: 'info_outline',
        index: 0
      }, {
        label: 'Area Problem 1',
        link: './area-problem-1',
        icon: 'star_border',
        index: 1
      }
    , {
        label: 'Area Problem 2',
        link: './area-problem-2',
        icon: 'star_border',
        index: 2
      }
    , {
        label: 'Area Problem 3',
        link: './area-problem-3',
        icon: 'star_border',
        index: 3
      }
    , {
        label: 'Area Problem 4',
        link: './area-problem-4',
        icon: 'star_border',
        index: 4
      }
    , {
        label: 'Area Problem 5',
        link: './area-problem-5',
        icon: 'star_border',
        index: 5
      }
    , {
        label: 'Area Problem 6',
        link: './area-problem-6',
        icon: 'star_border',
        index: 6
      }
    , {
        label: 'Area Problem 7',
        link: './area-problem-7',
        icon: 'star_border',
        index: 7
      }
    , {
        label: 'Area Problem 8',
        link: './area-problem-8',
        icon: 'star_border',
        index: 8
      }
    , {
        label: 'Area Problem 9',
        link: './area-problem-9',
        icon: 'star_border',
        index: 9
      }
    ];
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.activeLinkIndex = 0;
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
