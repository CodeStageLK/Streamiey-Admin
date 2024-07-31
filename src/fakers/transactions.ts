import _ from "lodash";
import { formatCurrency } from "@/utils/helper";
import categories, { type Category } from "./categories";
import products, { type Product } from "./products";
import users, { type User } from "./users";
import transactionStatus, {
  type TransactionStatus,
} from "./transaction-status";
import dayjs from "dayjs";

interface Transaction {
  category: Category;
  orderId: string;
  user: User;
  products: Array<Product>;
  orderStatus: TransactionStatus;
  orderDate: string;
  amount: string;
}

const fakers = {
  fakeTransactions() {
    const transactions: Array<Transaction> = [];

    for (let i = 0; i < 10; i++) {
      transactions.push({
        category: categories.fakeCategories()[0],
        orderId: (() => {
          const romanNumerals = [
            "County Championship day three...",
            "FORMULA 1 PRE-SEASON TRACK S...",
            "2022 MEN'S INTERNATIONAL",
            "BahrainFORMULA 1 GULF AIR BAHRAIN GR...",
            "RUGBY AFRICA CUP 2022",
            "County Championship day three...",
            "FORMULA 1 PRE-SEASON TRACK S...",
            "2022 MEN'S INTERNATIONAL",
            "BahrainFORMULA 1 GULF AIR BAHRAIN GR...",
            "RUGBY AFRICA CUP 2022",
            "County Championship day three...",
            "FORMULA 1 PRE-SEASON TRACK S...",
            "2022 MEN'S INTERNATIONAL",
            "BahrainFORMULA 1 GULF AIR BAHRAIN GR...",
            "RUGBY AFRICA CUP 2022",
          ];
          const [randRoman2] = [romanNumerals[Math.floor(Math.random() * 10)]];
          return `${randRoman2}`;
        })(),
        // orderId: users.fakeUsers()[0],
        user: users.fakeUsers()[0],
        products: products.fakeProducts(),
        orderStatus: transactionStatus.fakeTransactionStatus()[0],
        orderDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        amount: formatCurrency(_.random(1000, 2000)),
      });
    }

    return _.shuffle(transactions);
  },
};

export default fakers;
