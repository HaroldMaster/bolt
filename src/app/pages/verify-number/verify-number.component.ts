import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryCodeService } from '../../services/country-code.service';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.component.html',
  styleUrls: ['./verify-number.component.scss'],
})
export class VerifyNumberComponent implements OnInit {
  isValid !: boolean;
  countries!: Array<any>;
  aux: any;
  constructor(private codeCountry: CountryCodeService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.codeCountry.getCountries();
  }
  isAuth(event:boolean) {
    this.codeCountry.setIsAuth(event);
    this.router.navigate(['enter-code'])
  }
}
