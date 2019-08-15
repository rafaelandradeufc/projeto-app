import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fundo } from '../model/fundo';
import { FundosService } from '../service/fundos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fundo-detail',
  templateUrl: './fundo-detail.component.html',
  styleUrls: ['./fundo-detail.component.css']
})
export class FundoDetailComponent implements OnInit {
  cnpj: string;
  fundo: Fundo = new Fundo();

  constructor(private route: ActivatedRoute, private fundosService: FundosService, private location: Location) { }

  ngOnInit() {
    this.cnpj = this.route.snapshot.paramMap.get('id');
    this.getFundo();

  }

  goBack() {
    this.location.back();
  }


  getFundo() {
    this.fundosService.getFundo(this.cnpj).subscribe(fundo => { this.fundo = fundo[0]; });

  }
}
