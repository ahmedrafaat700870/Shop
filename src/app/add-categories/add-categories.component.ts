import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    file: [null],
  });
  TaskSubmit(): void {
    console.log(this.profileForm.value);
  }
  async uploadFile(event: Event): Promise<void> {
    let file: File = (event.target as HTMLInputElement).files?.item(0) as File;
    console.log(await file.arrayBuffer());
  }
  ngOnInit(): void {
    const body = document.body as HTMLBodyElement;
    let scripts = document.createElement('script');
    scripts.src = '../../assets/js/dropzone/dropzone.js';
    scripts.innerHTML = '';
    scripts.async = true;
    scripts.defer = true;
    body.appendChild(scripts);
    scripts.src = '../../assets/js/dropzone/dropzone-script.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/editor/ckeditor/ckeditor.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/editor/ckeditor/style.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/editor/ckeditor/style.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/editor/ckeditor/adapters/jquery.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/editor/ckeditor/ckeditor.custom.js';
    body.appendChild(scripts);
    scripts.src = '../../assets/js/admin-script.js';
    body.appendChild(scripts);
  }
}
