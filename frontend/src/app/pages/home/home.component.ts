import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { FALLBACK_HOMEPAGE_DATA } from '../../shared/homepage.fallback';
import { HomepageService } from '../../shared/homepage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly homepageService = inject(HomepageService);

  protected readonly data = toSignal(this.homepageService.getHomepageData(), {
    initialValue: FALLBACK_HOMEPAGE_DATA,
  });

  protected readonly featuredAnimals = computed(() => this.data().animals.slice(0, 3));
  protected readonly submitted = signal(false);
  protected readonly formData = {
    name: '',
    email: '',
    message: '',
  };

  protected onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.submitted.set(true);
    form.resetForm();
  }
}
