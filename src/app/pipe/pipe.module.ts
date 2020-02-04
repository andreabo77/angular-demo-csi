import { NgModule } from '@angular/core';
import { LeftPadPipe } from './left-pad.pipe';
import { TruncatePipe } from './truncate.pipe';
import { EscapeHtmlPipe } from './escape-html.pipe';

@NgModule({
  declarations: [
    LeftPadPipe,
    TruncatePipe,
    EscapeHtmlPipe
  ],
  exports: [
    LeftPadPipe,
    TruncatePipe,
    EscapeHtmlPipe
  ]
})
export class PipeModule { }
