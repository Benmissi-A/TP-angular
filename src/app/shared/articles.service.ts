import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private firestore:AngularFirestore) { }
 listearticle=this.firestore.collection('articles');
 getArticles(){
   return this.firestore.collection('articles').snapshotChanges();
 }

 createArticle(art:Article){
  return this.firestore.collection('articles').add(art);
}
deleteArticle(id){
    return this.firestore.collection('articles').doc(id).delete()
  }
  updateArticle(art: Article,id){
    return this.firestore.collection('articles').doc(id).update(art)
  }

//   fin classe
}
