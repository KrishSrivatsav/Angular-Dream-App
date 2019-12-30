import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {
  @Input() myvar;

  constructor() { }

  ngOnInit() {
  }

}
