import { NgModule } from '@angular/core';
import { JonnyramenLibComponent } from './jonnyramen-lib.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomPageComponent } from './custom-page/custom-page.component';



@NgModule({
  declarations: [JonnyramenLibComponent, CustomCardComponent, CustomPageComponent],
  imports: [
  ],
  exports: [JonnyramenLibComponent]
})
export class JonnyramenLibModule { }
