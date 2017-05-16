import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { Inicio } from '../pages/inicio/inicio';
import { Registro } from '../pages/registro/registro';
import { Preferencias } from '../pages/preferencias/preferencias';
import { Editarpref } from '../pages/editarpref/editarpref';
import { Perfil } from '../pages/perfil/perfil';

export const firebaseConfig = {
    apiKey: "AIzaSyBsJbp7Vq6QxIY5mXv20sBEecwKKebrJD8",
    authDomain: "unimeet-e0784.firebaseapp.com",
    databaseURL: "https://unimeet-e0784.firebaseio.com",
    projectId: "unimeet-e0784",
    storageBucket: "unimeet-e0784.appspot.com",
    messagingSenderId: "229117696046"
  };


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    Inicio,
    Registro,
    Preferencias,
    Editarpref,
    Perfil

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    Inicio,
    Registro,
    Preferencias,
    Editarpref,
    Perfil
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
