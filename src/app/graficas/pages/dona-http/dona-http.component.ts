import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };

  doughnutChartType: ChartType = 'doughnut';

  constructor(private socialNetService: GraficasService) { }

  ngOnInit(): void {
    this.socialNetService.getSocialNetData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: ['#027373', '#038C7F', '#A9D9D0', '#F2E7DC', '#A9F0B0'],
              hoverBackgroundColor: ['#128383', '#139C8F', '#B9E9E0', '#FFF7EC', '#B9FFC0'],
              hoverBorderColor: ['#006363', '#007C6F', '#99C9C0', '#E2D7CC', '#A9EFB0'],
            }
          ]
        }
      });
  }

}
