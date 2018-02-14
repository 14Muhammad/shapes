import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-volume-problem-4',
  templateUrl: './volume-problem-4.component.html',
  styleUrls: ['./volume-problem-4.component.css']
})
export class VolumeProblem4Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: 'It has 2 times the volume',
      isCorrect: false
    },
    {
      text: 'It has 3 times the volume',
      isCorrect: false
    },
    {
      text: 'It has 4 times the volume',
      isCorrect: false
    },
    {
      text: 'It has 8 times the volume',
      isCorrect: true
    },
    {
      text: 'It has the same volume',
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
