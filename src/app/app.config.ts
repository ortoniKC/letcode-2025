import {
  ApplicationConfig,
  EnvironmentInjector,
  importProvidersFrom,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { JokeService } from './service/jokes.service';
import { AdsenseModule, AdsenseComponent } from 'ng2-adsense';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironment(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    JokeService,
    provideHttpClient(),
    importProvidersFrom(
      RouterModule,
      AdsenseModule.forRoot({
        adClient: 'ca-pub-6251538267574677',
        adSlot: '6753414644',
      })
    ),
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
