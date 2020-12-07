import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './Product.model';
import {Observable} from 'rxjs';
import {Store_Fixe} from './Store_Fixe.model';
import {Store_Mobile} from './Store_Mobile.model';
import {Planning} from './Planning.model';
import {product_store, } from './Product_storePK.model';


@Injectable( { providedIn : 'root' })


export class Services {
  apuUrl  = 'http://localhost:9080/Projet-jpa-web/rest/Product';
  apuUrl1  = 'http://localhost:9080/Projet-jpa-web/rest/Product/delete/';
  apuUrl22  = ' http://localhost:9080/Projet-jpa-web/rest/Product/makeExel';
  apuUrl222  =  'http://localhost:9080/Projet-jpa-web/rest/Product/updateEX';

  apuUrlFixed_store  = 'http://localhost:9080/Projet-jpa-web/rest/Fixed_store';
  apuUrlFixed_store1  = 'http://localhost:9080/Projet-jpa-web/rest/Fixed_store/delete/';
  apuUrlFixed_store_stat  = 'http://localhost:9080/Projet-jpa-web/rest/Fixed_store/stat';

  apuUrlStore_Mobile  = 'http://localhost:9080/Projet-jpa-web/rest/Mobile_store';
  apuUrlStore_Mobile1  = 'http://localhost:9080/Projet-jpa-web/rest/Mobile_store/delete/';

  apuUrlPlannig  = 'http://localhost:9080/Projet-jpa-web/rest/Plannig';
  apuUrlPlannig1  = 'http://localhost:9080/Projet-jpa-web/rest/Plannig/delete/';
  apuUrlPlannigurgent  = 'http://localhost:9080/Projet-jpa-web/rest/Plannig/dateaugent';

  apuUrlaffecterProduit_store  = 'http://localhost:9080/Projet-jpa-web/rest/Product_store_R/add/';

  testObject: { [key: number]: string };

  constructor(private  http: HttpClient)  { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getProduct() {
    return this.http.get<Product[]>(this.apuUrl);
  }

  public  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apuUrl , product, this.httpOptions);
  }

  public  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.apuUrl , product, this.httpOptions);
  }

  public  deleteProduct(idp: number): Observable<Product> {
    return this.http.delete<Product>(this.apuUrl1 + idp , this.httpOptions);
  }




  // service fixed store


  getStoreFixe() {
    return this.http.get<Store_Fixe[]>(this.apuUrlFixed_store);
  }

  getStoreFixe_sata() {
    return this.http.get<{ [key: number]: string }>(this.apuUrlFixed_store_stat);
  }

  public  addStoreFixe(store_Fixe: Store_Fixe): Observable<Store_Fixe> {
    return this.http.post<Store_Fixe>(this. apuUrlFixed_store  , store_Fixe, this.httpOptions);
  }

  public  editStoreFixe(store_Fixe: Store_Fixe): Observable<Store_Fixe> {
    return this.http.put<Store_Fixe>(this. apuUrlFixed_store  , store_Fixe, this.httpOptions);
  }

  public  deleteStoreFixe(idp: number): Observable<Store_Fixe> {
    return this.http.delete<Store_Fixe>(this.apuUrlFixed_store1 + idp , this.httpOptions);
  }



  // service Mobile store


  getStoreMobile() {
    return this.http.get<Store_Mobile[]>(this.apuUrlStore_Mobile);
  }

  public  addStoreMobile(store_Mobile: Store_Mobile): Observable<Store_Mobile> {
    return this.http.post<Store_Mobile>(this. apuUrlStore_Mobile  , store_Mobile, this.httpOptions);
  }

  public  editStoreMobile(store_Mobile: Store_Mobile): Observable<Store_Mobile> {
    return this.http.put<Store_Mobile>(this. apuUrlStore_Mobile  , store_Mobile, this.httpOptions);
  }

  public  deleteStoreMobile(idp: number): Observable<Store_Mobile> {
    return this.http.delete<Store_Mobile>(this.apuUrlStore_Mobile1 + idp , this.httpOptions);
  }




// service Plannig

  getPlannig() {
    return this.http.get<Planning[]>(this.apuUrlPlannig);

  }

  getPlannigurgent() {
    return this.http.get<Planning[]>(this.apuUrlPlannigurgent);
  }

  public  addPlannig(Pla: Planning): Observable<Planning> {
    return this.http.post<Planning>(this. apuUrlPlannig  , Pla, this.httpOptions);
  }

  public  editPlannig(Pla: Planning): Observable<Planning> {
    return this.http.put<Planning>(this. apuUrlPlannig  , Pla, this.httpOptions);
  }

  public  deletePlannig(idp: number): Observable<Planning> {
    return this.http.delete<Planning>(this.apuUrlPlannig1 + idp , this.httpOptions) ;
  }


  public  affecter(idp: number , idf : number) : Observable<product_store> {
    return this.http.post<product_store>(this. apuUrlaffecterProduit_store + idp + '/' + idf  , this.httpOptions);
  }

  public getexel() {
    return this.http.get<string>(this.apuUrl22);
  }

  public updateexel(){
    return this.http.put(this.apuUrl222);
  }
}
