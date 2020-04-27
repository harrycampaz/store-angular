import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { myValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit() {

    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {

        // this.form.patchValue({
        //   id: product.id,
        //   title: product.title
        // });

        this.form.patchValue(product);

      });
    });

  }

  updateProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;

      this.productService.updateProduct(this.id,product)
      .subscribe(newProduct => {

        console.log(newProduct);
        this.router.navigate(['./admin/products']);

      });

    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [, [Validators.required, myValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }


  getPriceField() {
    return this.form.get('price');
  }

}
