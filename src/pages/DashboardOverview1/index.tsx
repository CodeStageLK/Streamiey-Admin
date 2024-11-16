import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import eCommerce from "@/fakers/e-commerce";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import EventCard from "@/components/EventCard";
import EventService from "@/services/EventService";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const navigate = useNavigate();
  const [recentEvents, setRecentEvents] = useState<any>([]);
  const [allEvents, setAllEvents] = useState<any>([]);

  useEffect(() => {
    try {
      EventService.getRecentEvents().then((res) => {
        if (res?.status === 200) {
          setRecentEvents(res?.data?.events);
          // console.log(res?.data?.events);
        } else {
        }
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      EventService.getAllEventsByAdmin().then((res) => {
        if (res?.status === 200) {
          setAllEvents(res?.data?.events);
          // console.log(res?.data?.events);
        } else {
        }
      });
    } catch (error) {}
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
      hour12: true, // To display the time in 12-hour format
      timeZone: "UTC", // Assuming you want to display it in UTC
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };

  const formatStatus = (input: string) => {
    return input
      .split("_") // Split the string into words by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(" "); // Join the words back together with spaces
  };

  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };

  const gotoSeeAll = () => {
    navigate("/events/all-events");
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-10 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            General Report
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-10">
          <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-4 box box--stacked">
            <div className="pl-5 pr-5 mt-3.5">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                <div className="text-base text-slate-500">Earnings</div>
                <div className="flex items-center mt-1 text-2xl font-medium">
                  <span className="text-[1.3rem]">$</span>
                  <span className="ml-px mr-1.5">{_.random(10000, 50000)}</span>
                  <span className="text-base mt-0.5">USD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 pl-5 pr-5 md:col-span-6 2xl:col-span-4 box box--stacked">
            <div className="pl-5 pr-5 mt-3.5">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                <div className="text-base text-slate-500">Total Events</div>
                <div className="flex items-center mt-1 text-2xl font-medium">
                  <span className="ml-px mr-1.5">{_.random(10, 30)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 pl-5 pr-5 md:col-span-6 2xl:col-span-4 box box--stacked">
            <div className="pl-5 pr-5 mt-3.5">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                <div className="text-base text-slate-500">Total Orders</div>
                <div className="flex items-center mt-1 text-2xl font-medium">
                  {/* <span className="text-[1.3rem]">$</span> */}
                  <span className="ml-px mr-1.5">{_.random(1000, 2000)}</span>
                  {/* <span className="text-base mt-0.5">USD</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-lg font-medium">Recent Events</div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto"></div>
        </div>
        <div className="mt-2 overflow-auto lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate">
            <Table.Tbody>
              {recentEvents &&
                recentEvents.map((event: any, index: number) => (
                  <Table.Tr key={index}>
                    <Table.Td className="box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <Lucide
                          icon={"Trophy"}
                          className="w-6 h-6 text-theme-1 fill-primary/10 stroke-[0.8]"
                        />
                        <div className="ml-3.5">
                          <p className="font-medium whitespace-nowrap">
                            {event?.eventName}
                          </p>
                          <div className="mt-1 text-xs text-slate-500 whitespace-nowrap">
                            {event?.Category?.catName}
                          </div>
                        </div>
                      </div>
                    </Table.Td>

                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1.5 text-xs text-slate-500 whitespace-nowrap">
                        Purchased Tickets
                      </div>
                      <div className="flex mb-1">
                        <div className="whitespace-nowrap">
                          {_.random(1000, 2000)}
                        </div>
                      </div>
                    </Table.Td>

                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        Status
                      </div>
                      <div
                        className={clsx([
                          "flex items-center",
                          event?.streamingStatus == "not_started"
                            ? "text-success"
                            : event?.streamingStatus == "streaming"
                            ? "text-primary"
                            : "text-danger",
                        ])}
                      >
                        <Lucide
                          icon={
                            event?.streamingStatus == "not_started"
                              ? "Truck"
                              : event?.streamingStatus == "streaming"
                              ? "Hourglass"
                              : "Clock4"
                          }
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ml-1.5 whitespace-nowrap">
                          {formatStatus(event?.streamingStatus)}
                        </div>
                      </div>
                    </Table.Td>

                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        Event Start Date
                      </div>
                      <div className="whitespace-nowrap">
                        {formatDate(event?.eventStartDateTime)}
                      </div>
                    </Table.Td>

                    <Table.Td className="w-20 relative py-0 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="flex items-center justify-center">
                        <Menu className="h-5">
                          <Menu.Button className="w-5 h-5 text-slate-500">
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide
                                icon="WalletCards"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              View Details
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="FilePen" className="w-4 h-4 mr-2" />
                              Edit Order
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                              Print Invoice
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                ))}
            </Table.Tbody>
            {/* <Table.Tbody>
              {_.take(transactions.fakeTransactions(), 5).map(
                (faker, fakerKey) => (
                  <Table.Tr key={fakerKey}>
                    <Table.Td className="box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <Lucide
                          icon={faker.category.icon}
                          className="w-6 h-6 text-theme-1 fill-primary/10 stroke-[0.8]"
                        />
                        <div className="ml-3.5">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.orderId}
                          </a>
                          <div className="mt-1 text-xs text-slate-500 whitespace-nowrap">
                            {faker.category.name}
                          </div>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1.5 text-xs text-slate-500 whitespace-nowrap">
                        Purchased Tickets
                      </div>
                      <div className="flex mb-1">
                        <div className="whitespace-nowrap">
                          {_.random(1000, 2000)}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        Status
                      </div>
                      <div
                        className={clsx([
                          "flex items-center",
                          faker.orderStatus.textColor,
                        ])}
                      >
                        <Lucide
                          icon={faker.orderStatus.icon}
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ml-1.5 whitespace-nowrap">
                          {faker.orderStatus.name}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        Event Start Date
                      </div>
                      <div className="whitespace-nowrap">{faker.orderDate}</div>
                    </Table.Td>
                    <Table.Td className="w-20 relative py-0 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="flex items-center justify-center">
                        <Menu className="h-5">
                          <Menu.Button className="w-5 h-5 text-slate-500">
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide
                                icon="WalletCards"
                                className="w-4 h-4 mr-2"
                              />{" "}
                              View Details
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="FilePen" className="w-4 h-4 mr-2" />
                              Edit Order
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                              Print Invoice
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                )
              )}
            </Table.Tbody> */}
          </Table>
        </div>
      </div>

      <div className="col-span-12">
        <div className="flex flex-col justify-between pb-5 mb-5 sm:items-center sm:flex-row">
          <div className="text-lg font-medium">Events</div>
          <a
            className="flex items-center font-medium cursor-pointer text-gray"
            onClick={gotoSeeAll}
          >
            All Events
            <Lucide icon="MoveRight" className="w-4 h-4 ml-1.5" />
          </a>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 -mx-5 ">
            {/* {_.take(transactions.fakeTransactions(), 4).map(
              (faker, fakerKey) => (
                <EventCard faker={faker} key={fakerKey} />
              )
            )} */}

            {_.take(allEvents, 4).map((event: any) => (
              // <></>
              <EventCard data={event} key={event?.eventID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
