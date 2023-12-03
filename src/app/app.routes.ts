import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { MyRequestsComponent } from './main-features/my-requests/my-requests.component';
import { MyClassesComponent } from './main-features/my-classes/my-classes.component';
import { LeaveComponent } from './main-features/leaves/leaves.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { SettingsComponent } from './main-features/settings/settings.component';


export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'my-requests', component: MyRequestsComponent},
    {path: 'my-classes', component: MyClassesComponent},
    {path: 'leaves', component: LeaveComponent},
    {path: 'leaves/:id/:name', component: LeaveDetailComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path : 'analytics', component: AnalyticsComponent},
    {
        path: 'settings',
        component: SettingsComponent,
      },
];
