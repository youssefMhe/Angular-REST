import { Component, OnInit } from '@angular/core';
import {Store_Fixe} from '../../Store_Fixe.model';
import {Services} from '../../app.services';
import {Store_Mobile} from '../../Store_Mobile.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  Store_Mobile$: Store_Mobile[] ;
  Store_Mobiles$: Store_Mobile ;


  id: number;
  name_store: String ;
  email: String ;
  phone : number ;
  service: String ;
  picture: String;
  valid:  String;

  p: any;

  idDelete = 0;

  public copy: string;
  constructor(private Service: Services ) { }

  ngOnInit() {
    return this.Service.getStoreMobile().subscribe( Mobile_S => this.Store_Mobile$ = Mobile_S);
  }

  showUpdateModule(Mobile_S) {
    this.name_store = Mobile_S.name_store;
    this.email = Mobile_S.email ;
    this.phone = Mobile_S.phone ;
    this.service = Mobile_S.service ;
    this.picture = Mobile_S.picture ;
    this.valid = Mobile_S.valid ;

    this.id = Mobile_S.id;
  }




  addStoreMobile(p) {

    // tslint:disable-next-line:max-line-length
    this.p = {  name_store: this.name_store , email: this.email, phone: this.phone, service: this.service , picture: this.picture , valid: this.valid };

    this.Service.addStoreMobile(this.p).subscribe(Store_M => this.Store_Mobiles$ = Store_M);

    setTimeout(() => {
      this.ngOnInit();
    }, 3000);
  }

  editStoreMobile(p) {
    // tslint:disable-next-line:max-line-length
    this.p = { id: this.id,   name_store: this.name_store , email: this.email, phone: this.phone, service: this.service ,  picture: this.picture , valid: this.valid };
    this.Service.editStoreMobile(this.p).subscribe(Store_M => this.Store_Mobiles$ = Store_M);
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);
  }


  deleteStoreMobile(Mobile_st) {
    this.idDelete = Mobile_st.id;
    this.Service.deleteStoreMobile(this.idDelete).subscribe();
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);


  }



}


