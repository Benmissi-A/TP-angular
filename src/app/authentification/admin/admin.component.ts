import { Component, OnInit } from '@angular/core';
import{ ArticlesService} from 'src/app/shared/articles.service';
import{FormGroup,FormBuilder,Validators} from'@angular/forms';
import{Article} from 'src/app/article';
declare let $:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articles;
  num;
  intitule:string;
  bouton:string;
  icon:string;
  couleur:string;
  articleForm:FormGroup;
  
    constructor(private articleService:ArticlesService , private formbuilder:FormBuilder) { }
  
    ngOnInit() {
      this.affichage();
      $(document).ready(()=>{
        //alert('hello!');
        $('.modal').modal();
        
      });
     this.initForm();
    }

    default(){
      this.intitule = 'Ajout voiture';
        this.bouton = 'Ajouter';
        this.icon = 'send';
        this.couleur = 'green';
        this.resetForm();
        //this.onUpdate();
    }
    initForm(){
      this.articleForm = this.formbuilder.group({
        titre:['', Validators.required],
        url: ['', Validators.required],
        contenu: ['', Validators.required],
        auteur: ['', Validators.required]
      })
    }
    resetForm(){
      this.articleForm.reset();
    }
    onSubmit(){
      if(this.bouton === "Ajouter"){
       this.articleForm.value.annee = parseInt(this.articleForm.value.annee);
       this.articleService.createArticle(this.articleForm.value);
       this.resetForm();
       //$('#modal1').hide();
       !$('.modal').modal();
       this.intitule = 'Ajout article';
       this.bouton = 'Ajouter';
       this.icon = 'send';
       this.couleur = 'green';
       console.log(this.articleForm.value);
       
      }else if(this.bouton === "Modifier"){
        this.onUpdate();
      }
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

//------------------- 
onDelete(id){
  this.num = id;
}

remove(){
  console.log(this.num);
  this.articleService.deleteArticle(this.num);
}

onEdit(art:Article){
  this.intitule = 'Modification de voiture';
  this.bouton = 'Modifier';
  this.icon = 'edit';
  this.couleur = 'orange';

  this.articleForm.get('marque').setValue(art.titre);
  this.articleForm.get('modele').setValue(art.url);
  this.articleForm.get('pays').setValue(art.contenu);
  this.articleForm.get('annee').setValue(art.auteur);
  this.articleForm.value.annee = Number( this.articleForm.value.annee);
  this.num = art.id;
  console.log(art);
}

onUpdate(){
  this.articleService.updateArticle(this.articleForm.value, this.num);
  this.resetForm();
  console.log(this.num);
  !$('.modal').modal();
}
//----------------- Fin
    
  }