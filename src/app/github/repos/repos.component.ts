import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from '../../service/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repos.component.html',
})
export class ReposComponent implements OnChanges {
  @Input() repoUrl!: string;
  repos: any[] = [];
  currentPage = 1;
  perPage = 10;

  constructor(private gitService: GithubService, private changeRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.repoUrl) {
      this.loadRepos(1);
    }
  }

  loadRepos(page: number) {
    if (page < 1) return;
    this.currentPage = page;
    this.gitService.getReposPaginated(this.repoUrl, page, this.perPage).subscribe({
      next: (repo) => {
        this.repos = repo;
        this.changeRef.detectChanges();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}