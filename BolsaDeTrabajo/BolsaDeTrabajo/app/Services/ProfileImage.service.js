"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var PerfilImageService = (function () {
    function PerfilImageService(_http) {
        this._http = _http;
        this.UrlUploadImage = '/api/ProfileImageUploader';
    }
    PerfilImageService.prototype.UploadProfileImage = function (fileToUpload) {
        var input = new FormData();
        input.append("UploadedImage", fileToUpload);
        return this._http
            .post(this.UrlUploadImage, input)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilImageService.prototype.DeleteImageProfiel = function (imgUrl) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.delete(this.UrlUploadImage + "&imgUrl=" + imgUrl, options);
    };
    PerfilImageService.prototype.getUrl = function (id) {
        return this.UrlUploadImage + "/?id=" + id;
    };
    PerfilImageService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return PerfilImageService;
}());
PerfilImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PerfilImageService);
exports.PerfilImageService = PerfilImageService;
//# sourceMappingURL=ProfileImage.service.js.map