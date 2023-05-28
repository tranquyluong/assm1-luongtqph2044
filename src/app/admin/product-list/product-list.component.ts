import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/types/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
     product :Iproduct[]=[]
     constructor(private productsrvices : ProductService){}
     ngOnInit():void{
      this.productsrvices.getproducts().subscribe((data)=>{
        this.product = data
      })
     }
     onhandlermove(id:any){
     const confirm = window.confirm('bạn có chắc chắn muốn xóa không ');
     if(confirm){
      this.productsrvices.removeproduct(id).subscribe(()=>{
        this.product= this.product.filter((item)=> item.id !== id)
      })
     }
     }
}
