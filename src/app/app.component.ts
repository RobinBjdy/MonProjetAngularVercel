import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;
  counterSubscription: Subscription;

  constructor(public auth: AuthService) {
    this.secondes = 0;
    this.counterSubscription = new Subscription;
  }
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.startObserv(counter);
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  startObserv(observable: Observable<number>) {
    observable.subscribe(
      (value) => {
        if (this.auth.isAuth) {
          this.secondes += 1;
        }
        else{
          this.secondes = 0;
        }
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
}


