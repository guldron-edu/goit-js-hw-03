const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount,
      type,
    };
    return transaction;
  },

  deposit(amount) {
    if (amount > 0 && !Number.isNaN(Number(amount))) {
      this.balance += amount;
      const type = Transaction.DEPOSIT;
      const transaction = this.createTransaction(amount, type);
      this.transactions.push(transaction);
      return `На Ваш счёт внесено: ${amount}$`;
    }
    return 'Введите сумму которую хотите внести на счёт, она должна быть больше 0$';
  },

  withdraw(amount) {
    if (amount > 0 && !Number.isNaN(Number(amount))) {
      const type = Transaction.WITHDRAW;

      if (this.balance >= amount) {
        this.balance -= amount;
        const transaction = this.createTransaction(amount, type);
        this.transactions.push(transaction);
        return `Вы сняли со счета: ${amount}$`;
      } else {
        return 'Недостаточно средств';
      }
    }
    return 'Введите сумму которую хотите cнять со счёта , она должна быть больше 0$';
  },

  getBalance() {
    return `Ваш баланс составляет: ${this.balance}$`;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `Транзакции №${id} не существует`;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Сумма транзакция по ${type} ${total}$`;
  },
};

console.log(account.deposit(19));
console.log(account.withdraw(2));
console.log(account.withdraw(22));
console.log(account.withdraw(-11));
console.log(account.withdraw(3));
console.log(account.deposit(45));
console.log(account.deposit(12));
console.log(account.deposit('ss'));

console.log(account.getBalance());

console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(33));

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

console.table(account.transactions);
