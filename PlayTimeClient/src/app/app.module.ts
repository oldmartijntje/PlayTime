import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastPopupComponent } from './components/global/toast-popup/toast-popup.component';
import { AngularSplitModule } from 'angular-split';
import { EditorPageComponent } from './pages/main/editor-page/editor-page.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MONACO_PATH, MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { RailroadinkPageComponent } from './pages/other/railroadink-page/railroadink-page.component';
import { NotFoundPageComponent } from './pages/main/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookmarksPageComponent } from './pages/other/bookmarks-page/bookmarks-page.component';
import { CdkDrag } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        AppComponent,
        ToastPopupComponent,
        EditorPageComponent,
        RailroadinkPageComponent,
        NotFoundPageComponent,
        HomePageComponent,
        BookmarksPageComponent
    ],
    imports: [
        BrowserModule,
        AngularSplitModule,
        AppRoutingModule,
        FormsModule,
        MonacoEditorModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatCheckboxModule,
        CdkDrag
    ],
    providers: [{
        provide: MONACO_PATH,
        useValue: 'https://unpkg.com/monaco-editor@0.24.0/min/vs'
    },
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }