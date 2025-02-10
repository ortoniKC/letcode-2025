import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ortoni',
  imports: [CommonModule],
  templateUrl: './ortoni.component.html',
})
export class OrtoniComponent {
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
