import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  title="New Article"
  newArticleForm: FormGroup;
  articles: Article[] = [];
  newArticleId;

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService,
    public fb: FormBuilder
  ) { 
    this.newArticleForm = fb.group({
      'articleTitle': ["", Validators.required],
      'ArticleDescription': ["", Validators.required],
      'ArticleKey': ["", Validators.required],
      'ArticleContent': ["", Validators.required]
    })
  }

  ngOnInit() {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void{
    this.articleService
    .getArticles()
    .subscribe(articles => (this.articles = articles));
    console.log(this.articles);
  }

  publishArticle(): void {
    // id
    this.newArticleId = this.articles.length + 1

    if(!this.newArticleForm.valid){
      alert("compila tutti i campi obbligatori");
      return;
    }

    this.articles.push(
      {
        id: this.newArticleId,
        title: this.newArticleForm.controls['articleTitle'].value,
        key: this.newArticleForm.controls['ArticleKey'].value,
        date: new Date(),
        content: this.newArticleForm.controls['ArticleContent'].value,
        description: this.newArticleForm.controls['ArticleDescription'].value,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
      }
    );

    console.log(this.articles);
  }
}
