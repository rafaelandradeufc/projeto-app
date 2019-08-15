import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Fundo } from './model/fundo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fundos = [{
      aplicacao_minima: 5000,
      classe: "Fundo Multimercado",
      cnpj: "34.669.263/0001-56",
      gestor: "ut enim ad minima veniam",
      liquidez: "D+1",
      nome: "at vero eos et accusamus et iusto odio dignissimos",
      perfil: "agressivo",
      rentabilidade: 16.72,
      score: "6.8"
    },
    {
      aplicacao_minima: 1000,
      classe: "Fundo Multimercado",
      cnpj: "24.339.263/0001-56",
      gestor: "lorem ipsum dolor sit amet",
      liquidez: "D+29",
      nome: "ducimus qui blanditiis praesentium voluptatum deleniti",
      perfil: "moderado",
      rentabilidade: 11.72,
      score: "5.8"
    },
    {
      aplicacao_minima: 1000,
      classe: "Fundo Multimercado",
      cnpj: "14.669.103/0101-56",
      gestor: "consectetur adipiscing elit",
      liquidez: "D+29",
      nome: "atque corrupti quos dolores et quas molestias excepturi sint sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi",
      perfil: "moderado",
      rentabilidade: 19.72,
      score: "9.2",
    }];

    const fundos_detail = [
      {
        cnpj: "14.669.103/0101-56",
        text: "Quo at debitis docendi, no usu detracto lobortis. Diceret debitis omittam cum te, eos cu scriptorem voluptatibus, te amet eius facilis eam. Mel an autem iriure adipisci. Ne per impetus convenire quaerendum, probo feugiat insolens nam et"
      },

      {
        cnpj: "24.339.263/0001-56",
        text: "Lorem ipsum dolor sit amet, alia mucius ut mea, veniam petentium instructior ne nec. Pri at epicurei omittantur appellantur. Vim et elit malorum, diam choro nonumes has et. No quaeque aliquid albucius vel, vim libris epicuri referrentur eu. No mei hinc quas omittantur"
      },
      {
        cnpj: "34.669.263/0001-56",
        text: "His eu inani copiosae consequuntur, eu autem timeam nusquam pro, alia magna laoreet ea sit. Ne pri legere iriure perpetua. Nullam populo prompta sed te. Nulla laboramus nec ei. Vel eu deleniti noluisse"
      }
    ];


    return { fundos: fundos, fundos_detail: fundos_detail };
  }


}