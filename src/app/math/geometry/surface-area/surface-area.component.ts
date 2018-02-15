import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabNav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-surface-area',
  templateUrl: './surface-area.component.html',
  styleUrls: ['./surface-area.component.css']
})
export class SurfaceAreaComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  @ViewChild(MatTabNav) private tabs: MatTabNav;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'SurfaceArea practice',
        link: './practice',
        icon: 'info_outline',
        index: 0
      }, {
        label: 'SurfaceArea Problem 1',
        link: './problem-1',
        icon: 'star_border',
        index: 1
      }
      , {
        label: 'SurfaceArea Problem 2',
        link: './problem-2',
        icon: 'star_border',
        index: 2
      }
      , {
        label: 'SurfaceArea Problem 3',
        link: './problem-3',
        icon: 'star_border',
        index: 3
      }
      , {
        label: 'SurfaceArea Problem 4',
        link: './problem-4',
        icon: 'star_border',
        index: 4
      }
      , {
        label: 'SurfaceArea Problem 5',
        link: './problem-5',
        icon: 'star_border',
        index: 5
      }
      , {
        label: 'SurfaceArea Problem 6',
        link: './problem-6',
        icon: 'star_border',
        index: 6
      }
      , {
        label: 'SurfaceArea Problem 7',
        link: './problem-7',
        icon: 'star_border',
        index: 7
      }
      , {
        label: 'SurfaceArea Problem 8',
        link: './problem-8',
        icon: 'star_border',
        index: 8
      }
      , {
        label: 'SurfaceArea Problem 9',
        link: './problem-9',
        icon: 'star_border',
        index: 9
      }, {
        label: 'SurfaceArea Problem 10',
        link: './problem-10',
        icon: 'star_border',
        index: 10
      }, {
        label: 'SurfaceArea Problem 11',
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
  /*choice: string;
  showHint: boolean;
  selectedTab = 0;
  katexOptions = {
    displayMode: true,
    macros: {
      '\\RR': '\\mathbb{R}'
    }
  };
  equations = [{
    name: 'Cube',
    equation: '6s^2'
  }, {
    name: 'Prism',
    equation: '2lw + 2wh + 2lh'
  }, {
    name: 'Cylinder',
    equation: '2 \\pi r^2 + 2 \\pi rh'
  }];

  options = [
    {
      text: 'Stay the same',
      correctness: 100
    },
    {
      text: 'Increase',
      correctness: 0
    },
    {
      text: 'Decrease',
      correctness: 0
    }
  ];

  options2 = [
    {
      text: 'A',
      correctness: 0,
      isSelected: false
    },
    {
      text: 'B',
      correctness: 0,
      isSelected: false
    },
    {
      text: 'C',
      correctness: 100,
      isSelected: false
    },
    {
      text: 'D',
      correctness: 0,
      isSelected: false
    }
  ];

  isSelected = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleHint() {
    if (this.showHint) {
      this.showHint = false;
    } else {
      this.showHint = true;
    }
  }

  moveToNextTab() {
    this.selectedTab++;
  }

  tabChanged(e) {
    console.log('tab changed');
    console.log(e);
  }

  problem1Changed(e) {
    console.log('problem1Changed');
    console.log(e);
  }*/
}
