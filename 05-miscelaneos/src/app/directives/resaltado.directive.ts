import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _elementRef: ElementRef) {
    
    // _elementRef.nativeElement.style.backgroundColor = "yellow";

    console.log("Running...");
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') entroRaton() {
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') salioRaton() {
    this.resaltar(null);
  }

  private resaltar(color:string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
