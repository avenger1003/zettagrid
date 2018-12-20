import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { zettaUtils } from '../shared/zettaUtils';
import { AuthenticationService } from '../services/authentication.service';
import { AuthTokenInterceptor } from '../services/AuthTokenInterceptor';



// import { D3Service } from 'd3-ng2-service';


@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule],
  exports: [
    RouterModule,
    CommonModule,
    DecimalPipe,
    CurrencyPipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    zettaUtils, AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  declarations: [

  ]
})
export class AppSharedModule {
  constructor() {
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppSharedModule
    };
  }
}
