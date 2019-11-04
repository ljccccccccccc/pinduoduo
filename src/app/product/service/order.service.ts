import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    getProductVariantsByProductId(productId: string): Observable<ProductVariant[]> {
        return this.http.get<ProductVariant[]>(`apidata/api/productVariants`,
            {
                params: 
                {
                    _expand: 'product',
                    _embed: 'productVariantImages',
                    productId
                }
            })
    }
}