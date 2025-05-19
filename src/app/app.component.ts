import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { LessonsComponent } from './lessons/lessons.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, FooterComponent, ExperienceComponent, LessonsComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'surfCamp';
}
