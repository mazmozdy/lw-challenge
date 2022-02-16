import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialUiModule } from './modules/material-ui.module';
import { CoffeeComponent } from './coffeelist/coffee/coffee.component';
import { CoffeelistComponent } from './coffeelist/coffeelist.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeCatalogService } from './coffeelist/catalog.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { catalogReducer } from './store/catalog.reducer';
import { CatalogEffects } from './store/catalog.effects';

@NgModule({
  declarations: [AppComponent, CoffeeComponent, CoffeelistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialUiModule,
    HttpClientModule,
    StoreModule.forRoot({ catalog: catalogReducer }),
    EffectsModule.forRoot([CatalogEffects]),
  ],
  providers: [CoffeeCatalogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
