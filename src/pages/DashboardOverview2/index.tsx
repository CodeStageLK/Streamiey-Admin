import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import users from "@/fakers/users";
import projects from "@/fakers/projects";
import projectDetails from "@/fakers/project-details";
import { FormSelect, FormInput, FormCheck } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import Button from "@/components/Base/Button";
import { Tab } from "@/components/Base/Headless";
import _ from "lodash";
import LoadingIcon from "@/components/Base/LoadingIcon";
import mountainImage from "@/assets/images/miscellaneous/cheer.png";
import Pagination from "@/components/Base/Pagination";
import transactions from "@/fakers/transactions";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef } from "react";
import clsx from "clsx";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import LineChart from "@/components/LineChart";
import { useNavigate } from "react-router-dom";
import EventCard from "@/components/EventCard";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();

  const navigate = useNavigate();

  const gotoForm = () => {
    navigate("/events/add-event");
  };
  
  const gotoSeeAll = ()=>{
    navigate("/events/all-events");
  }

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:justify-between md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white"></div>
          <div className="text-base font-medium group-[.mode--light]:text-white">
            <Button variant="primary" className="w-44" onClick={gotoForm}>
              <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Event
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:h-10 gap-y-3 md:justify-between md:flex-row">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Event live right now
          </div>
          <div className="text-base font-medium group-[.mode--light]:text-white"></div>
        </div>

        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 xl:col-span-12 p-1 box box--stacked">
            <div className="relative">
              <div className="overflow-hidden rounded-lg h-96 image-fit before:block before:absolute before:w-full before:h-2/6 before:bottom-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-neutral-900 before:to-transparent">
                <img
                  alt="Tailwise - Admin Dashboard Template"
                  className="rounded-md saturate-150"
                  src={mountainImage}
                />
                <div className="absolute inset-0 z-10 flex flex-col items-end justify-end gap-2 -mt-10 p-5 border bg-primary/[0.03] border-primary/5 rounded-lg">
                  <div className="flex flex-col justify-end">
                    {/* <div className="mt-3.5 text-lg font-medium text-slate-100">
                          Tailwise Pty Ltd.
                        </div> */}
                  </div>
                  <div className="md:text-right md:ml-auto text-slate-100">
                    <Button variant="danger">
                      LIVE
                      <LoadingIcon
                        icon="puff"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </Button>
                    <div className="mt-1 font-medium">
                      Sunday, 20th June 2022
                    </div>
                    <div className="flex flex-col gap-1 mt-1 text-lg font-bold">
                      <div>
                        Transfer latest & Euro 2022 reaction - England reach
                        semi-finals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     

      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-lg font-medium">Revenue Generated</div>
        </div>

        <div className="col-span-12 mb-5 2xl:col-span-9">
          <div>
            <div className="mt-3.5">
              <div className="flex flex-col gap-3 xl:flex-row ">
                <div>
                  <div className="z-10 gap-5  flex flex-col lg:flex-row xl:flex-col items-center xl:items-start xl:w-[500px] overflow-hidden flex-1 px-10 rounded-[0.6rem] bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] py-12 xl:py-9 relative before:content-[''] before:w-full before:h-[130%] before:bg-gradient-to-b before:from-black/[0.08] before:to-transparent before:absolute before:left-0 before:top-0 before:-rotate-[38deg] before:hidden before:xl:block before:-ml-[35%]">
                    <div>
                      <div className="text-base text-center text-white lg:text-left">
                        Total Revenue
                      </div>
                      <div className="flex items-center justify-center mt-2 lg:justify-start">
                        <div className="text-2xl font-medium text-white">
                          $92,464.00
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-2 lg:justify-start">
                        <div className="text-sm font-medium text-slate-400">
                          overall
                        </div>
                        <div className="flex items-center ml-2.5 border border-success/50 bg-success/50 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-white/90">
                          12%
                          <Lucide
                            icon="ChevronUp"
                            className="w-4 h-4 ml-px stroke-[1.5]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full p-5 sm:py-7 sm:px-8 border rounded-[0.6rem] border-slate-300/80 border-dashed">
                  <div className="flex flex-col sm:items-center sm:flex-row gap-x-3 gap-y-2">
                    <div className="relative">
                      <Lucide
                        icon="CalendarCheck2"
                        className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                      />
                      <FormSelect className="sm:w-44 pl-9">
                        <option value="custom-date">Custom Date</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </FormSelect>
                    </div>
                    <div className="relative">
                      <Lucide
                        icon="Calendar"
                        className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3]"
                      />
                      <Litepicker
                        value={generalReportFilter}
                        onChange={(e) => {
                          setGeneralReportFilter(e.target.value);
                        }}
                        options={{
                          autoApply: false,
                          singleMode: false,
                          numberOfColumns: 2,
                          numberOfMonths: 2,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="pl-9 sm:w-64 rounded-[0.3rem]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 mt-6 gap-y-5 sm:mt-8 sm:mb-4 lg:mt-6 xl:mb-0 md:flex-row">
                    <div className="grid grid-cols-2 gap-5 md:-mt-2 md:-mb-4 xl:gap-0">
                      <div className="flex flex-col justify-center flex-1 col-span-2 sm:col-span-1 md:col-span-2">
                        <div className="flex items-center mb-1.5">
                          <div className="text-base">1,728</div>
                          <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                            10%
                            <Lucide
                              className="w-4 h-4 ml-px stroke-[1]"
                              icon="ChevronUp"
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <span className="sm:max-w-[9rem] truncate">
                            From Overlay Ads
                          </span>
                          <Tippy as="a" content="Compared to last week">
                            <Lucide
                              className="w-3.5 h-3.5 ml-1.5 stroke-[1.3] text-slate-400"
                              icon="Info"
                            />
                          </Tippy>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:mx-auto md:-mt-2 md:-mb-4 xl:gap-0">
                      <div className="flex flex-col justify-center flex-1 col-span-2 sm:col-span-1 md:col-span-2">
                        <div className="flex items-center mb-1.5">
                          <div className="text-base">3,328</div>
                          <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                            32%
                            <Lucide
                              className="w-4 h-4 ml-px stroke-[1]"
                              icon="ChevronUp"
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <span className="sm:max-w-[9rem] truncate">
                            From Banner Ads
                          </span>
                          <Tippy as="a" content="Compared to last week">
                            <Lucide
                              className="w-3.5 h-3.5 ml-1.5 stroke-[1.3] text-slate-400"
                              icon="Info"
                            />
                          </Tippy>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 md:-mt-2 md:-mb-4 xl:gap-0">
                      <div className="flex flex-col justify-center flex-1 col-span-2 sm:col-span-1 md:col-span-2">
                        <div className="flex items-center mb-1.5">
                          <div className="text-base">549</div>
                          <div className="flex items-center ml-2 -mr-1 text-xs text-danger">
                            4%
                            <Lucide
                              className="w-4 h-4 ml-px stroke-[1]"
                              icon="ChevronDown"
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-slate-500">
                          <span className="sm:max-w-[9rem] truncate">
                            From VAST Ads
                          </span>
                          <Tippy as="a" content="Compared to last week">
                            <Lucide
                              className="w-3.5 h-3.5 ml-1.5 stroke-[1.3] text-slate-400"
                              icon="Info"
                            />
                          </Tippy>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 mt-4 box ">
          <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
            <div className="px-5 py-2 flex flex-col gap-3.5">
              <Preview>
                <LineChart height={200} />
              </Preview>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-lg font-medium">Upcoming Events</div>
        </div>
        <div className="mt-2 overflow-auto lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate">
            <Table.Tbody>
              {_.take(transactions.fakeTransactions(), 6).map(
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
                    <Table.Td className="w-60 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        Created on
                      </div>
                      <div className="ml-1.5 whitespace-nowrap text-primary">
                        {faker.user.joinedDate}
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1.5 text-xs text-slate-500 whitespace-nowrap">
                        Scheduled
                      </div>
                      <div className="ml-1.5 whitespace-nowrap text-primary">
                        {faker.user.Scheduled}
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] rounded-l-none rounded-r-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap"></div>
                      <div>
                        <Button
                          variant="danger"
                          elevated
                          rounded
                          className="w-40"
                        >
                          <LoadingIcon
                            icon="puff"
                            color="white"
                            className="w-4 h-4 mr-2"
                          />
                          Go live now
                        </Button>
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
                )
              )}
            </Table.Tbody>
          </Table>
        </div>
      </div>

      <div className="col-span-12">
        <div className="flex flex-col justify-between sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70 ">
          <div className="text-[0.94rem] font-medium">Recent Events</div>
          <a className="flex items-center font-medium text-gray cursor-pointer" onClick={gotoSeeAll}>
            All Events
            <Lucide icon="MoveRight" className="w-4 h-4 ml-1.5" />
          </a>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 -mx-5  ">
            {_.take(transactions.fakeTransactions(), 4).map(
              (faker, fakerKey) => (
                <EventCard faker={faker} key={fakerKey}/>
              )
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Main;
