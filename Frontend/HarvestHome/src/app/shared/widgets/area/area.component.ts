import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  constructor() { }
  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions =   {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average Crops Planted during one week'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Fruit units'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      credits: {
          enabled: false
      },
      exporting: {
        enabled:true
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
      }]
  }
  HC_exporting(Highcharts);

  //chart are not responsive
  //so trigger a new for the charts to readopt 
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
 
}


}
