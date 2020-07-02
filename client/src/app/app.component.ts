import { Component } from '@angular/core';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private uploadService: UploadFileService
  ) { }

  onFileUpload(event) {
    const file = event.target.files[0];
    this.uploadService.upload(file).subscribe(res => console.log(res));
  }
}
