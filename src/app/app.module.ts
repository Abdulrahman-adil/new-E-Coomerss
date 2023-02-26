import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SharedClassesTypesComponent } from './shared-classes-types/shared-classes-types.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartsComponent } from './carts/carts.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SharedClassesTypesComponent,
    ProductsDetailsComponent,
    CartsComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    CommentsComponent,
    PostDetailsComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[NgModel]
})
export class AppModule { }
