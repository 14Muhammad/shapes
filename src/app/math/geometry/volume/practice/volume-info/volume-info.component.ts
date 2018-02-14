import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-volume-info',
  templateUrl: './volume-info.component.html',
  styleUrls: ['./volume-info.component.css']
})
export class VolumeInfoComponent implements OnInit {
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
