import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcourse',
  templateUrl: './viewallcourse.component.html',
  styleUrls: ['./viewallcourse.component.css']
})
export class ViewallcourseComponent implements OnInit {

  constructor(private myapis:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapis.viewData().subscribe(
    (data)=>{
      this.courseData=data
    }
    )
  }

  courseData:any=[]

  ngOnInit(): void {
  }

}
