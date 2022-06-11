import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDatasetProperties, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective | undefined;

  @Input()
  horizontal: boolean = false;

  @Input()
  barChartData: ChartData<'bar'> = {
    // labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#BF545D', hoverBackgroundColor: '#CF646D' },
      // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#609FA6', hoverBackgroundColor: '#70AFB6' },
      // { data: [25, 32, 49, 88, 36, 23, 40], label: 'Series C', backgroundColor: '#145946', hoverBackgroundColor: '#246956' },
    ]
  };

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  
  barChartType: ChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

}
