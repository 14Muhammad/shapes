import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-polygon-areas',
  templateUrl: './polygon-areas.component.html',
  styleUrls: ['./polygon-areas.component.css']
})
export class PolygonAreasComponent implements OnInit {
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
