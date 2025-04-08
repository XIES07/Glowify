import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppDomainConstant } from '../../constants/app-domain-constantl';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private initialProductsSubject = new BehaviorSubject<any>([]);
  private filteredProductsSubject = new BehaviorSubject<any>([]);
  private categoriesSubject = new BehaviorSubject<any>([]);

  public initialProducts$: Observable<any> = this.initialProductsSubject.asObservable();
  public filteredProducts$: Observable<any> = this.filteredProductsSubject.asObservable();
  public categories$: Observable<any> = this.categoriesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getInitialsProducts() {
    this.http.get(AppDomainConstant.BASE_URL + '/products').subscribe({
      next: (response: any) => {
        const productsArray = Array.isArray(response) ? response : response.products;
        if (Array.isArray(productsArray)) {
          this.initialProductsSubject.next(productsArray);
          this.filteredProductsSubject.next(productsArray);
        } else {
          this.initialProductsSubject.next([]);
          this.filteredProductsSubject.next([]);
        }
      },
      error: () => {
        this.initialProductsSubject.next([]);
        this.filteredProductsSubject.next([]);
      }
    });
  }

  getCateotysOfProducts() {
    this.http.get(AppDomainConstant.BASE_URL + '/products/categories').subscribe({
      next: (response: any) => {
        this.categoriesSubject.next(response);
      },
      error: () => {}
    });
  }

  getProductsByCategory(category: string) {
    this.http.get(AppDomainConstant.BASE_URL + '/products/category/' + category).subscribe({
      next: (response: any) => {
        this.filteredProductsSubject.next(response.products);
      },
      error: () => {}
    });
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(AppDomainConstant.BASE_URL + '/products/' + id);
  }
}