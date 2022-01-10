import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Paths } from "src/app/constants/paths"
import { FileAnalysingComponent } from "src/app/screens/file-transcriber/file-analysing/file-analysing.component"
import { FileSelectionComponent } from "src/app/screens/file-transcriber/file-selection/file-selection.component"
import { FileTranscriberComponent } from "src/app/screens/file-transcriber/file-transcriber.component"

const routes: Routes = [
	{
		path: "",
		redirectTo: `/${Paths.FILE_TRANSCRIBER}`,
		pathMatch: "full"
	},
	{
		path: Paths.FILE_TRANSCRIBER,
		component: FileTranscriberComponent,
		children: [
			{
				path: Paths.FILE_TRANSCRIBER_SELECTION,
				pathMatch: "full",
				component: FileSelectionComponent
			},
			{
				path: Paths.FILE_TRANSCRIBER_ANALYSING,
				pathMatch: "full",
				component: FileAnalysingComponent
			}
		]
	},
	{
		path: "**",
		redirectTo: "",
		pathMatch: "full"
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
