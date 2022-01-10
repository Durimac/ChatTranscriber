import { Component, Input } from '@angular/core';

@Component({
	selector: 'fontawesome-icon',
	templateUrl: './fontawesome-icon.component.html',
	styleUrls: ['./fontawesome-icon.component.scss']
})
export class FontawesomeIconComponent {

	private _icon: string = ""
	@Input()
	set icon(value: string) {
		this._icon = value
		this.getIconUnicode()
	}
	get icon(): string {
		return this._icon
	}

	@Input() iconClass: string = ""


	// ----- Private methods -----
	
	private getIconUnicode() {
		// Check if the icon is already a unicode
		if (/[^\u0000-\u00ff]/.test(this.icon)) return

		String.fromCharCode(parseInt(this.icon, 16))
	}
}
