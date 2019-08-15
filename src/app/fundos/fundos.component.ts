import { Component, OnInit } from '@angular/core';
import { FundosService } from '../service/fundos.service';
import { Fundo } from '../model/fundo';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css']
})
export class FundosComponent implements OnInit {
  fundos: Fundo[] = [];

  constructor(private fundosService: FundosService) { }

  ngOnInit() {
    this.getAllFundos();
  }

  getAllFundos(): void {
    this.fundosService.getAllFundos()
      .subscribe(fundos => this.fundos = fundos);

  }

  formatedNumber(valor: number) {
    return "R$ "+valor.toLocaleString('pt-BR')+",00";
  }

}
