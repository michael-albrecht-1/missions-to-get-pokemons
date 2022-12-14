import { Component, Inject, Input, OnInit } from '@angular/core';
import { first, map } from 'rxjs';
import { Pokemon } from '../../../domain/entity/pokemon';
import { PokemonType } from '../../../domain/entity/pokemon-type';
import { ISearchAPokemonByNumber } from '../../../usecases/ISearchAPokemonByNumber';

@Component({
  selector: 'pokemon-detail-miniature',
  templateUrl: './pokemon-detail-miniature.component.html',
  styleUrls: ['./pokemon-detail-miniature.component.scss'],
})
export class PokemonDetailMiniatureComponent implements OnInit {
  @Input() pokemonNumber!: string;

  pokemon: Pokemon | undefined;
  public currentPokemonTypes: PokemonType[] = [];

  constructor(
    @Inject('ISearchAPokemonByNumber')
    private iSearchAPokemonByNumber: ISearchAPokemonByNumber
  ) {}

  ngOnInit(): void {
    this.iSearchAPokemonByNumber
      .execute(this.pokemonNumber || '')
      .pipe(
        first(),
        map((pokemon: Pokemon) => (this.pokemon = pokemon))
      )
      .subscribe();
  }
}
