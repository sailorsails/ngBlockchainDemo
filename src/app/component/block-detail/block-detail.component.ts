import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';
import {BlockchainService} from '../../service/blockchain.service';
import { Block, LatestBlock } from '../../model/block';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss']
})
export class BlockDetailComponent implements OnInit {


  latestBlock: LatestBlock;
  blockDetail: Block;

  constructor(private route: ActivatedRoute, private service: BlockchainService) { }
  getLatestBlock():void{
   
    this.service.getLatestBlock()
    .subscribe((result) => 
      { this.latestBlock = result; 
        this.getBlockFromHash()
      }
    );
  }
  getBlockFromHash():void{
    const hashId = this.route.snapshot.paramMap.get('id');
    this.service.getBlockByHashId(hashId)
    .subscribe(result => this.blockDetail = result);
  }
  ngOnInit() {
    this.getLatestBlock();
  }

}
