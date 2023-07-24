import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NoPageComponent } from './no-page/no-page.component';
import { RouterModule } from '@angular/router';
import { AboutComapnyComponent } from './about/about-comapny/about-comapny.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { authGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NoPageComponent,
    AboutComponent,
    AboutComapnyComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
