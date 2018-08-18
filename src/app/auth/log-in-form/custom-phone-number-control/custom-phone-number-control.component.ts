import { Component, OnInit, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { PhoneUtil } from '../../../shared/phone.util';

@Component({
  selector: 'mls-custom-phone-number-control',
  templateUrl: './custom-phone-number-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomPhoneNumberControlComponent),
      multi: true,
    }
  ]
})
export class CustomPhoneNumberControlComponent implements ControlValueAccessor {
  
  @ViewChild('input') input;

  constructor( private renderer: Renderer2) {}

  phoneNumberValue: string;
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value): void {
    if (value === '') {
      this.phoneNumberValue = '+1';
    } else {
      this.phoneNumberValue = PhoneUtil.format(value);
    }
        
    const div = this.input.nativeElement;
    this.renderer.setProperty(div, 'textContent', this.phoneNumberValue);
    
  }

  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  change( $event ) {
    // Angular does not know that the value has changed 
    // from our component, so we need to update her with the new value.
    this.onChange($event.target.textContent);
  }
}
