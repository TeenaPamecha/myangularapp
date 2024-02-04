import { Component,EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 // encapsulation:ViewEncapsulation.ShadowDom,
  inputs:['guestData'],
  outputs:['childevent']
})
export class HomeComponent {
  guestData:any;
  isbold:any='bold';
  classessToApply:any='last other';
  isClass=true;
  imgpath:any='../assets/git.png';
  childevent=new EventEmitter();
  sendData(data:any){
    console.log('data:..',data);
    this.childevent.emit(data);
    console.log('after data:..',data);
  }
}
