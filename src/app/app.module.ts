import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { NgxDropzoneModule } from "ngx-dropzone"
import { FileAnalysingComponent } from "src/app/screens/file-transcriber/file-analysing/file-analysing.component"
import { FileSelectionComponent } from "src/app/screens/file-transcriber/file-selection/file-selection.component"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FileTranscriberComponent } from "src/app/screens/file-transcriber/file-transcriber.component"
import { ComponentsModule } from "src/app/components/components.module"

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		NgxDropzoneModule
	],
	declarations: [
		AppComponent,
		FileTranscriberComponent,
		FileSelectionComponent,
		FileAnalysingComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
