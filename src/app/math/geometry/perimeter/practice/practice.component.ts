import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  katexOptions = {
    displayMode: true,
    macros: {
      '\\RR': '\\mathbb{R}'
    }
  };
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  goTO(path) {
    this.router.navigate([path], { relativeTo: this.route });
  }
}
