import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import ImageZoom from "@/components/Base/ImageZoom";
import { formatCurrency } from "@/utils/helper";
import Table from "@/components/Base/Table";
import clsx from "clsx";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function Main() {

  const navigate = useNavigate();
  
  const gotoDetails = ()=>{
    navigate("/transaction-list");
  }
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col lg:h-10 gap-y-3 lg:items-center lg:flex-row cursor-pointer">
          <div className="text-lg font-medium group-[.mode--light]:text-white flex items-center" onClick={gotoDetails}>
            Orders
            <Lucide
              icon="ArrowRight"
              className="stroke-[1.3] w-3.5 h-3.5 sm:w-5 sm:h-5 mx-1 sm:mx-2"
            />
            <div className="text-sm sm:text-lg">
              #{transactions.fakeTransactions()[0].orderId}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 lg:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="ArrowLeft" className="stroke-[1.3] w-4 h-4 mr-3" />{" "}
              Prev Order
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="ArrowRight" className="stroke-[1.3] w-4 h-4 mr-3" />
              Next Order
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="Printer" className="stroke-[1.3] w-4 h-4 mr-3" />{" "}
              Print Order
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-5 mt-3.5">
          <div className="col-span-12 xl:col-span-3">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col gap-5">
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                    <div className="-mt-px">Transaction Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Purchase Date:</div>
                        {transactions.fakeTransactions()[0].orderDate}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">
                          Transaction Status:
                        </div>
                        <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px mr-auto sm:mr-0">
                          <span className="-mt-px">
                            {
                              transactions.fakeTransactions()[0].orderStatus
                                .name
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Payment Method:</div>
                        Direct bank transfer
                      </div>
                    </div>
                    {/* <div className="mt-1.5">
                      <Button className="w-full border-primary/20 text-primary/80 hover:bg-slate-50">
                        <Lucide
                          icon="PenSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Change Status
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                    <div className="-mt-px">Shipping Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">
                          Total Price ({_.random(2, 20)} items):
                        </div>
                        ${transactions.fakeTransactions()[0].amount}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">
                          Total Shipping Cost:
                        </div>
                        ${_.random(30, 100)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Banknote"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Grand Total:</div>$
                        {transactions.fakeTransactions()[0].amount}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                    <div className="-mt-px">Buyer Details</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Name:</div>
                        <a
                          href=""
                          className="underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          {transactions.fakeTransactions()[0].user.name}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Phone Number:</div>
                        {transactions.fakeTransactions()[0].user.phone}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                  <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                    <div className="-mt-px">Shipping Information</div>
                  </div>
                  <div className="p-5 mt-2.5 flex flex-col gap-5">
                    <div className="flex items-center">
                      <Lucide
                        icon="Clipboard"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Courier:</div>
                        Left4code Express
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Calendar"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Tracking Number:</div>
                        {_.random(1000000, 5000000)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lucide
                        icon="Clock"
                        className="w-4 h-4 mr-2.5 stroke-[1.3] text-slate-500"
                      />
                      <div className="flex flex-col flex-wrap w-full sm:items-center sm:flex-row gap-y-1">
                        <div className="sm:mr-auto w-54">Address:</div>
                        <a
                          href=""
                          className="flex items-center underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                        >
                          <Lucide
                            icon="MapPin"
                            className="w-3.5 h-3.5 mr-1.5"
                          />
                          View Address
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 xl:col-span-7 gap-7">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                  <div className="-mt-px">Event Transaction Details</div>
                </div>
                <div className="p-5 mt-2.5 flex flex-col gap-5">
                  <div className="overflow-auto xl:overflow-visible">
                    <Table className="border-b border-dashed border-slate-200/80">
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium bg-slate-50 border-slate-200/80 text-slate-500 border-y">
                              Item
                            </div>
                          </Table.Td>
                          {/* <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-right bg-slate-50 border-slate-200/80 text-slate-500 border-y">
                              Quantity
                            </div>
                          </Table.Td> */}
                          {/* <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-right bg-slate-50 border-slate-200/80 text-slate-500 border-y">
                              Rate
                            </div>
                          </Table.Td> */}
                          <Table.Td className="px-0 py-0 [&_div]:first:border-l [&_div]:last:border-r [&_div]:first:rounded-l-md [&_div]:last:rounded-r-md border-b-0">
                            <div className="px-5 py-4 font-medium text-right bg-slate-50 border-slate-200/80 text-slate-500 border-y">
                              Amount
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {_.take(transactions.fakeTransactions(), 1).map(
                          (faker, fakerKey) => (
                            <Table.Tr
                              // key={fakerKey}
                              className="[&_td]:last:border-b-0 [&_td]:first:pt-5 [&_td]:last:pb-5"
                            >
                              <Table.Td className="py-3.5 border-dashed dark:bg-darkmode-600">
                                <div className="flex items-center">
                                  <div className="w-11 h-11 image-fit">
                                    <Lucide
                                      icon={faker.category.icon}
                                      className="w-6 h-6 mt-2 text-theme-1 fill-primary/10 stroke-[0.8]"
                                    />
                                  </div>
                                  <div className="ml-5">{faker.orderId}</div>
                                </div>
                              </Table.Td>
                              {/* <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                {_.random(2, 5)}
                              </div>
                            </Table.Td> */}
                              {/* <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                $142.00
                              </div>
                            </Table.Td> */}
                              <Table.Td className="py-4 text-right border-dashed dark:bg-darkmode-600">
                                <div className="font-medium whitespace-nowrap">
                                  $142.43
                                </div>
                              </Table.Td>
                            </Table.Tr>
                          )
                        )}
                      </Table.Tbody>
                    </Table>
                  </div>
                  {/* <div className="flex flex-col gap-3.5 pr-5 mt-3 mb-5 ml-auto text-right">
                    <div className="flex items-center justify-end">
                      <div className="text-slate-500">Subtotal:</div>
                      <div className="w-20 font-medium sm:w-48 text-slate-600">
                        ${transactions.fakeTransactions()[0].amount}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="text-slate-500">Total:</div>
                      <div className="w-20 font-medium sm:w-48 text-slate-600">
                        ${transactions.fakeTransactions()[0].amount}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="text-slate-500">Tax:</div>
                      <div className="w-20 font-medium sm:w-48 text-slate-600">
                        ${_.random(30, 100)}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="text-slate-500">Amount paid:</div>
                      <div className="w-20 font-medium sm:w-48 text-slate-600">
                        ${transactions.fakeTransactions()[0].amount}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="text-slate-500">Due balance:</div>
                      <div className="w-20 font-medium sm:w-48 text-slate-600">
                        ${_.random(30, 100)}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400 relative mt-3">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                  <div className="-mt-px">Event Info</div>
                </div>
                <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                  <div className="mb-3 last:mb-0 relative">
                    <a href="" className="font-medium text-primary">
                      Transaction Completed.
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 mt-1.5 leading-relaxed text-slate-500 text-[0.8rem]">
                      Funds will be forwarded to the seller.
                    </div>
                    <div className="sm:w-1/2 my-3.5 p-1 border rounded-[0.6rem] bg-slate-50/80">
                      <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[0.6rem]">
                        <div className="h-20 overflow-hidden border image-fit border-slate-100 saturate-[.6] hover:saturate-100 cursor-pointer">
                          <ImageZoom
                            alt="Tailwise - Admin Dashboard Template"
                            src={
                              transactions.fakeTransactions()[0].products[0]
                                .images[0].path
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-1.5 text-xs text-slate-500">
                      25 Mar 2046, 10:28 AM
                    </div>
                  </div>
                  <div className="mb-3 last:mb-0 relative">
                    <a href="" className="font-medium text-primary">
                      The order has arrived.
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 mt-1.5 leading-relaxed text-slate-500 text-[0.8rem]">
                      Received by Calvin.
                    </div>
                    <div className="mt-1.5 text-xs text-slate-500">
                      23 Mar 2023, 08:28 AM
                    </div>
                  </div>
                  <div className="mb-3 last:mb-0 relative">
                    <a href="" className="font-medium text-primary">
                      The order has been sent.
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 mt-1.5 leading-relaxed text-slate-500 text-[0.8rem]">
                      The order is being shipped by courier.
                    </div>
                    <div className="mt-1.5 text-xs text-slate-500">
                      23 Mar 2023, 12:21 AM
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
