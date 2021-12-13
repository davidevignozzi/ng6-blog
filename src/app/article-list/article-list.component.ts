import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
    this.orderArticles();
  }

  // get Articles
  getArticles(): void{
    this.articleService
    .getArticles()
    .subscribe(articles => (this.articles = articles));
  }

  // Recent First
  orderArticles(): void{
    this.articles.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    this.articles.forEach((article, index) => {
      article.id = this.articles.length - (index);
    });
  }

}
