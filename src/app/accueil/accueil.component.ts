import { Component, OnInit } from '@angular/core';
import{ ArticlesService} from '../shared/articles.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

articles;
num;
titre:string;
auteur:string;
url:string;
contenu:string;

  constructor(private articleService:ArticlesService) { }

  ngOnInit() {
    this.affichage();
  }
  affichage(){
 
    this.articleService.getArticles().subscribe(a =>{
      this.articles = a.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
    });
  }
}
