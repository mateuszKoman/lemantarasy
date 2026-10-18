import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT } from '../content';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly text = CONTENT.contact;
  protected readonly phone = '504-096-411';
  protected readonly phoneHref = 'tel:+48504096411';
  protected readonly email = 'leman.tarasy@gmail.com';
  protected readonly emailParts = this.email.split('@');
}
