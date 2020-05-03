import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../../services/portfolio.model';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'All' | 'Angular' | 'React' | 'Vue' = 'All';

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.get().subscribe(data => {
      this.portfolios = data;
    });
  }

}
