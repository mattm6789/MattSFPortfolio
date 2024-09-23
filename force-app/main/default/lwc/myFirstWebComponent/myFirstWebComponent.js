import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            ID: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            ID: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ]
}