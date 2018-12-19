import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Transaction } from 'src/app/model/transaction';
import {BlockchainService} from '../../service/blockchain.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  public transactionDetail: Transaction
  constructor(private route: ActivatedRoute, private service: BlockchainService) { }

  getTransaction():void{
    const transId = this.route.snapshot.paramMap.get('id');
    console.log("Transaction id:" + transId);
    if(!transId){
      return;
    }
  
    this.service.getTransactionDetailByHashId(transId)
    .subscribe((result)=>{
      this.transactionDetail = result;
      console.log("TRANSACTION RESULT: " + result);
    });
  }

  ngOnInit() {
    this.getTransaction();
  }

}
