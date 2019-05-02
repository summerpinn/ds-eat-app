import { Component, OnInit } from '@angular/core';
import { ShopFirestoreService } from 'src/app/shop-firestore.service';
import { Shop } from 'src/app/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  private allShopList: Shop[] = [];
  private selectedShopClassAll: Shop["class"] = "All";
  private selectedShopClass: Shop["class"] = this.selectedShopClassAll;

  constructor(private shopFirestoreService: ShopFirestoreService) { }

  ngOnInit() {
    this.shopFirestoreService.getShops().subscribe(data => {
      this.allShopList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Shop;
      });
    });
  }

  get finalShopList(): Shop[] {
    var shopList = this.allShopList;
    shopList = this.filterShop(shopList);
    shopList = this.sortShop(shopList);
    return shopList;
  }

  sortShop(shopList: Shop[]): Shop[] {
    return shopList.sort((shop1, shop2) => {
      return shop1.lastVisit - shop2.lastVisit
    });
  }

  filterShop(shopList: Shop[]): Shop[] {
    if (this.selectedShopClass === this.selectedShopClassAll) {
      return shopList;
    }

    return shopList.filter(
      shop => shop.class === this.selectedShopClass);
  }

  onCheckIn(shop: Shop) {
    this.shopFirestoreService.checkInShop(shop);
  }

}
