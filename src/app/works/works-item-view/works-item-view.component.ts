import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-works-item-view',
  templateUrl: './works-item-view.component.html',
  styleUrls: ['./works-item-view.component.scss']
})
export class WorksItemViewComponent implements OnInit, AfterViewInit {

  public slug: string;
  public projects$: Observable<Project[]>;
  public project$: Observable<Project>;
  public title$: Observable<string>;
  public shortDesc$: Observable<string>;
  public longDesc$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) {
    this.slug = this.route.snapshot.params.slug;
    this.projects$ = this.http.get<Project[]>('data/projects.json').pipe(
      map(res => res || []),
      map(res => res as Project[]),
      shareReplay()
    );
    this.project$ = this.projects$.pipe(
      map(res => res.find(e => e.slug === this.slug))
    );
    this.title$ = this.project$.pipe(
      map(res => res.title)
    );
    this.shortDesc$ = this.project$.pipe(
      map(res => res.shortDesc)
    );
    this.longDesc$ = this.project$.pipe(
      map(res => res.desc)
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const bannerTitle = document.getElementById('banner-title');
    bannerTitle.scrollIntoView();
  }

}
