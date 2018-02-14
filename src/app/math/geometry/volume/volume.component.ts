import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabNav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  @ViewChild(MatTabNav) private tabs: MatTabNav;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Volume practice',
        link: './practice',
        icon: 'info_outline',
        index: 0
      }, {
        label: 'Volume Problem 1',
        link: './problem-1',
        icon: 'star_border',
        index: 1
      }
      , {
        label: 'Volume Problem 2',
        link: './problem-2',
        icon: 'star_border',
        index: 2
      }
      , {
        label: 'Volume Problem 3',
        link: './problem-3',
        icon: 'star_border',
        index: 3
      }
      , {
        label: 'Volume Problem 4',
        link: './problem-4',
        icon: 'star_border',
        index: 4
      }
      , {
        label: 'Volume Problem 5',
        link: './problem-5',
        icon: 'star_border',
        index: 5
      }
      , {
        label: 'Volume Problem 6',
        link: './problem-6',
        icon: 'star_border',
        index: 6
      }
      , {
        label: 'Volume Problem 7',
        link: './problem-7',
        icon: 'star_border',
        index: 7
      }
      , {
        label: 'Volume Problem 8',
        link: './problem-8',
        icon: 'star_border',
        index: 8
      }
      , {
        label: 'Volume Problem 9',
        link: './problem-9',
        icon: 'star_border',
        index: 9
      }, {
        label: 'Volume Problem 10',
        link: './problem-10',
        icon: 'star_border',
        index: 10
      }, {
        label: 'Volume Problem 11',
        link: './problem-11',
        icon: 'star_border',
        index: 11
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
