import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT } from '../content';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">© {{ year }} {{ text.tagline }}</div>
    </footer>
  `,
  styles: `
    .footer {
      padding-block: 2rem;
      border-top: 1px solid var(--color-border);
      color: var(--color-text-muted);
      font-size: 0.875rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly text = CONTENT.footer;
  protected readonly year = new Date().getFullYear();
}
