import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from 'src/app/service/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const name = form.value['name'];
    const status = form.value['status'];
    const image = form.value['image'];
    this.appareilService.addAppareil(name, status, image);
    this.router.navigate(['/appareils']);
  }
}
