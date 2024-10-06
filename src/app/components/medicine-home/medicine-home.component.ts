import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/Services/api-service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent {
  pincode: string = "33333";
  city: string = "Jaipur";
  
  searchText:string="";


  constructor(private api: ApiService) {

  }

  searchCityByPincode() {
    if (this.pincode.trim().length === 6) {
      const endPoint = "get-pincode-details?pincode=" + this.pincode;
      console.log(endPoint);
      this.api.getDataFromServer(endPoint).subscribe({
        next: (response: any) => {
          console.log(response);
          if(response && response.length > 0){
           this.city = response[0].pincodeCity
          }
        },
        error: () => {

        }
      })
    }

  }


}
