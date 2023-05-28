import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product :any ={
    name:"",
    price:0,
    image:""
 }
 constructor(private productService: ProductService){}
 onhandleadd(){
  this.productService.addproducts(this.product).subscribe(()=>{
    alert('them thanh cong');
  })
 }
}
