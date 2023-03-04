import { Component } from '@angular/core';
import { BlogService } from 'src/service/blog.service';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent {
  
  mision: any;


  constructor(private bs: BlogService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Test de mision')
    this.bs.getMision().subscribe(
      data => {
        this.mision = data;
      }
    );
  }

}
