import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
@Input() ngSwitch!: string;
  title = 'cms';
  selectedFeature: string = 'documents';
  switchView(feature: string) {
    this.selectedFeature = feature;
  }
}
