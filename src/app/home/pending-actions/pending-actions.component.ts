import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pending-actions',
  templateUrl: './pending-actions.component.html',
  styleUrls: ['./pending-actions.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PendingActionsComponent implements OnInit {
  actions = [
    {
      icon: 'fa-regular fa-file-lines',
      title: 'Review Intake Form',
      subtitle: 'New patient inquiry',
    },
    {
      icon: 'fa-regular fa-hourglass',
      title: 'Follow Up on Tests',
      subtitle: 'Lab results pending',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
