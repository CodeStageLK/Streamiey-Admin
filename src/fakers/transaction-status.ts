import _ from "lodash";
import { icons } from "@/components/Base/Lucide";

export interface TransactionStatus {
  name: string;
  textColor: string;
  icon: keyof typeof icons;
}

const fakers = {
  fakeTransactionStatus() {
    const transactionStatus: Array<TransactionStatus> = [
      { name: "Straming", textColor: "text-primary", icon: "Hourglass" },
      { name: "Ended", textColor: "text-danger", icon: "Clock4" },
      { name: "Not Started yet", textColor: "text-success", icon: "Truck" },
    ];

    return _.shuffle(transactionStatus);
  },
};

export default fakers;
