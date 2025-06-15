import {Component, OnInit} from '@angular/core';
import {Breadcrumb} from './guangxun-breadcrumb.type';
import {GuangxunBreadcrumbService} from './guangxun-breadcrumb.service';
import {RouterLink, RouterModule} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-guangxun-breadcrumb',
  imports: [
    CommonModule, TranslateModule, RouterModule
  ],
  standalone: true,
  template: `
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li *ngFor="let i of breadcrumbs; let last = last" class="breadcrumb-item">
          <ng-container *ngIf="i.isClickable && !last; else noLink">
            <a [routerLink]="i.link">{{ i.label | translate }}</a>
          </ng-container>

          <ng-template #noLink>
            <span>{{ i.label | translate }}</span>
          </ng-template>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    .breadcrumb {
      list-style: none;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;

      > .breadcrumb-item {
        display: flex;
        align-items: center;

        &:not(:first-child)::before {
          content: '>';
          color: hsla(0, 0%, 90%, 1);
          margin-left: 1rem;
          margin-right: 1rem;
        }

        a {
          text-decoration: none;
          color: hsla(197, 6%, 56%, 1);
        }

        span {
          color: hsla(0, 0%, 90%, 1);
        }
      }
    }`
})
export class GuangxunBreadcrumbComponent implements OnInit{
  constructor(private _breadcrumbService: GuangxunBreadcrumbService) {}
  breadcrumbs: Breadcrumb[] = [];
  ngOnInit(): void {
    this._breadcrumbService.breadcrumbs$.subscribe((data) => {
      this.breadcrumbs = data;
    });
  }
}
