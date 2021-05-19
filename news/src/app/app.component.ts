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

  upload() {

  
    const obj = {
       Author :'Sagar kumar',
       Title:'Six Murder 5 Injured in two group clash in kathua',
       Description :'dfdfdfdfdfdfdf dgdggdfdf hhggdfdfhdfhdfhdfhjhdf h hfdfhudhfdhjdfhdfhdfhdfhd hhfhdfdhfjhdf hfhjhdfjhdfhhdfhdfjh jhfddfjhdfjhdfhj',
       Location :'',
       Deptt:'State',
       Country:'',
       State:'Jammu & kashmir',
       District:'Kathua',
       Video :'',
       images:this.imagePath


       
          }

    
    this.http.post('http://localhost/scripts/createnews.php',obj ).subscribe(x => {
      console.log(x);
    });
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


 

