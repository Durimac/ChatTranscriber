import { Component, OnInit } from '@angular/core';

enum FileTranscriberProcess {
	SELECT = 0,
	ANALYSE = 1,
	RESELECT = 2,
}

@Component({
  selector: 'app-file-transcriber',
  templateUrl: './file-transcriber.component.html',
  styleUrls: ['./file-transcriber.component.scss']
})
export class FileTranscriberComponent implements OnInit {

	// Template variables
	public FileTranscriberProcess = FileTranscriberProcess
	public selectedProcess: FileTranscriberProcess = FileTranscriberProcess.SELECT

  constructor() { }

  ngOnInit() {
  }

}
