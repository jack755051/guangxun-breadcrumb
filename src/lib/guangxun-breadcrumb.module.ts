import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GuangxunBreadcrumbComponent } from './guangxun-breadcrumb.component';
import { BREADCRUMB_CONFIG } from './guangxun-breadcrumb.token';
import { BreadcrumbConfig } from './guangxun-breadcrumb.type';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule , GuangxunBreadcrumbComponent],
  exports: [GuangxunBreadcrumbComponent]
})
export class GuangxunBreadcrumbModule {
  static forRoot(config: BreadcrumbConfig): ModuleWithProviders<GuangxunBreadcrumbModule> {
    return {
      ngModule: GuangxunBreadcrumbModule,
      providers: [
        {
          provide: BREADCRUMB_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
