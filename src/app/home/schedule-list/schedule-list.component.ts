import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ScheduleListComponent implements OnInit {
  schedule = [
    {
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5853v0sJzenWuNQcfuLts1rJgrVjstV61vo_FqKk7RG04KJeOykb8dog7bwtvrklVfxfhuZUfVvo_NRFqSUMX3ri6xZWPgfCYVoS-YS6WgmlwKANaAsivdkb2Zxbtn1L0Ki_eCkvernCBCm0Xx3zzHJtS5JsjFTd48zd06-b8roe_xU1cpcR3AwwsbZpDuK4t5UGt-Gsi0lpi4HBQE54kch55FhkUiCs7K6lG29QLwPsxZhNAbhX5EDXiBgPEP8ymUGm2FTUqZJc',
      title: 'Patient Consultation: Chloe',
      time: '10:00 AM - 11:00 AM',
    },
    {
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1gCr1Xj3iMEnZGaGbY-K2mJbNpKJqYz7XuKfnMBgo9ws6IXL3K6JKOB9-lt8M-V4joXaAnCVzrDAY8iYi6WbpNsbNARhR1j2HXOZWb3Ri6qoavJeBTJulGGdUrDBF13xzIYXsioR3iJGYeAIdIOZCoLfCTo4lzTNse8AXQ7GUZ28rSrFnMOJ0o5XQR0HUkEQ1uLsyiScamH4qFqLxEBe4l2IgxnfCRdElNWLMifBir4nUvN457PX6eXA1h0rPucftlkxkju-U2oE',
      title: 'Follow-up Appointment: Noah',
      time: '11:30 AM - 12:30 PM',
    },
    {
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEg2JEWqzmKhnHCvqoWQA4UBSqhCwwifZl4i8yUmRazt2NSzda3ViL4S1E1x2cnO1jGpu8fXrunmmuCcWdkiAAdMzknUkcecvCR0AAQl0xjEou0O42YQG6IgunQmq9nUwsrCwOJXPfR6IvPkfIEiC6IkJDk3J8-Hql2-tSJAAJp4WAkr0kKmTVS_b9xG0FTSs5zpLXEOSxxRs2UBqooODfxPYR3uOPIHZb8bt3C29rHOIaq0NQWnpDrfAqbK77GiamUWev-XaTOY',
      title: 'New Patient Intake: Sophia',
      time: '02:00 PM - 03:00 PM',
    },
    {
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwloZ4XPpquCIZoxrZwv-pJl8EnJrdT63j_-O5dGWRLt8FvuXiER1mwtD_eP86-2vQHatqBV5kEpwUxwQxfGX7R6TP20_Xmd5xU0DvKUhGr1odkjojhQW0_nYf6pBGDzMwHRsqUAIumLmzWsxERMravuNAZZw-MsKWIjXrN9wNGa9BWldFFUZPFZPrIp9esNXiimUfT5Iyi_xtbMXGK9v9CrfXdvzzjJapIr9f03q34t8szEt41H_INCr6d7HOkqKvQAo_3BQdNdU',
      title: 'Routine Check-up: Ethan',
      time: '03:30 PM - 04:30 PM',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
