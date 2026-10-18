import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT } from '../content';

@Component({
  selector: 'app-about',
  template: `
    <section class="section container about">
      <span class="eyebrow">{{ text.eyebrow }}</span>
      <h2 class="section-title">{{ text.title }}</h2>
      <p class="about__text">{{ text.text }}</p>
    </section>
  `,
  styles: `
    .about {
      display: grid;
      gap: 1.5rem 4rem;

      @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr;

        .eyebrow {
          grid-column: 1 / -1;
          margin-bottom: 0;
        }
      }
    }

    .about__text {
      color: var(--color-text-muted);
      font-size: 1.125rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly text = CONTENT.about;
}
