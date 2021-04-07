import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigate(url: any){
    this.router.navigate([url], {relativeTo: this.route});

  }
}
