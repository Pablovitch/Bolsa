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
var ProfileImage_service_1 = require("../../../Services/ProfileImage.service");
var ImageUploaderComponent = (function () {
    function ImageUploaderComponent(_perfilCandidatoService) {
        this._perfilCandidatoService = _perfilCandidatoService;
        // 2. Propiedades
        this.imgLoaded = new core_1.EventEmitter();
        this.activeColor = 'green';
        this.baseColor = '#ccc';
        this.overlayColor = 'rgba(255,255,255,0.5)';
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.imageSrc = '';
    }
    // 3. Funcionalidad Drag & Drop
    ImageUploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    ImageUploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    ImageUploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    // 4. Carga de imagen
    ImageUploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    };
    // 5. Vista Previa
    ImageUploaderComponent.prototype.handleInputChange = function (e) {
        var _this = this;
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        if (file.size > 500000) {
            alert('La imágen excede el tamaño permitido. (500 Kb) ');
            return;
        }
        this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this._perfilCandidatoService.UploadProfileImage(file)
            .subscribe(function (resp) {
            _this.imgLoaded.emit(resp);
        });
    };
    ImageUploaderComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    ImageUploaderComponent.prototype._setActive = function () {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    };
    ImageUploaderComponent.prototype._setInactive = function () {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    };
    return ImageUploaderComponent;
}());
__decorate([
    core_1.Output('imgLoaded'),
    __metadata("design:type", Object)
], ImageUploaderComponent.prototype, "imgLoaded", void 0);
__decorate([
    core_1.Input('activeColor'),
    __metadata("design:type", String)
], ImageUploaderComponent.prototype, "activeColor", void 0);
__decorate([
    core_1.Input('baseColor'),
    __metadata("design:type", String)
], ImageUploaderComponent.prototype, "baseColor", void 0);
__decorate([
    core_1.Input('overlayColor'),
    __metadata("design:type", String)
], ImageUploaderComponent.prototype, "overlayColor", void 0);
__decorate([
    core_1.Input('imageSrc'),
    __metadata("design:type", String)
], ImageUploaderComponent.prototype, "imageSrc", void 0);
ImageUploaderComponent = __decorate([
    core_1.Component({
        selector: 'image-uploader',
        templateUrl: 'app/Components/DatosGenerales/ImageProfile/ImageProfile.Upload.html',
        styleUrls: ['app/Components/DatosGenerales/ImageProfile/ImageProfileUpload.component.css']
    }),
    __metadata("design:paramtypes", [ProfileImage_service_1.PerfilImageService])
], ImageUploaderComponent);
exports.ImageUploaderComponent = ImageUploaderComponent;
//# sourceMappingURL=ImageProfileUpload.component.js.map