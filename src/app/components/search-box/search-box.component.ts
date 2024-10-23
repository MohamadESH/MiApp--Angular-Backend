import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'component-search-box',
  standalone: true,
  imports: [ButtonModule,InputTextModule],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit,OnDestroy {


  public value:string="";


  private debouncer: Subject<string>=new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string ="";

  @Input()
  public initialValue: string ="";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  emitValue(value:string):void{
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)
  }
  // searchById(id:string){

  //   //todo searchbyid() del servicio
  // }

}
