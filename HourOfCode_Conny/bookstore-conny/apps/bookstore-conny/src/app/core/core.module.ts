import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as generated from './services/api/SwaggerWebAPI';
import { ConfigService } from './services/config.service';
import { ShallnotpassComponent } from './components/shallnotpass/shallnotpass.component';
import { GenrePipe } from './pipes/genre.pipe';

export const value = 'http://172.22.51.114:5000';
@NgModule({
  declarations: [ShallnotpassComponent, GenrePipe],
  imports: [
    CommonModule,
  ],
  providers: [
    {
      provide: generated.API_BASE_URL,
      useFactory: provideApiUrl,
      deps: [ConfigService]
    },
    generated.Service
  ],
  exports: [GenrePipe]
})
export class CoreModule { }


export function provideApiUrl(configService: ConfigService): string {
  return configService
      .getApiUrl();
}
