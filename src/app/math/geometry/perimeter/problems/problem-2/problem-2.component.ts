import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-problem-2',
  templateUrl: './problem-2.component.html',
  styleUrls: ['./problem-2.component.css']
})
export class Problem2Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: '20',
      isCorrect: false
    },
    {
      text: '24',
      isCorrect: false
    },
    {
      text: '28',
      isCorrect: true
    },
    {
      text: '32',
      isCorrect: false
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
