import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  comment: string;
  imageFile: File;
  imageUrl: string;
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.imageFile = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  onFormSubmit(): void {
    this.submitted = true;
  }
}
