import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ShopFirestoreService } from 'src/app/shop-firestore.service';
import { Shop } from 'src/app/shop.model';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.scss']
})
export class ShopCreateComponent implements OnInit {

  shopCreateForm = new FormGroup({
    name: new FormControl(''),
    class: new FormControl('')
  });

  constructor(private shopFirestoreService: ShopFirestoreService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.shopFirestoreService.addShop(this.shopCreateForm.value); 
    this.shopCreateForm.setValue( { name : "", class : ""}); //Clear input 
  }

}
