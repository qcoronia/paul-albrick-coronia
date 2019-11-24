import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {

  public projects$: Observable<Project[]>;

  public project_desc = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';

  constructor(private http: HttpClient) {
    this.projects$ = this.http.get<Project[]>('data/projects.json').pipe(
      map(res => res || []),
      map(res => res as Project[]),
      shareReplay()
    );
  }

  ngOnInit() {
  }

}
