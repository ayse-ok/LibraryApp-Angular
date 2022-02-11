import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string ="";
  @Output() close = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    Swal.fire('Hata', this.message,'error');
  }

  onClose() {
    this.close.emit();
  }

}
