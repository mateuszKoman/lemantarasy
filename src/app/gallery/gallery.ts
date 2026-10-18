import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CONTENT } from '../content';
import { Lightbox } from '../lightbox/lightbox';
import { PROJECTS, Project } from '../projects';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage, Lightbox],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  protected readonly text = CONTENT.gallery;
  protected readonly projects = PROJECTS;
  protected readonly openProject = signal<Project | null>(null);
  protected readonly photoIndex = signal(0);

  protected open(project: Project, event: MouseEvent): void {
    event.preventDefault();
    this.photoIndex.set(0);
    this.openProject.set(project);
  }
}
