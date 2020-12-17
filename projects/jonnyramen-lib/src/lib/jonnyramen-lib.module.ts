import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { JonnyramenLibComponent } from './jonnyramen-lib.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { JonnyramenLibService } from './jonnyramen-lib.service';
export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [JonnyramenLibComponent, CustomCardComponent],
  imports: [CommonModule, HttpClientModule, IonicModule],
  exports: [JonnyramenLibComponent, CustomCardComponent],
})
export class JonnyramenLibModule {
  static forRoot(config: LibConfig): ModuleWithProviders<any> {
    return {
      ngModule: JonnyramenLibModule,
      providers: [
        JonnyramenLibService,
        {
          provide: LibConfigService,
          useValue: config,
        },
      ],
    };
  }
}
