import { Component, OnInit } from '@angular/core';
import {Planning} from '../../Planning.model';
import {Store_Mobile} from '../../Store_Mobile.model';
import {Product} from '../../Product.model';
import {Store_Fixe} from '../../Store_Fixe.model';
import {Services} from '../../app.services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  Store_Fixe$: Store_Fixe[] ;
  Store_Fixes$: Store_Fixe ;

  Product: Product ;
  Product$: Product[] ;
  stat$ : any[];

  pulll : String ;
  pull : String;
  oo: String;
  ooo: String;
idp : number;
idf: number ;

  constructor(private Service: Services ) { }

  ngOnInit() {
    this.Service.getStoreFixe().subscribe( Fixe_S => this.Store_Fixe$ = Fixe_S);
    this.Service.getProduct().subscribe( P_S => this.Product$ = P_S);
  }

  aa()
  {
    let i;

    for (i = 0 ; i < this.Product$.length; i++) {
console.log(this.pull)
      if (this.pull === this.Product$[i].name)

      { this.Product = this.Product$[i] ; this.oo = this.Product$[i].picture ; this.idp = this.Product$[i].id}


    }
  }


  aaaa() {
    let i;

    for (i = 0 ; i < this.Store_Fixe$.length; i++) {
      console.log(this.pulll)
      if (this.pulll === this.Store_Fixe$[i].name_store)

      { this.Store_Fixes$ = this.Store_Fixe$[i] ; this.ooo = this.Store_Fixe$[i].picture ; this.idf = this.Product$[i].id}


    }
  }


  affecter() {

    this.Service.affecter(this.idf , this.idp).subscribe();

    alert(this.idf +"-*-*-*-*-*-*-*-*-*"+this.idp)
    setTimeout(() => {
      this.ngOnInit();
    }, 3000);



}
}
