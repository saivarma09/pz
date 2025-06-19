import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { HealthAnalyticsComponent } from './health-analytics/health-analytics.component';
import { PatientFeedbackComponent } from './patient-feedback/patient-feedback.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PendingActionsComponent } from './pending-actions/pending-actions.component';
import { QuickStatsComponent } from './quick-stats/quick-stats.component';
import { RevenueAnalyticsComponent } from './revenue-analytics/revenue-analytics.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonIcon,
    ScheduleListComponent,
    QuickStatsComponent,
    PendingActionsComponent,
    ActivityFeedComponent,
    PatientSearchComponent,
    RevenueAnalyticsComponent,
    PatientFeedbackComponent,
    HealthAnalyticsComponent
  ],
})
export class HomePage {
  constructor() {}
}
