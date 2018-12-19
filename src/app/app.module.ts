import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule}    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDetailComponent } from './component/transaction-detail/transaction-detail.component';
import { BlockDetailComponent } from './component/block-detail/block-detail.component';
import { BlockchainService } from './service/blockchain.service';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailComponent,
    BlockDetailComponent,
    ChartComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BlockchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
