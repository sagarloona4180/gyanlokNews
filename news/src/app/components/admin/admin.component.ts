import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { URLs } from 'src/app/common/constant/constant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

url =URLs.getAPIUrl()+'createnews.php';

  form: FormGroup = new FormGroup({

    Title: new FormControl('', [Validators.required]),

    Description: new FormControl('', [Validators.required]),

    Location: new FormControl(''),

    Country: new FormControl('India', [Validators.required]),

    State: new FormControl(''),

    District: new FormControl(''),

    Description2: new FormControl(''),

    Description3: new FormControl(''),

    Video: new FormControl(''),

    Author: new FormControl('', [Validators.required]),

    Deptt: new FormControl('', [Validators.required])

  });
  public imagePath: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  onSelectFile(event: any) { // called each time file input changes
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {

        this.imagePath = reader.result;

      }
      // ChangeDetectorRef since file is loading outside the zone

    }
  }



  addNewnews() {
    const obj = this.form.value;
    obj.images = this.imagePath;

    this.http.post(this.url,obj ).subscribe(x => {
      console.log(x);
      this.form.reset();
      this.imagePath =null;
    });
  }

}
