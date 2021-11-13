import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddChildComponent } from './add-child/add-child.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DialogTermsAndConditionsComponent } from './dialog-terms-and-conditions/dialog-terms-and-conditions.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { DialogConfirmationSaveChildComponent } from './dialog-confirmation-save-child/dialog-confirmation-save-child.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { AdminRegistroComponent } from './admin-registro/admin-registro.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogConfirmationDeleteChildComponent } from './dialog-confirmation-delete-child/dialog-confirmation-delete-child.component';
import { DialogUpdateChildComponent } from './dialog-update-child/dialog-update-child.component';
@NgModule({
  declarations: [
    AppComponent,
    AddChildComponent,
    DialogTermsAndConditionsComponent,
    DialogConfirmationSaveChildComponent,
    LoaderComponent,
    DialogMessageComponent,
    AdminRegistroComponent,
    DialogConfirmationDeleteChildComponent,
    DialogUpdateChildComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    ScreenTrackingService,UserTrackingService,
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    //Hace que se active la validacion con solo hacerle focus y dejar vacio los inputs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
