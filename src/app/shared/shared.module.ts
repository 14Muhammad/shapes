import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {KatexModule} from 'ng-katex';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // material modules
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatSliderModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatButtonToggleModule,


    // 3rd Party
    KatexModule
  ],
  declarations: []
})
export class SharedModule {
}
