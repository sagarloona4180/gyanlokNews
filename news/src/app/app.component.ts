import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';
  public imagePath:any;


  constructor(private http: HttpClient) {



  }


  onSelectFile(event:any) { // called each time file input changes
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {

        this.imagePath =reader.result;
    
      }
      // ChangeDetectorRef since file is loading outside the zone
            
    }
  }
}


 

