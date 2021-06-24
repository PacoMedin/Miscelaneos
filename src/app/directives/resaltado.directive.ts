import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor( private el:ElementRef) { 
    
    //console.log("Directiva llamada..");

  }
  
  @HostListener('mouseenter') mouseEntro(){

    // console.log(this.nuevoColor);
    // this.el.nativeElement.style.backgroundColor = "red";

    this.resaltar( this.nuevoColor || 'yellow');

  }

  @HostListener('mouseleave') mouseSalio(){

    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);

  }

  private resaltar( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
