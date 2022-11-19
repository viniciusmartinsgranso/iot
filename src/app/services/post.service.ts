import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostProxy } from '../modules/proxies/post.proxy';
import { apiRoutes } from '../pages/api.routes';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private readonly http: HttpClient
  ) {}

  // public async create(post: number): Promise<AsyncResult<PostProxy>> {
  //   const [success, error] = await this.http.post<PostProxy>(
  //     apiRoutes.apiKeys.openSeconds.write,
  //     post,
  //   );
  //
  //   if (error) return [null, error.error.message];
  //
  //   return [success];
  // }

  public async openSeconds(post: number): Promise<Observable<PostProxy>> {
    const url = apiRoutes.apiKeys.openSeconds.write.replace(
      '{openSeconds}',
      post.toString(),
    );

    return this.http.put<PostProxy>(url, post);
  }

  public async setOpen(post: number): Promise<Observable<PostProxy>> {
    const url = apiRoutes.apiKeys.setOpen.write.replace(
      '{setOpen}',
      post.toString(),
    );

    return this.http.put<PostProxy>(url, post);

  }

  public async startHour(post: number): Promise<Observable<PostProxy>> {
    const url = apiRoutes.apiKeys.startHour.write.replace(
      '{startHour}',
      post.toString(),
    );

    return this.http.put<PostProxy>(url, post);

  }

  public async getNowHour(post: number): Promise<Observable<PostProxy>> {
    const url = apiRoutes.apiKeys.getNowHour.write.replace(
      '{getNowHour}',
      post.toString(),
    );

    return this.http.put<PostProxy>(url, post);
  }
}
