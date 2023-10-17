import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ButtonDifficultyComponent } from './select-difficulty/button-difficulty/button-difficulty.component';
import { ResultComponent } from "./quiz/result/result.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'quiz/:playerName',
    component : QuizComponent
  },
  {
    path: 'select-difficulty/:playerName',
    component : ButtonDifficultyComponent 
  },
  {
    path: 'result',
    component : ResultComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
