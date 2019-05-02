import { Component, OnInit } from '@angular/core';
import { ShopFirestoreService } from 'src/app/shop-firestore.service';

@Component({
  selector: 'app-dev-cmd',
  templateUrl: './dev-cmd.component.html',
  styleUrls: ['./dev-cmd.component.scss']
})
export class DevCmdComponent implements OnInit {

  constructor(private shopFirestoreService: ShopFirestoreService) { }

  ngOnInit() {
    this.shopFirestoreService.hello(); 
  }

}
