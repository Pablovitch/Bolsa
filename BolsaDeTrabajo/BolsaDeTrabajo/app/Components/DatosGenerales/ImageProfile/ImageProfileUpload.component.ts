import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PerfilImageService } from '../../../Services/ProfileImage.service';

@Component({
    selector: 'image-uploader',
    templateUrl: 'app/Components/DatosGenerales/ImageProfile/ImageProfile.Upload.html',
    styleUrls: ['app/Components/DatosGenerales/ImageProfile/ImageProfileUpload.component.css']
})
export class ImageUploaderComponent {
    // 2. Propiedades
    @Output('imgLoaded')
    imgLoaded = new EventEmitter();
    @Input('activeColor')
    activeColor: string = 'green';
    @Input('baseColor')
    baseColor: string = '#ccc';
    @Input('overlayColor')
    overlayColor: string = 'rgba(255,255,255,0.5)';
    iconColor: string;
    borderColor: string;

    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    @Input('imageSrc')
    imageSrc: string = '';

    constructor(private _perfilCandidatoService: PerfilImageService) {
    }

    // 3. Funcionalidad Drag & Drop
    handleDragEnter() {
        this.dragging = true;
    }

    handleDragLeave() {
        this.dragging = false;
    }

    handleDrop(e: any) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }

    // 4. Carga de imagen
    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }

    // 5. Vista Previa
    handleInputChange(e: any) { 
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]; 
        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        if (file.size > 500000) {
            alert('La imágen excede el tamaño permitido. (500 Kb) ')
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);

        this._perfilCandidatoService.UploadProfileImage(file)
            .subscribe(
            resp => {
                this.imgLoaded.emit(resp);
            });
    }

    _handleReaderLoaded(e: any) {
        var reader = e.target;
        this.imageSrc = reader.result; 
        this.loaded = true;
    }

    _setActive() {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    }

    _setInactive() {
        this.borderColor = this.baseColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    }

}