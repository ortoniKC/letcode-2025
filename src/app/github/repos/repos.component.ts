import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GithubService } from '../../service/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repos',
  imports: [CommonModule],
  templateUrl: './repos.component.html',
})
export class ReposComponent implements OnInit, OnChanges {
  @Input()
  repoUrl!: string;
  repos: any = [];

  constructor(
    private gitService: GithubService,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.repoUrl) {
      this.gitService.getRepos(this.repoUrl).subscribe(
        (repo) => {
          this.repos = repo;
          this.changeRef.detectChanges();
        },
        (err) => {}
      );
    }
  }

  ngOnInit(): void {}
}
