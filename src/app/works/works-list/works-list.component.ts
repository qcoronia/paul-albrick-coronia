import { Component, OnInit, Output, ContentChild } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';
import { HttpClient } from '@angular/common/http';
import { WorksFilterSectionComponent } from '../works-filter-section/works-filter-section.component';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {

  @ContentChild('app-works-filter-section', { static: false })
  public filterComponent: WorksFilterSectionComponent;

  public projects$: Observable<Project[]>;
  public selectedProjects$: BehaviorSubject<Project[]>;

  public project_desc = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';

  constructor(private http: HttpClient) {
    this.selectedProjects$ = new BehaviorSubject<Project[]>([]);
    this.projects$ = this.http.get<Project[]>('data/projects.json').pipe(
      map(res => res || []),
      map(res => res as Project[]),
      shareReplay(),
      tap(res => this.selectedProjects$.next(res))
    );
  }

  ngOnInit() {
  }

  public isSelected(project: Project) {
    for (const tag of project.tags) {
      if (!this.filterComponent) {
        return false;
      }

      if (this.filterComponent.selectedTags.includes(tag)) {
        return true;
      }
    }

    return false;
  }

  public selectionChanged(selectedTags: string[]) {
    this.projects$.pipe(
      map(projects => projects.filter(project => {
        return project.tags.some(tag => selectedTags.includes(tag));
      })),
    ).subscribe(selectedProjects => this.selectedProjects$.next(selectedProjects));
  }

  public getProjectIcon(slug: string) {
    return `/assets/img/projects/icons/${slug}-icon.png`;
  }

  public getProjectFeatureBanner(slug: string) {
    return `/assets/img/projects/feature-banners/${slug}-feature-banner.png`;
  }
}
