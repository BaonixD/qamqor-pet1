import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { catchError, of } from 'rxjs';

import { FALLBACK_HOMEPAGE_DATA } from './homepage.fallback';
import { Animal, HomepageData } from './homepage.types';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  getHomepageData() {
    if (!isPlatformBrowser(this.platformId)) {
      return of(FALLBACK_HOMEPAGE_DATA);
    }

    return this.http.get<HomepageData>('/api/home/').pipe(catchError(() => of(FALLBACK_HOMEPAGE_DATA)));
  }

  getAnimals() {
    if (!isPlatformBrowser(this.platformId)) {
      return of(FALLBACK_HOMEPAGE_DATA.animals);
    }

    return this.http.get<Animal[]>('/api/animals/').pipe(catchError(() => of(FALLBACK_HOMEPAGE_DATA.animals)));
  }
}
