import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalAComponent } from './components/modal-a/modal-a.component';
import { ModalBComponent } from './components/modal-b/modal-b.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/app.reducer';
import { ModalDirective } from './components/modal-container/modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalDirective,
    ModalContainerComponent,
    ModalAComponent,
    ModalBComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({modal: reducer}),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        // logOnly: environment.production, // Restrict extension to log-only mode
      }),
  ],
  entryComponents: [ModalAComponent, ModalBComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
