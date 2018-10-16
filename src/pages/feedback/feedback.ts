import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  public form  : FormGroup;
  constructor(public navCtrl: NavController, private EMAIL: EmailComposer, private _ALERT : AlertController,
    private _FORM: FormBuilder) {

      this.form = this._FORM.group({
        "strName"            : ["", Validators.required],
        "strContactNo"            : ["", Validators.required],
        "strEmail"           : ["", Validators.required],
        "strContent"       : ["", Validators.required]
     });
  }
  displayMessage(title : string, subTitle : string) : void
  {
     let alert : any 		=  this._ALERT.create({
        title 		: title,
        subTitle 	: subTitle,
        buttons    : ['Got it']
     });
     alert.present();
  }
  sendEmail(to         : string,
    strName         : string,
    strContactNo        : string,
    strEmail    : string,
    strContent       : string) : void{

      this.EMAIL.isAvailable()
      .then((available: boolean) =>
      {
         this.EMAIL.hasPermission()
         .then((isPermitted : boolean) =>
         {
            let email : any = {
               app 			: 'mailto',
               to: "mayaung@outlook.com",
               subject 		: "Carpark Finder Feedback",
               body 		: strContent
            };
            this.EMAIL.open(email);
         })
         .catch((error : any) =>
         {
            console.log('No access permission granted');
            console.dir(error);
         });
      })
      .catch((error : any) =>
      {
         console.log('User does not appear to have device e-mail account');
         console.dir(error);
      });
   }
   sendMessage() : void
   {
      // Retrieve the validated form fields
      let to 		: string		= "mayaung@outlook.com",
          Name : string = this.form.controls["strName"].value,
          ContactNo: string = this.form.controls["strContactNo"].value,
          Email: string = this.form.controls["strEmail"].value,
          subject 	: string		= "Carpark Finder Feedback",
          message 	: string		= this.form.controls["strContent"].value;

         this.sendEmail(to,Name,Email,subject, message);
   }
}
