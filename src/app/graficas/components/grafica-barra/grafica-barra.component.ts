import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
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

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
        max: 100,
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#BF545D', hoverBackgroundColor: '#CF646D' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#609FA6', hoverBackgroundColor: '#70AFB6' },
      { data: [25, 32, 49, 88, 36, 23, 40], label: 'Series C', backgroundColor: '#145946', hoverBackgroundColor: '#246956' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
