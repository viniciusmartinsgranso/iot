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
    setOpen: null,
    startHour: null,
    openSeconds: null,
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

    this.posts.setOpen = null;
    this.posts.openSeconds = null;
    this.posts.startHour = null;
  }

  public canPublish(): boolean {
    if(this.posts.startHour && this.posts.openSeconds && this.posts.setOpen) return true;

    return false;
  }
}
