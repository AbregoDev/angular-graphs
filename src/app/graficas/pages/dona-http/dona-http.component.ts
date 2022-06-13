import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private socialNetService: GraficasService) { }

  ngOnInit(): void {
    this.socialNetService.getSocialNetData()
      .subscribe((data) => {
        console.log(data);
      })
  }

}
