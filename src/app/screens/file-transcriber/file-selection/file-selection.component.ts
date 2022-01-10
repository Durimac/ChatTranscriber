import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from "ngx-dropzone";

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.scss']
})
export class FileSelectionComponent implements OnInit {
	@Output() fileSelected = new EventEmitter()
	
	// Data
	public selectedFiles: File[] = []

  constructor() { }

  ngOnInit() {
  }

	public onFileSelected(change: NgxDropzoneChangeEvent) {
		this.selectedFiles = change.addedFiles
	}

	public onFileRemoved(file: File) {
		this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
	}
}
