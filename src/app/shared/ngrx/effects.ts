import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class Effects {
  constructor(private actions$: Actions) {}
}
