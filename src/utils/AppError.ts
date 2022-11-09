export class AppError {
  message: string;

  // é chamadao no momento em que a classe é instanciada
  constructor(message: string) {
    this.message = message;
  }
}