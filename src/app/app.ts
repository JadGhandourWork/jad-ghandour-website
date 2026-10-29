import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [RouterOutlet, MainPage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jad-ghandour-website');

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
        "github",
        sanitizer.bypassSecurityTrustResourceUrl("/assets/github.svg")
        );

        iconRegistry.addSvgIcon(
        "linkedin",
        sanitizer.bypassSecurityTrustResourceUrl("/assets/linkedin.svg")
        );
    }
}
