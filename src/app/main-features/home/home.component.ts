import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  public series: any[] = [
    {
      name: 'Request',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 68, 78, 23],
      number:13,
    },
    {
      name: 'Attendance',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 92, 88],
      number:20,
    }
  ];

  public chart: any = {
    type: 'bar',
    height: 350
  };

  public title: any = {
    text: '',
    align: 'left'
  };

  public chartOptions: any = {
    series: [33.3, 33.3, 33.3],
    colors: ['#008FFB', '#00E396', '#FEB019'],
    tooltip: {
      fillSeriesColor: true,
    },
    chart:{
      type: 'donut',
    },
    // labels: ['Pending', 'Approved', 'Rejected'],
    plotOptions:{
      pie: {
        donut: {
          labels: {
            show: true,
            name: 'eits',
          },
        }
      }
    },
    responsive:[
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
}

  
  


