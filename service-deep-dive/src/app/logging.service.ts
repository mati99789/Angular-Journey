import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: String) {
    const timeStamp = new Date().toLocaleTimeString()
    console.log(`[${timeStamp}]: ${message}`)
  }
}
