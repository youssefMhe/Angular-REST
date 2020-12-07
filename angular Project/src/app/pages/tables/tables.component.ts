import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product.model';
import {Services} from '../../app.services';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  Product$: Product[] ;
  Products$: Product ;


  quantity: number;
  Tva: number;
  price: number;
  description: string;
  type : string ;
  code_AB: number;
  picture: string ;
  Name: string;
  p: any;

id = 0;
  idDelete= 0;

  constructor( private Service: Services ) { }


  showUpdateModule(produt) {
    this.quantity = produt.quantity;
    this.Tva = produt.tva ;
    this.price = produt.price ;
    this.description = produt.description ;
    this.type = produt.type ;
    this.code_AB = produt.code_AB ;
    this.picture = produt.picture ;
    this.Name = produt.name ;
    this.id = produt.id;
}

  search='';
  ngOnInit() {
    return this.Service.getProduct().subscribe(product => this.Product$ = product);
  }

  addProduct(p) {
  // tslint:disable-next-line:max-line-length
  this.p = {  name: this.Name , picture: this.picture, code_AB: this.code_AB, type: this.type , description: this.description , price: this.price , quantity: this.quantity , tva: this.Tva };

    this.Service.addProduct(this.p).subscribe(product => this.Products$ = product);

    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
}


  editProduct(p) {
    // tslint:disable-next-line:max-line-length
    this.p = {id: this.id ,  name: this.Name , picture: this.picture, code_AB: this.code_AB, type: this.type , description: this.description , price: this.price , quantity: this.quantity , tva: this.Tva };
    this.Service.editProduct(this.p).subscribe(product => this.Products$ = product);
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);
  }


  deleteProduct(produt) {
    this.idDelete = produt.id;
    this.Service.deleteProduct(this.idDelete).subscribe();
    setTimeout(() => {
      this.ngOnInit();
    }, 2000);


  }

  getexel(){ this.Service.getexel().subscribe(); alert("fichier exel encour") }
  updateexel() {   this.Service.updateexel().subscribe(); alert("fichier edit via exel file encour")
             }


}
