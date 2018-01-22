import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-surface-area',
  templateUrl: './surface-area.component.html',
  styleUrls: ['./surface-area.component.css']
})
export class SurfaceAreaComponent implements OnInit {
  choice: string;
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
  }
}
