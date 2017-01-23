export class Posting {
  public timestamp: Date;
  constructor(public title: string, public price: string, public description: string, public author: string, public imageUrl: string = "http://images.clipartpanda.com/junk-clipart-junk-clipart-1.jpg") {
    this.timestamp = new Date();
  };
}
