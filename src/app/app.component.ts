import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo' ;
todos = [
{language : 'Paython'} ,
{language : 'JAVA'},
{language : 'Javascript'}

] ;

addTodo(newvalue){
var newLanguage = {
  language : newvalue
}
this.todos.push(newLanguage)

}
deleteTodo(todo){
 
  this.todos = this.todos.filter( x => x.language !== todo.language)
  
  }

}
