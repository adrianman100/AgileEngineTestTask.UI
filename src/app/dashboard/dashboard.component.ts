import {
  Component,
  ViewChild
} from '@angular/core';
import {
  TransactionService
} from '../core/services/transaction.service';
import {
  MatAccordion
} from '@angular/material/expansion';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
  public data: any;
  transactionList: any;
  panelOpenState = false;

  @ViewChild('accordion', {
    static: true
  }) accordion: MatAccordion

  constructor(private transactionService: TransactionService) {
  
  }

  ngOnInit(): void {
    this.transactionService.getTransactions()
      .subscribe(response => {
        this.transactionList = response;
      })
  }

  beforePanelClosed(panel: any) {
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel: any) {
    this.transactionService.getTransactionById(panel.id)
    .subscribe(response => {
        panel.effectiveDate = response.effectiveDate;
        panel.type = response.type;
        panel.amount = response.amount;
    })
    console.log("Panel going to  open!");
  }

  afterPanelClosed(e) {
    console.log("Panel closed!");
  }
  afterPanelOpened(e) {
    console.log("Panel opened!");
  }


  closeAllPanels() {
    this.accordion.closeAll();
  }
  openAllPanels() {
    this.accordion.openAll();
  }
}
