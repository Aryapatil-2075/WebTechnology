import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListData } from '../Service/list-data';
@Component({
  selector: 'app-home',
  imports: [FormsModule],//FormsModule is used for two way binding (ngModel)
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //One way Binding
  name:String = "Arya Patil"
  age:Number=21
  course:String="CSE(AIML)"



  path:String="img1.jpg"
  data:any[]=[]
  constructor(private studData:ListData)
  {
     this.data=studData.getData()
  }

  changeImage=()=>{
    if(this.path==="img1.jpg")
    {
      this.path="img2.png"
    }
    else{
      this.path="img1.jpg"
    }
  }
}
