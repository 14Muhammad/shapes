import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-area-problem-6',
  templateUrl: './area-problem-6.component.html',
  styleUrls: ['./area-problem-6.component.css']
})
export class AreaProblem6Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: 'Pink region',
      isCorrect: false
    },
    {
      text: 'Blue region',
      isCorrect: false
    },
    {
      text: 'Pink and blue have the same area',
      isCorrect: true
    }
  ];


  constructor(private router: Router, private route: ActivatedRoute) {
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
  goTO(path) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
