import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { NotesComponent } from './authentication/notes/notes.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CartsComponent } from './carts/carts.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

  {path:"home",component:HomeComponent},
  /*Start products paths*/
  {path:"products", component:ProductsComponent}, // product
  {path:"details/:id", component:ProductsDetailsComponent}, // ALL product
  /*end products paths*/

  /*Start carts paths*/
  {path:"carts", component:CartsComponent}, // carts
  /*end carts paths*/

  /*Start users paths*/
  {path:"users",component:UsersComponent}, // users
  /*end users paths*/

  /*Start posts paths*/
  {path:"posts",component:PostsComponent}, // all post
  {path:"post-detail/:id",component:PostDetailsComponent,
 children:[
  {path:'comments',component:CommentsComponent}
 ]
}, // post details
  // {path:"posts/:id/comment",component:CommentsComponent},
  /*end posts paths*/

    /*Start authentication  paths*/
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"notes",component:NotesComponent},
  // {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthModule)},
  // {path:"**", redirectTo:"/home", pathMatch: "full"},
    /*Start authentication  paths*/
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
