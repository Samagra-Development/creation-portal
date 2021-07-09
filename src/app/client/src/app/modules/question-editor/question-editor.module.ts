import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionEditorRoutingModule } from './question-editor-routing.module';
import { CertificateDetailsComponent } from './components/certificate-details/certificate-details.component';
import { SuiModalModule } from 'ng2-semantic-ui-v9';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@sunbird/shared';
import { TelemetryModule } from '@sunbird/telemetry';
import { PlayerHelperModule } from '@sunbird/player-helper';

@NgModule({
  declarations: [
  CertificateDetailsComponent
],
  imports: [
    CommonModule,
    SuiModalModule,
    QuestionEditorRoutingModule,
    FormsModule,
    SharedModule,
    TelemetryModule,
    PlayerHelperModule
  ]
})
export class QuestionEditorModule { }
