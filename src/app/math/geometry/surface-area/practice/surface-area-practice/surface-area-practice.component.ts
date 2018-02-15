import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-surface-area-practice',
  templateUrl: './surface-area-practice.component.html',
  styleUrls: ['./surface-area-practice.component.css']
})
export class SurfaceAreaPracticeComponent implements OnInit {
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
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  goTO(path) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
