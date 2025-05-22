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

interface Repo {
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  [key: string]: any;
}


@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repos.component.html',
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl!: string;
  repos: any[] = [];
  paginatedRepos: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(
    private gitService: GithubService,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  if (this.repoUrl) {
    this.gitService.getRepos(this.repoUrl).subscribe({
      next: (repo: any[]) => {
        this.repos = repo;
        this.setPage(1); // optional for pagination
        this.changeRef.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching repos:', err);
      },
    });
  }
}

  ngOnInit(): void {}

  setPage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedRepos = this.repos.slice(start, end);
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.repos.length / this.itemsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }
}