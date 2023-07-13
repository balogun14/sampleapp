import { Component } from "@angular/core";


@Component({
    selector: 'courses',
    template: `

    <div (click)="onDivClicked()"><button (click)="onSave($event)">Save</button></div>
    
    `
})


export class CoursesComponent {
    onDivClicked() {
        console.log(" div was clicked")
    }
    onSave($event: any) {
        $event.stopPropagation()
        console.log("Button was Clicked", $event);
    }

}