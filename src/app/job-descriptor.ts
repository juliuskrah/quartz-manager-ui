export class JobDescriptor {
  public name?: string;
  public group?: string;
  public subject?: string;
  public messageBody?: string;
  public to?: string[];
  public cc?: string[];
  public bcc?: string[];

  constructor(
    name?: string,
    group?: string,
    subject?: string,
    messageBody?: string,
    to?: string[],
    cc?: string[],
    bcc?: string[]
  ) {
    this.name = name ? name : null;
    this.group = group ? group : null;
    this.subject = subject ? subject : null;
    this.messageBody = messageBody ? messageBody : null;
    this.to = to ? to : null;
    this.cc = cc ? cc : null;
    this.bcc = bcc ? bcc : null;
  }
}
