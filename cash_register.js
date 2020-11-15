function checkCashRegister(price, cash, cid) {
    let cidSum = 0;
    let changeDue = cash * 100 - price * 100;
    let newCid = [];
    for (let i = 0; i < cid.length; i++) {
        newCid.push([cid[i][0], Math.round(cid[i][1] * 100)]);
        cidSum += newCid[i][1];
    }
    if (cidSum < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (changeDue === cidSum) {
        return { status: "CLOSED", change: cid };
    }
    let change = [];
    newCid.reverse();
    const units = { "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1 };
    for (let i = 0; i < newCid.length; i++) {
        if (changeDue >= units[newCid[i][0]] && newCid[i][1] > 0) {
            let changeCount = 0;
            while (changeDue > 0 && newCid[i][1] > 0) {
                if (changeDue < units[newCid[i][0]]) {
                    break;
                }
                changeDue -= units[newCid[i][0]];
                newCid[i][1] -= units[newCid[i][0]];
                changeCount++;
            }
            change.push([newCid[i][0], (changeCount * units[newCid[i][0]]) / 100]);
        }
    }
    if (changeDue === 0) {
        return { status: "OPEN", change: change };
    }
    return { status: "INSUFFICIENT_FUNDS", change: [] };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));