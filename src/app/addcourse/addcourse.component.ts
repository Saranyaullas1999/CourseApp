import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  courseTitle=""
  courseDuration=""
  courseDescription=""
  courseDate=""
  courseVenue=""


  readViews=()=>{
    let data={
    "courseTitle":this.courseTitle,
    "courseDuration":this.courseDuration,
    "courseDescription":this.courseDescription,
    "courseDate":this.courseDate,
    "courseVenue":this.courseVenue
  }
  console.log(data)
  this.myapi.addCourse(data).subscribe(
    (response)=>{
      console.log(response)
    }
  )

  }
  ngOnInit(): void {
  }

}
