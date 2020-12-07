import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {Services} from '../../app.services';
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
public data: any;
  public ze: number[]=[];
  public zee: string[] =[];
public salesChart;
public clicked: boolean = true;
public clicked1: boolean = false;
  stat$ : { [key: number]: string }  ={22 :"Tunis" , 15:"Gabes"};



  constructor(private Service: Services ) { }
aa: any = {
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value) {
                if (!(value % 10)) {
                  //return '$' + value + 'k'
                  return value;
                }
              }
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: function(item, data) {
            var label = data.datasets[item.datasetIndex].label || "";
            var yLabel = item.yLabel;
            var content = "";
            if (data.datasets.length > 1) {
              content += label;
            }
            content += yLabel;
            return content;
          }
        }
      }
    },
    data: {

      labels: ["kk","oo","bbb"],
      datasets: [
        {

          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,25,25,25],
        }
      ]
    }
  }
  plan_urgents(){
    this.Service.getStoreFixe_sata().subscribe( Plan => this.stat$ = Plan);
    // tslint:disable-next-line:forin

   // {alert(Object.keys(this.stat$ ))}
   // {alert(Object.values(this.stat$ ))}
    let i =0;



   this.aa.data.labels=Object.keys(this.stat$ );

    this.aa.data.datasets.data=Object.values(this.stat$ );

    var chartOrders = document.getElementById('chart-orders');


    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: this.aa.options ,
      data: this.aa.data ,
    });

  }
  ngOnInit() {
    this.Service.loca().subscribe(product => this.p = product);
    this.Service.getStoreFixe_sata().subscribe( Plan => this.stat$ = Plan);
   // alert("debart")


    setTimeout(() => {
      this.plan_urgents();
    }, 2000);
    this.plan_urgents();

    var chartOrders = document.getElementById('chart-orders');


    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: this.aa.options ,
      data: this.aa.data ,
    });

  }
  p:any;
  loca(){ this.Service.loca().subscribe(po => this.p = po); alert(this.p) }
}
