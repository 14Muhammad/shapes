import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.css']
})
export class PerimeterComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Problem 1',
        link: './problem1',
        index: 0
      }, {
        label: 'Problem 2',
        link: './problem2',
        index: 1
      }, {
        label: 'Problem 3',
        link: './problem3',
        index: 2
      }, {
        label: 'Problem 4',
        link: './problem4',
        index: 3
      }, {
        label: 'Problem 5',
        link: './problem5',
        index: 4
      }
      , {
        label: 'Problem 6',
        link: './problem6',
        index: 5
      }
      /*, {
          label: 'Problem 7',
          link: './problem7',
          index: 6
        }
      , {
          label: 'Problem 8',
          link: './problem8',
          index: 7
        }
      , {
          label: 'Problem 9',
          link: './problem9',
          index: 8
        }*/
    ];
  }

  ngOnInit() {
    this.activeLinkIndex = 0;
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
