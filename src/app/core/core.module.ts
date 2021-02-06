import { NgModule } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule ],
    exports: [],
    providers: [TransactionService],
})
export class CoreModule {}