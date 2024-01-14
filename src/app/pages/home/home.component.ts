import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import dados from '../../../assets/game_cover.json';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, CardComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	gameCoverPath: String = '../../../assets/';
	gameCover: string = '';
	gameLabel: string = '';
	gameType: string = '';
	gamePrice: string = '';
	listaGameCover: any;

	ngOnInit(): void {
		if (dados) {
			this.listaGameCover = dados;
		}
		//
	}
}
