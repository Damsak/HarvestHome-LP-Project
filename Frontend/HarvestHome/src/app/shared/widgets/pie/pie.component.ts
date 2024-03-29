import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions =  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Crops Market Share'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting: {
        enable: false
      },
      credits: {
        enable: true
      },
      series: [{
          name: 'Crops',
          colorByPoint: true,
          data: [{
              name: 'Chilli',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Salad Leaves',
              y: 11.84
          }, {
              name: 'Potatoes',
              y: 10.85
          }, {
              name: 'Peas',
              y: 4.67
          }, {
              name: 'onions',
              y: 4.18
          }, {
              name: 'Mango',
              y: 1.64
          }, {
              name: 'Coconut',
              y: 1.6
          }, {
              name: 'Banana',
              y: 1.2
          }, {
              name: 'Other',
              y: 2.61
          }]
      }]
  };

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
