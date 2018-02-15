import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-surface-area-problem-7',
  templateUrl: './surface-area-problem-7.component.html',
  styleUrls: ['./surface-area-problem-7.component.css']
})
export class SurfaceAreaProblem7Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: 'Cube',
      isCorrect: false
    },
    {
      text: 'Sphere',
      isCorrect: true
    },
    {
      text: 'Cylinder',
      isCorrect: false
    },
    {
      text: 'All will cool down at same rate',
      isCorrect: false
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
