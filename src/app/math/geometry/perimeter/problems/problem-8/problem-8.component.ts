import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-problem-8',
  templateUrl: './problem-8.component.html',
  styleUrls: ['./problem-8.component.css']
})
export class Problem8Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  katexOptions = {
    displayMode: true,
    macros: {
      '\\RR': '\\mathbb{R}'
    }
  };
  options = [
    {
      text: 'Equilateral Triangle',
      isCorrect: true
    },
    {
      text: 'Circle',
      isCorrect: false
    },
    {
      text: 'Square',
      isCorrect: false
    },
    {
      text: 'They have equal perimeters',
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
