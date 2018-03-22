import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PerfilCandidato } from '../Models/PerfilCandidato';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PerfilImageService {
    private UrlUploadImage: string = '/api/ProfileImageUploader'
    constructor(private _http: Http) { }


    UploadProfileImage(fileToUpload: any) {
        let input = new FormData();
        input.append("UploadedImage", fileToUpload);
        return this._http
            .post(this.UrlUploadImage, input)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteImageProfiel(imgUrl: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this._http.delete(this.UrlUploadImage + "&imgUrl=" + imgUrl, options)
    }
    getUrl(id: string) {
        return this.UrlUploadImage + "/?id=" + id;
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}


