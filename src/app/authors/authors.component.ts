import { Component, OnInit } from '@angular/core';
import {AuthorsService} from './authors.service';
import {ResponseAuthors} from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  responseAuthors: ResponseAuthors;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors()
      .subscribe(res => this.responseAuthors = res);
  }

}
