import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/Services/api-service';

@Component({
    selector: 'app-top-deals',
    templateUrl: './top-deals.component.html',
    styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
    topDealsData: any[] = [];
    displayedProducts: any[] = [];
    productsToShow = 3;
    filteredProducts: any[] = [];

    constructor(private api: ApiService) {

    }
    ngOnInit(): void {
        this.getTopDeals();
    }

    getTopDeals() {
        const endPoint = "top-deals";
        console.log(endPoint);
        this.api.getDataFromServer(endPoint).subscribe({
            next: (response: any) => {
                console.log(JSON.stringify(response));
                if (response != undefined) {
                    this.topDealsData = response;
                    this.filteredProducts = this.topDealsData.slice();         // Initially, filteredProducts is same as products


                    this.displayedProducts = this.filteredProducts.slice(0, this.productsToShow);


                    console.log("data", this.topDealsData);

                }
            },
            error: () => {

            }
        })
    }
    showMore() {
        const nextIndex = this.displayedProducts.length + this.productsToShow;
        const nextProducts = this.topDealsData.slice(this.displayedProducts.length, nextIndex);
        this.displayedProducts = [...this.displayedProducts, ...nextProducts];
      }
    


}




