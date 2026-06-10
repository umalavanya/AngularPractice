import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntry } from "./expense-entry/expense-entry";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseEntry],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExpenseManager');
}
