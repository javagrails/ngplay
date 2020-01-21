import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
