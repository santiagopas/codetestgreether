
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {
    push: function (arg0: Post) {
      throw new Error('Function not implemented.');
    }
  };

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  };

  constructor() { }

  ngOnInit() {
  }

}
