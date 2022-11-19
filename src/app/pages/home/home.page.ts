import { Component, OnInit } from '@angular/core';
import { CreatePostPayload } from '../../modules/payloads/post.payload';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private readonly service: PostService,
  ) {}

  public posts: CreatePostPayload = {
    setOpen: 0,
    startHour: 0,
    openSeconds: 0,
    getNowHour: new Date().getHours(),
  };

  public ngOnInit(): void {}

  public async showData(): Promise<void> {
    await Promise.all([
      this.service.openSeconds(this.posts.openSeconds),
      this.service.setOpen(this.posts.setOpen),
      this.service.startHour(this.posts.startHour),
      this.service.getNowHour(this.posts.getNowHour),
    ]);
  }
}
