import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { JokeService } from './service/jokes.service';
import { AdsenseModule } from 'ng2-adsense';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MarkdownModule } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironment(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      MarkdownModule.forRoot(),
      AdsenseModule.forRoot({
        adClient: 'ca-pub-6251538267574677',
      })
    ),
    provideAnimationsAsync(),
  ],
};

function provideEnvironment(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: 'ENV',
      useValue: {
        production: true,
        firebaseConfig: {
          apiKey: 'AIzaSyA6GNjn5DzwmkfYISu2cD84HBfkstrlb7s',
          authDomain: 'play-letcode.firebaseapp.com',
          databaseURL: 'https://play-letcode.firebaseio.com',
          projectId: 'play-letcode',
          storageBucket: 'play-letcode.appspot.com',
          messagingSenderId: '329152186575',
          appId: '1:329152186575:web:ced65caa5001e68d808fba',
          measurementId: 'G-STHL8RV4RK',
        },
      },
    },
  ]);
}
