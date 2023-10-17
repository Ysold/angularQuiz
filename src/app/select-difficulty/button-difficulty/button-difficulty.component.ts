import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-difficulty',
  templateUrl: './button-difficulty.component.html',
  styleUrls: ['./button-difficulty.component.scss']
})
export class ButtonDifficultyComponent {

  constructor(private router: Router) { }

  navigateToQuestions(difficulty: string) {
    this.router.navigate(['/quiz'], { queryParams: { difficulty: difficulty } });
  }
}
