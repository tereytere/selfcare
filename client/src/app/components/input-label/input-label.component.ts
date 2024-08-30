import { Component, inject, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { JsonPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';




@Component({

    selector: 'input-label-component',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule, JsonPipe, CommonModule, CommonModule, ReactiveFormsModule],
    templateUrl: './input-label.component.html',
    styleUrl: './input-label.component.css'
})

export class InputLabelComponent {
    @Input() label: string = '';
    @Input() type: string = 'text';
    /*     @Input() FormControl: string = ''; */
    @Input() FormControl = new FormControl();
    @Output() valueChange = new EventEmitter<string>();

    control: FormControl = new FormControl('', Validators.required);

    get value(): string {
        return this.control.value;
    }

    set value(val: string) {
        this.control.setValue(val);
        this.valueChange.emit(val);
    }
}