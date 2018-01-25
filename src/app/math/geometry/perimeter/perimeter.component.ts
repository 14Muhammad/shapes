import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTabNav} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.css']/*,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]*/
})
export class PerimeterComponent implements OnInit, AfterViewInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  @ViewChild(MatTabNav) private tabs: MatTabNav;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Practice',
        link: './practice',
        icon: 'info_outline',
        index: 0
      }, {
        label: 'Problem 1',
        link: './problem1',
        icon: 'star_border',
        index: 1
      }, {
        label: 'Problem 2',
        link: './problem2',
        icon: 'star_border',
        index: 2
      }, {
        label: 'Problem 3',
        link: './problem3',
        icon: 'star_border',
        index: 3
      }, {
        label: 'Problem 4',
        link: './problem4',
        icon: 'star_border',
        index: 4
      }, {
        label: 'Problem 5',
        link: './problem5',
        icon: 'star_border',
        index: 5
      }
      , {
        label: 'Problem 6',
        link: './problem6',
        icon: 'star_border',
        index: 6
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
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // mdInkBar has a nasty bug which makes it misaligned on load
    // https://github.com/angular/material2/issues/3133
    setTimeout(() => {
      this.tabs._activeLinkChanged = true;
      this.tabs.ngAfterContentChecked();
      console.log('setTimeout');
      console.log(this.tabs);
    }, 10);
  }

}
