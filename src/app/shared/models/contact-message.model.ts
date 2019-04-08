export class ContactMessage{

    private _authorName: string;
    public get authorName(): string {
        return this._authorName;
    }
    public set authorName(value: string) {
        this._authorName = value;
        console.log("ustawiam + " + value);
    }

    private _authorEmail: string;
    public get authorEmail(): string {
        return this._authorEmail;
    }
    public set authorEmail(value: string) {
        this._authorEmail = value;
        console.log("ustawiam + " + value);

    }

    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    
    constructor() {
        this.date = new Date();
    }

    

    }

