import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
 
  constructor(private todoService: TodoService, private gop: Router) { }
 
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
  }

  addItem(){
    this.gop.navigateByUrl('/details');
  }
}
