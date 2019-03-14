
export const ARTICLES :Article[] = [];

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

    var a = new Article("Lorem ipsum", "Dolor sit amet!", "https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg")
    ARTICLES.push(a);
    var a = new Article("Art title", "Dolor sit amet!", "https://teologiapolityczna.pl/assets/cms/ContentImage/2018/_resampled/ScaleWidthWyI4MDAiXQ/jp2-2.jpg")
    ARTICLES.push(a);
    var a = new Article("It's weird", "Dolor sit amet!", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    ARTICLES.push(a);
    var a = new Article("It's weird", "Dolor sit amet!", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    ARTICLES.push(a);
    var a = new Article("It's weird", "Dolor sit amet!", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    ARTICLES.push(a);