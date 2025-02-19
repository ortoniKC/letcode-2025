import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-ortoni',
  imports: [CommonModule, AdsHorizontalComponent],
  templateUrl: './ortoni.component.html',
})
export class OrtoniComponent {
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
  code = `
  import { defineConfig } from "@playwright/test";
import { OrtoniReportConfig } from "ortoni-report";

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "always",
  folderPath: "report-db",
  filename: "index.html",
  title: "Ortoni Test Report",
  projectName: "Ortoni-Report",
  preferredTheme: "light"
};

export default defineConfig({
  reporter: [["ortoni-report", reportConfig]]
});
`;
}
