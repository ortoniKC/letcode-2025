import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

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
