import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-problem-4',
  templateUrl: './problem-4.component.html',
  styleUrls: ['./problem-4.component.css']
})
export class Problem4Component implements OnInit {
  choice: string;
  showHint: boolean;
  isCorrect: boolean;
  options = [
    {
      text: 'True',
      isCorrect: true
    },
    {
      text: 'False',
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
