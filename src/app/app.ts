import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Gallery } from './gallery/gallery';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Gallery, Contact, Footer],
  template: `
    <app-hero />
    <main>
      <app-about />
      <app-gallery />
      <app-contact />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
