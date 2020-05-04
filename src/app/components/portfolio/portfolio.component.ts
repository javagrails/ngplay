import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../../services/portfolio.model';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  types: string[];

  // private _selectedType: 'All' | 'Angular' | 'React' | 'Vue' = 'All';
  private _selectedType: string = 'All';

  get selectedType() {
    return this._selectedType;
  }

  set selectedType(newlySelectedType: string) {
    if (newlySelectedType !== this._selectedType) {
      this._selectedType = newlySelectedType;
      this.loadPortfolios(this._selectedType);
    }
  }

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.loadPortfolios(this._selectedType);
  }

  loadPortfolios(selectedType: string): void {
    this.portfolioService.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index);
      console.log(this.types);
      this.portfolios = data.filter(p => p.type === selectedType || selectedType === 'All');
    });
  }
}
