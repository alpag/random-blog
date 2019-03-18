export class Article{
    static id : number = 0;
    private id : number;
    private title : string;
    private content: string;
    private photoUrl : string;
    private publishDate : Date;
    
    constructor(titleToSet : string, contentToSet : string, 
        photoUrlToSet : string) {
            this.id = Article.id++;
            this.title = titleToSet;
            this.content = contentToSet;
            this.photoUrl = photoUrlToSet;
            this.publishDate = new Date();
        }
    }

