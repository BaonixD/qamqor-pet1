import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { FALLBACK_HOMEPAGE_DATA } from '../../shared/homepage.fallback';
import { HomepageService } from '../../shared/homepage.service';
import { Animal } from '../../shared/homepage.types';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  private readonly homepageService = inject(HomepageService);

  protected readonly animals = toSignal(this.homepageService.getAnimals(), {
    initialValue: FALLBACK_HOMEPAGE_DATA.animals,
  });

  protected readonly homepageData = toSignal(this.homepageService.getHomepageData(), {
    initialValue: FALLBACK_HOMEPAGE_DATA,
  });

  protected readonly activeFilter = signal<string>('all');

  protected readonly filteredAnimals = computed(() => {
    const filter = this.activeFilter();
    const all = this.animals();
    if (filter === 'all') return all;
    return all.filter(a => a.kind === filter);
  });

  protected readonly uniqueKinds = computed(() => {
    const kinds = [...new Set(this.animals().map(a => a.kind))];
    return kinds;
  });

  // Modal state
  protected readonly selectedAnimal = signal<Animal | null>(null);
  protected readonly showModal = signal(false);

  // Toast state
  protected readonly showToast = signal(false);

  // Form fields
  protected formName = '';
  protected formPhone = '';
  protected formSubmitted = false;

  protected setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  protected openAdoptModal(animal: Animal) {
    this.selectedAnimal.set(animal);
    this.formName = '';
    this.formPhone = '';
    this.formSubmitted = false;
    this.showModal.set(true);
  }

  protected closeModal() {
    this.showModal.set(false);
    this.selectedAnimal.set(null);
  }

  protected submitForm() {
    this.formSubmitted = true;
    if (!this.formName.trim() || !this.formPhone.trim()) return;

    this.showModal.set(false);
    this.selectedAnimal.set(null);
    this.showToast.set(true);

    setTimeout(() => this.showToast.set(false), 6000);
  }

  protected get address(): string {
    return this.homepageData().contact?.address ?? FALLBACK_HOMEPAGE_DATA.contact.address;
  }
}
