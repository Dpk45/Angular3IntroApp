
import {Component} from "@angular/core"
import {AuthorsService} from "./authors.service"

@Component({
selector:"authors",
template:`<h2> {{ Authors }} </h2>
           <li>
              {{authors}}
            </li>
 
`
})

export class AuthorsComponent{

title: "Authors";
authors:String[];

constructor(authorsService:AuthorsService){
this.authors=authorsService.getAuthors();


}

}