import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../variables/charts';
import {Planning} from '../../Planning.model';
import {Services} from '../../app.services';
import * as $ from 'jquery';
import {Store_Mobile} from '../../Store_Mobile.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  constructor(private Service: Services ) { }

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;




  Planning$: Planning[] ;
  Planningur$: Planning[] ;
  Plannings$: Planning ;
  Store_Mobile$: Store_Mobile[] ;
  stat$ : { [key: number]: string };
stat1$ :{ [key: number]: string };
  id: Number ;
   city: String ;
   street: String ;
  description: String ;
   name: String ;
  program_object:  String;
   date_Begin:  Date;
   date_Ending:  Date ;
  mobile_stores:  Store_Mobile;

 na: String = null;
  a: String = null;
  pll: String = null;
  p: any;
  idDelete = 0;
   i: number;



  name_store: String ;
  email: String ;
  phone: number ;
  service: String ;
  picture: String;
  valid:  String;
oo: String;
plan_urgent = 0  ;


  showUpdateModule(Pla) {
    this.city = Pla.city ;
    this.street = Pla.street ;
    this.name = Pla.name ;
    this.description = Pla.description ;
    this.program_object = Pla.program_object ;
    this.date_Begin = Pla.date_Begin ;
    this.date_Ending = Pla.date_Ending ;
    this.mobile_stores = Pla.mobile_stores ;
    this.id = Pla.id;
    this.na = Pla.mobile_stores.name_store;
    this.pll = Pla.mobile_stores.name_store;
    this.oo = Pla.mobile_stores.picture;
  }

  ngOnInit() {

    this.Service.getStoreMobile().subscribe( Mobile_S => this.Store_Mobile$ = Mobile_S);
     this.Service.getPlannig().subscribe( Pla => this.Planning$ = Pla);
     this.Service.getPlannigurgent().subscribe( Plan => this.Planningur$ = Plan);
    this.Service.getStoreFixe_sata().subscribe( Plan => this.stat$ = Plan);






    setTimeout(() => {
      this.plan_urgents();
    }, 3000);
    this.plan_urgents();


    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    let chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    let ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    let chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }
  plan_urgents() {
    // tslint:disable-next-line:max-line-length
    let i;
this.plan_urgent = 0;
    for (i = 0 ; i < this.Planningur$.length; i++) {

       if (this.Planningur$[i].street != ''     ) { this.plan_urgent = this.plan_urgent + 1 ;  }

    }




  }

aa()
{
  let i;

  for (i = 0 ; i < this.Store_Mobile$.length; i++) {

    if (this.pll === this.Store_Mobile$[i].name_store)
    {this.mobile_stores = this.Store_Mobile$[i] ; this.oo=this.Store_Mobile$[i].picture}
    else   {  this.mobile_stores = null  ; }

  }
}




  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  s:any=0;
  addPlannig(p ) {
    let i;

    for (i = 0 ; i < this.Store_Mobile$.length; i++) {

      if (this.pll === this.Store_Mobile$[i].name_store)
      {this.mobile_stores = this.Store_Mobile$[i] ; alert(this.mobile_stores.service);  alert(i) ; this.s=i;}
      else   {  this.mobile_stores = null  ; }

    }

    alert(this.s);
    // tslint:disable-next-line:max-line-length
    this.p = {  city: this.city ,
      street: this.street,
      description: this.description,
      name: this.name,
      program_object: this.program_object ,
      date_Begin: this.date_Begin ,
      date_Ending: this.date_Ending ,
      mobile_stores: this.mobile_stores = this.Store_Mobile$[this.s]

    };
alert(this.Store_Mobile$[this.s].email);
    this.Service.addPlannig(this.p).subscribe(pl => this.Plannings$ = pl);

    setTimeout(() => {
      this.ngOnInit();
    }, 3000);
  }



  editPlannig(p) {
    // tslint:disable-next-line:max-line-length
    let i;
    for (i = 0 ; i < this.Store_Mobile$.length; i++) {

      if (this.pll === this.Store_Mobile$[i].name_store)
      {this.mobile_stores = this.Store_Mobile$[i] ; alert(this.mobile_stores.service);  alert(i) ; this.s=i;}
      else   {  this.mobile_stores = null  ; }

    }

    alert(this.s);
    // tslint:disable-next-line:max-line-length
    this.p = { id:this.id,
      city: this.city ,
      street: this.street,
      description: this.description,
      name: this.name,
      program_object: this.program_object ,
      date_Begin: this.date_Begin ,
      date_Ending: this.date_Ending ,
      mobile_stores: this.mobile_stores = this.Store_Mobile$[this.s]

    };
    alert(this.Store_Mobile$[this.s].email);

    this.Service.editPlannig(this.p).subscribe(pl => this.Plannings$ = pl);
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);
  }

  deletePlannig(pla) {
    this.idDelete = pla.id;
    this.Service.deletePlannig(this.idDelete).subscribe();
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);


  }


}
