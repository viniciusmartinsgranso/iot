import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostProxy } from '../modules/proxies/post.proxy';
import { apiRoutes } from '../pages/api.routes';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private readonly http: HttpClient,
    private readonly helper: HelperService,
  ) {}

  public async openSeconds(post: number): Promise<Observable<PostProxy>> {
    const url = apiRoutes.apiKeys.openSeconds.write.replace(
      '{openSeconds}',
      post.toString(),
    );

    const posts = this.http.post<PostProxy>(url, post);
    posts.subscribe({
      next: (newPost => newPost),
      error: (err: Error) => console.log(err),
    });
    return posts;
  }

  public async setOpen(post: number): Promise<Observable<PostProxy>> {
    setTimeout(() => {
      console.log("Delay para definir o tempo aberto");
    }, 15000);

    const url = apiRoutes.apiKeys.setOpen.write.replace(
      '{setOpen}',
      post.toString(),
    );

    const posts = this.http.post<PostProxy>(url, post);

    posts.subscribe({
      next: (newPost => newPost),
      error: (err: Error) => console.log(err),
    });
    return posts;
  }

  public async startHour(post: number): Promise<Observable<PostProxy>> {
    setTimeout(() => {
      console.log("Delay para definir de quanto em quanto ocorre a abertura");
    }, 15000);

    const url = apiRoutes.apiKeys.startHour.write.replace(
      '{startHour}',
      post.toString(),
    );

    const posts = this.http.post<PostProxy>(url, post);

    posts.subscribe({
      next: (newPost => newPost),
      error: (err: Error) => console.log(err),
    });
    return posts;
  }

  public async getNowHour(post: number): Promise<Observable<PostProxy>> {
    setTimeout(() => {
      console.log("Delay para definir a hora atual");
    }, 15000);

    const url = apiRoutes.apiKeys.getNowHour.write.replace(
      '{getNowHour}',
      post.toString(),
    );

    const posts = this.http.post<PostProxy>(url, post);

    posts.subscribe({
      next: (newPost => newPost),
      error: (err: Error) => console.log(err),
      complete: () => this.helper.showToast('O programa foi definido com sucesso! Cuidaremos muito bem do seu animalzinho!'),
    });
    return posts;
  }
}
