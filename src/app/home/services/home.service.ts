import { Injectable } from '@angular/core';
import { Tab, ImageSlider, Channel } from 'src/app/shared/components';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){}

    public getTabs() {
        return this.http.get(`apidata/api/topMenus`);
    }

    public getChannels () {
        return this.http.get(`apidata/api/channels`);
    }

    public getBanners()  {
        return this.http.get(`apidata/api/imageSliders`);
    }

    public getAdByTab(tab: string) {
        return this.http.get<Ad[]>(`apidata/api/ads`, { 
            params: { categories_like: tab } 
        })
    }

    public getProductsByTab(tab: string) {
        return this.http.get<Product[]>(`apidata/api/products`, { 
            params: { categories_like: tab } 
        })
    }
}