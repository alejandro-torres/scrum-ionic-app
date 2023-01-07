import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.page.html',
  styleUrls: ['./artifacts.page.scss'],
})
export class ArtifactsPage implements OnInit {
  public folder !: string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
