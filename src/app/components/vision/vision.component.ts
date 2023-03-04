import { Component } from '@angular/core';
import { BlogService } from 'src/service/blog.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  
  vision: any;

  constructor(private bs: BlogService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bs.getVision().subscribe(
      data => {
        this.vision = data;
      }
    );
    
  }
}
