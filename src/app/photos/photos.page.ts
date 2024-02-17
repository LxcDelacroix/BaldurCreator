import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photos: Picture[] = [];

  constructor() { }

  ngOnInit() {
  }

  async addNewPhoto() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: '',
      webviewPath: capture.webPath
    });
  }

  takePhoto() {
    this.addNewPhoto();
  }

  removePhoto(index: number) {
    this.photos.splice(index, 1);
  }
}

export interface Picture {
  filepath: string;
  webviewPath: string | undefined;
}
