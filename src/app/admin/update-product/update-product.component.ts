import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product :any ={
    name:"",
    price:0,
    image:""
 }
 constructor(private route: ActivatedRoute,
  private productservice :ProductService
  ){}
 ngOnInit(){
  this.getproductbyId()
 }
 getproductbyId(){
  this.route.params.subscribe((data)=>{
    const productid = data['id'];
    if(productid){
      this.productservice.getproductbyId(productid).subscribe((data)=>{
        this.product = data
      })
    }
  })
 }
 onhandleaedit(){
    this.productservice.updateproduct(this.product).subscribe(()=>{
      alert('thanh cong ')
    })
 }
}
