import {ErrorHandler} from "@angular/core";
import { Injectable } from '@angular/core';
import {UNAUTHORIZED, BAD_REQUEST, FORBIDDEN} from "http-status-codes";
import {Router} from "@angular/router";

@Injectable()
export class CustomErrorHandle implements ErrorHandler {

  static readonly DEFAULT_ERROR_MESSAGE: string = "Se ha producido un error";
  
  constructor(){
  };
               

  public handleError(error: any) {
    console.error(error);
  }
  
  private showError(message:string){
  }
}