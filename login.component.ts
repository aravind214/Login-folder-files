import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
export class login{
  // UserId:number=0;
  
  UserName:string="";
  Password:string="";

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData1:login[]=[];
  loginmember:login=new login();
  profile:string="";
  constructor(private service1:LoginService, private rou:Router, private http:HttpClient) { 
    this.service1.GetUserData().subscribe((rawdata:any) =>{
      this.loginData1=rawdata;
       console.log(this.loginData1);
    });
    }
  onSubmit(data:any){
//  this.loginmember=data1;
    let result=this.loginData1.filter(a=>a.UserName==data.username && a.Password==data.password)
this.profile=this.loginmember.UserName;
    if(result.length>0){
      this.rou.navigate(['Home',this.profile]);
    }
    else{
      alert("Please Enter Valid UserName & Password");
    }

    console.log(data);
    }

  ngOnInit(): void {
  }
  Register(){
    this.rou.navigate(['/signup']);
  }

}
