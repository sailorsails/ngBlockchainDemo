export class Block {
    hash: string;
    ver: number;
    prev_block: string;
    mrkl_root: string;
    time: number;
    bits: number;
    nonce: number;
    n_tx: number;
    size: number;
    block_index: number;
    main_chain: boolean;
    height: number;
    received_time: number;
    relayed_by: string;
    tx: []

    // Example
    // "hash":"0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103",
    // "ver":1,
    // "prev_block":"00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a",
    // "mrkl_root":"935aa0ed2e29a4b81e0c995c39e06995ecce7ddbebb26ed32d550a72e8200bf5",
    // "time":1322131230,
    // "bits":437129626,
    // "nonce":2964215930,
    // "n_tx":22,
    // "size":9195,
    // "block_index":818044,
    // "main_chain":true,
    // "height":154595,
    // "received_time":1322131301,
    // "relayed_by":"108.60.208.156",
    // "tx":[--Array of Transactions--]
}

export class LatestBlock {

    hash: string;
    time: number;
    block_index: number;
    height: number;
    txIndexes: [];

    // Example
    // "hash":"0000000000000538200a48202ca6340e983646ca088c7618ae82d68e0c76ef5a",
    // "time":1325794737,
    // "block_index":841841,
    // "height":160778,
    // "txIndexes":[13950369,13950510,13951472]
}


