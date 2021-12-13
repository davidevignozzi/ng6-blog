import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //module


const appRoutes: Routes = [
  { path: 'articles', component:ArticleListComponent },
  { path: 'about', component:AboutComponent },
  { path: 'new', component:NewArticleComponent },
  { path: '', component:ArticleListComponent },
  { path: ':key', component:ArticleComponent },
  { path: '404', component:NotFoundComponent },
  { path: '**', component:NotFoundComponent },
];

@NgModule({
  declarations: [			
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
    AboutComponent,
    ArticleComponent,
    NotFoundComponent,
    NewArticleComponent
   ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
