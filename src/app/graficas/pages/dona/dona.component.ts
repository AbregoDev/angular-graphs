import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut
  doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'other'];
  
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [50, 20, 10, 20],
        backgroundColor: ['#027373', '#038C7F', '#A9D9D0', '#F2E7DC'],
        hoverBackgroundColor: ['#128383', '#139C8F', '#B9E9E0', '#FFF7EC'],
        hoverBorderColor: ['#006363', '#007C6F', '#99C9C0', '#E2D7CC'],
      },
    ]
  };
  
  doughnutChartType: ChartType = 'doughnut';
}
