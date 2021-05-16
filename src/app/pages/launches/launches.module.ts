import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSelectModule } from 'ng-zorro-antd/select'; 
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { SpaceCardComponent } from 'src/app/components/space-card/space-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchDetailsComponent,
    SpaceCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LaunchesRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDatePickerModule,
    NzBadgeModule,
    NzCardModule,
    NzAvatarModule,
    NzSelectModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzGridModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzDropDownModule,
    NzImageModule,
    NzToolTipModule,
    NzTagModule,
    NzListModule,
    NzCarouselModule,
    NzDividerModule,
    NzEmptyModule
  ]
})
export class LaunchesModule { }
