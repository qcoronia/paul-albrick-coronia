import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-works-filter-section',
  templateUrl: './works-filter-section.component.html',
  styleUrls: ['./works-filter-section.component.scss']
})
export class WorksFilterSectionComponent implements OnInit {

  public tags: string[];
  public selectedTags: string[];

  @Output() public selectionChanged: EventEmitter<string[]>;

  constructor(private http: HttpClient) {
    this.tags = [] as string[];
    this.selectedTags = [] as string[];
    this.selectionChanged = new EventEmitter<string[]>();

    this.http.get<Project[]>('/data/projects.json').pipe(
      map(res => res || [] as Project[]),
      map(res => (res as Project[])
        .map(e => e.tags)
        .reduce((p, c) => [...p, ...c], [])),
      map(res => {
        const distinctTags = [];
        for (let index = 0; index < res.length; index++) {
          const tag = res[index];
          if (!distinctTags.includes(tag)) {
            distinctTags.push(tag);
          }
        }

        return distinctTags;
      }),
      tap(res => this.selectedTags = res),
      tap(res => this.selectionChanged.next(res))
    ).subscribe(res => this.tags = res);
  }

  ngOnInit() {
  }

  public isSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  public select(tag: string) {
    if (!this.isSelected(tag)) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(e => e !== tag);
    }

    this.selectionChanged.next(this.selectedTags);
  }
}
