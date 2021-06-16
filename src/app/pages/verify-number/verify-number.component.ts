import { Component, OnInit } from '@angular/core';
import { CountryCodeService } from '../../services/country-code.service';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.component.html',
  styleUrls: ['./verify-number.component.scss']
})
export class VerifyNumberComponent implements OnInit {

  countries !: Array<any>
  constructor(private codeCountry : CountryCodeService) { }

  ngOnInit(): void {
    this.countries = this.codeCountry.getCountries();
  }

}
