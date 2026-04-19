import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { FALLBACK_HOMEPAGE_DATA } from '../../shared/homepage.fallback';
import { HomepageService } from '../../shared/homepage.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  private readonly homepageService = inject(HomepageService);

  protected readonly animals = toSignal(this.homepageService.getAnimals(), {
    initialValue: FALLBACK_HOMEPAGE_DATA.animals,
  });
}
