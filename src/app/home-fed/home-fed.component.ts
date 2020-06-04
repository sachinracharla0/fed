import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home-fed',
  templateUrl: './home-fed.component.html',
  styleUrls: ['./home-fed.component.css']
})
export class HomeFedComponent implements OnInit {
  public noWrap = false;
  public cycleInterval = 3000;
  public contactUsForm: FormGroup;
  public slides = [
    {heading: 'Arizona Package 1', link: 'pageOne', src: './assets/img/dummy2.png'},
    {heading: 'Arizona Package 2', link: 'pageTwo',src: './assets/img/dummy.jpg'},
    {heading: 'Arizona Package 3', link: 'pageThree', src: './assets/img/dummy3.jpeg'}
  ];
  public modalRef: BsModalRef;
  public showMessage: boolean;
  constructor( private router: Router, private modalService: BsModalService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required , Validators.minLength(2)]],
      email: ['' ,[Validators.required , Validators.email]],
      comments: ['', [Validators.required, Validators.minLength(2)]],
    },
    { updateOn: "blur" });
  }
  public goToDetailPage(id, url): void {
    localStorage.removeItem('image');
    localStorage.setItem('image', url);
    this.router.navigate(['fedDetail', id])
  }
  public openModal(template: TemplateRef<any>):  void{
    let config = { backdrop: true, ignoreBackdropClick: true };
    this.modalRef = this.modalService.show(template, config);
  }
  public closeForm() : void {
    this.contactUsForm.reset();
    this.modalRef.hide();
  }
  public get name() { return this.contactUsForm.get('name'); }

  
  public get email() { return this.contactUsForm.get('email'); }

  
  public get comment() { return this.contactUsForm.get('comments'); }

  public onSubmit(): void {
    this.showMessage =true;
    setTimeout(()=>{ 
      this.closeForm();
      this.showMessage =false;
 }, 5000);
  }
}
