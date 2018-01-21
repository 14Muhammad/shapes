import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-problem-1',
  templateUrl: './problem-1.component.html',
  styleUrls: ['./problem-1.component.css']
})
export class Problem1Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: 'A',
      isCorrect: false
    },
    {
      text: 'B',
      isCorrect: false
    },
    {
      text: 'They are equal',
      isCorrect: true
    }
  ];


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

  showResult(e) {
    e.source.radioGroup.disabled = true;
    for (let i = 0; i < this.options.length; i++) {
      if (this.choice === this.options[i].text && this.options[i].isCorrect) {
        this.isCorrect = true;
        break;
      } else {
        this.isCorrect = false;
      }
    }
  }

}
