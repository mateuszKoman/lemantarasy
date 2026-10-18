import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  computed,
  input,
  model,
  output,
  viewChild,
} from '@angular/core';
import { CONTENT } from '../content';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lightbox {
  readonly photos = input.required<readonly string[]>();
  readonly index = model.required<number>();
  readonly closed = output<void>();

  protected readonly text = CONTENT.lightbox;

  protected readonly currentPhoto = computed(() => this.photos()[this.index()]);
  protected readonly hasMultiplePhotos = computed(() => this.photos().length > 1);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    afterNextRender(() => this.dialog().nativeElement.showModal());
  }

  protected show(step: number): void {
    const count = this.photos().length;
    this.index.update((index) => (index + step + count) % count);
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.show(-1);
    } else if (event.key === 'ArrowRight') {
      this.show(1);
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
