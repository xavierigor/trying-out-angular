import { Component, OnInit } from '@angular/core';
import {Author, RequestAuthor} from '../author.model';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  author: RequestAuthor = {
    name: ''
  };

  response: Author;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
  }

  save() {
    this.authorsService.createAuthor(this.author)
      .subscribe(res => this.response = res);
  }

}
