import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../common/shared/app-shared.module';
// import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content.routing';
import { ContentService } from './content.service';
import { DatasetsComponent } from './datasets/datasets.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
	declarations: [
		DatasetsComponent, 
		NotfoundComponent
	],
	imports: [
		CommonModule,
		ContentRoutingModule,
		AppSharedModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
	providers: [ContentService]
})
export class ContentModule { }
