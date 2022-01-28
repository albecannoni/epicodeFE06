import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ClientTableComponent } from './client-table/client-table.component';
import { Interceptor1Interceptor } from './interceptor1.interceptor';
import { ClientDetailComponent } from './client-detail/client-detail.component';

import { EditclientComponent } from './editclient/editclient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ClientTableComponent,
    ClientDetailComponent,
    
    EditclientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor1Interceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
