export class Address {
    hash160: string;
    address: string;
    n_tx: number;
    n_unredeemed: number;
    total_received: number;
    total_sent: number;
    final_balance: number;
    txs: [];

    // Example
    // "hash160":"660d4ef3a743e3e696ad990364e555c271ad504b",
    // "address":"1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F",
    // "n_tx":17,
    // "n_unredeemed":2,
    // "total_received":1031350000,
    // "total_sent":931250000,
    // "final_balance":100100000,
    // "txs":[--Array of Transactions--]
}
