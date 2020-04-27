import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { myValidator } from '../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private afStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;

      this.productService.createProduct(product)
        .subscribe(newProduct => {

          console.log(newProduct);
          this.router.navigate(['./admin/products']);

        });

    }

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [, [Validators.required]],
      title: ['', [Validators.required]],
      price: [, [Validators.required, myValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }


  getPriceField() {
    return this.form.get('price');
  }

  uploadFile(event) {

    const file = event.target.files[0];
    const dir = 'images';
    const fileRef = this.afStorage.ref(dir);
    const task = this.afStorage.upload(dir, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('image').setValue(url);
          });
        })
      ).subscribe();

  }



}
