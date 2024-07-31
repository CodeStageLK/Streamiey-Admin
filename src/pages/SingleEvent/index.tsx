import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportLineChart3 from "@/components/ReportLineChart3";
import ReportLineChart4 from "@/components/ReportLineChart1";
import ReportDonutChart6 from "@/components/ReportDonutChart6";
import { FormInput, FormLabel, FormSelect } from "@/components/Base/Form";
import hotel from "@/fakers/hotel";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import { Tab } from "@/components/Base/Headless";
import Tippy from "@/components/Base/Tippy";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import users from "@/fakers/users";
import products from "@/fakers/products";
import mountainImage from "@/assets/images/miscellaneous/cheer.png";
import { useNavigate } from "react-router-dom";
import ReportBarChart4 from "@/components/ReportBarChart4";
import ReportBarChart3 from "@/components/ReportBarChart3";
import ReportBarChart6 from "@/components/ReportBarChart6";
import ReportBarChart from "@/components/ReportBarChart";
import ReportBarChart5 from "@/components/ReportBarChart5";
import VerticalBarChart from "@/components/VerticalBarChart";
import { Preview } from "@/components/Base/PreviewComponent";
import LineChart from "@/components/LineChart";
function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const navigate = useNavigate();

  const gotoDetails = () => {
    navigate("/events");
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12 2xl:col-span-12">
          <div className="flex lg:h-10 gap-y-3 lg:items-center lg:flex-row cursor-pointer">
            <div
              className="text-lg font-medium group-[.mode--light]:text-white flex items-center"
              onClick={gotoDetails}
            >
              <Lucide
                icon="ArrowLeft"
                className="stroke-[1.3] w-3.5 h-3.5 sm:w-5 sm:h-5"
              />
              <div className="text-sm sm:text-lg">
                Wimbledon tennis tournament
              </div>
            </div>
          </div>

          {/* <div>
            <div className="mt-3.5">
              <div className="flex flex-col gap-3 p-3 xl:flex-row box">
                <div>
                  <div className="w-80 h-80 overflow-hidden rounded-lg image-fit">
                    <img alt="event thumbnails" src={mountainImage} />
                  </div>
                </div>
                <div className="flex flex-col w-full p-5 sm:py-7 sm:px-8 rounded-[0.6rem] ">
                  <div className="flex flex-col flex-1 mt-6 gap-y-5 sm:mt-8 sm:mb-4 lg:mt-1 xl:mb-0 md:flex-row">
                    <div className=" mt-1 flex flex-col gap-2">
                      <div className="text-primary text-xl">
                        Wimbledon tennis tournament
                      </div>
                      <div className="">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.{" "}
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Aired On
                        </div>
                        <a href="" className="font-medium whitespace-nowrap">
                          Sunday, 20th May 2021
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Duration
                        </div>
                        <a href="" className="font-medium whitespace-nowrap">
                          1 hr 40mins
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Peak live viewers
                        </div>
                        <a href="" className="font-medium whitespace-nowrap">
                          12,756
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Average % completion
                        </div>
                        <a href="" className="font-medium whitespace-nowrap">
                          60%
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12 xl:col-span-8">
          <div>
            <div className="mt-3.5">
              <div className="flex flex-col gap-3 p-3 xl:flex-row box">
                <div>
                  <div className="w-80 h-80 overflow-hidden rounded-lg image-fit">
                    <img alt="event thumbnails" src={mountainImage} />
                  </div>
                </div>
                <div className="flex flex-col w-full p-5 sm:py-7 sm:px-8 rounded-[0.6rem] ">
                  <div className="flex flex-col flex-1 mt-6 gap-y-5 sm:mt-8 sm:mb-4 lg:mt-1 xl:mb-0 md:flex-row">
                    <div className=" mt-1 flex flex-col gap-2">
                      <div className="text-primary text-xl">
                        Wimbledon tennis tournament
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Aired On
                        </div>
                        <a href="" className="font-lg whitespace-nowrap">
                          Sunday, 20th May 2021
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Duration
                        </div>
                        <a href="" className="font-lg whitespace-nowrap">
                          1 hr 40mins
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Peak live viewers
                        </div>
                        <a href="" className="font-lg whitespace-nowrap">
                          12,756
                        </a>
                      </div>
                      <div className="">
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          Average % completion
                        </div>
                        <a href="" className="font-lg whitespace-nowrap">
                          60%
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-8 xl:col-span-8">
                <div>
                  <div className="grid grid-cols-12 gap-5 ">
                    <div className="col-span-6 p-1 md:col-span-6 2xl:col-span-3 ">
                      <div className="pl-5 pr-5 mt-3.5">
                        <div className="g:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                          <div className="text-xs text-slate-500">Viewers</div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(100, 500)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 p-1 md:col-span-6 2xl:col-span-3 ">
                      <div className="pl-5 pr-5 mt-3.5">
                        <div className="lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                          <div className="text-xs text-slate-500">Shares</div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 p-1 md:col-span-6 2xl:col-span-3 ">
                      <div className="pl-5 pr-5 mt-3.5">
                        <div className="lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                          <div className="text-xs text-slate-500">
                            Reactions
                          </div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 p-1 md:col-span-6 2xl:col-span-3 ">
                      <div className="pl-5 pr-5 mt-3.5">
                        <div className="lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                          <div className="text-xs text-slate-500">Comments</div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                  <div className="text-base font-medium mb-4">Streaming Link</div>
                    <FormInput
                      id="regular-form-1"
                      type="text"
                      placeholder="https://fms.12E5.edgecastcdn.net/0012E5/mp4:videos/8Juv1MVA-485.m3u8"
                      className="text-md text-stone-900"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <div>
            <div className="mt-3">
              <div className="flex flex-col md:h-full  md:items-center md:flex-row"></div>
              <div className="p-5 box">
                <div className="text-base font-medium mb-4">Impressions</div>
                <div className="mt-5">
                  <div className=" mx-auto">
                    <VerticalBarChart height={260} />
                  </div>

                  <div className="grid grid-cols-12 gap-5 mt-4">
                    <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-6 border-2 rounded-md border-slate-500">
                      <div className="pl-5 pr-5">
                        <div className="mt-2">
                          <div className="text-xs text-slate-500">
                            Favorite by
                          </div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                            <span className="ml-px mt-3 text-sm">users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-6 border-2 rounded-md border-slate-500">
                      <div className="pl-5 pr-5">
                        <div className="mt-2">
                          <div className="text-xs text-slate-500">
                            Added to playlists
                          </div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                            <span className="ml-px mt-3 text-sm">times</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5 mt-3">
                    <div className="col-span-12 md:col-span-6 2xl:col-span-6 rounded-md border-2 border-slate-500">
                      <div className="pl-5 pr-5">
                        <div className="mt-2">
                          <div className="text-xs text-slate-500">
                            Subscribed by
                          </div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                            <span className="ml-px mt-3 text-sm">users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 2xl:col-span-6 rounded-md border-2 border-slate-500">
                      <div className="pl-5 pr-5">
                        <div className="mt-2">
                          <div className="text-xs text-slate-500">
                            Added to watch lists
                          </div>
                          <div className="flex items-center mt-1 text-4xl font-medium">
                            <span className="ml-px mr-1.5">
                              {_.random(1000, 5000)}
                            </span>
                            <span className="ml-px mt-3 text-sm">times</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Button className="w-full mt-6 border-dashed border-slate-300 hover:bg-slate-50">
                    <Lucide
                      icon="ExternalLink"
                      className="stroke-[1.3] w-4 h-4 mr-2"
                    />{" "}
                    See Full Report
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        {/* <div className="col-span-8 xl:col-span-8">
          <div>
            <div className="p-5 mt-3.5 ">
              <div className="grid grid-cols-12 gap-5 ">
                <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 ">
                  <div className="pl-5 pr-5 mt-3.5">
                    <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                      <div className="text-xs text-slate-500">Viewers</div>
                      <div className="flex items-center mt-1 text-4xl font-medium">
                        <span className="ml-px mr-1.5">
                          {_.random(10000, 50000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 ">
                  <div className="pl-5 pr-5 mt-3.5">
                    <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                      <div className="text-xs text-slate-500">Viewers</div>
                      <div className="flex items-center mt-1 text-4xl font-medium">
                        <span className="ml-px mr-1.5">
                          {_.random(10000, 50000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 ">
                  <div className="pl-5 pr-5 mt-3.5">
                    <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                      <div className="text-xs text-slate-500">Viewers</div>
                      <div className="flex items-center mt-1 text-4xl font-medium">
                        <span className="ml-px mr-1.5">
                          {_.random(10000, 50000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 ">
                  <div className="pl-5 pr-5 mt-3.5">
                    <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                      <div className="text-xs text-slate-500">Viewers</div>
                      <div className="flex items-center mt-1 text-4xl font-medium">
                        <span className="ml-px mr-1.5">
                          {_.random(10000, 50000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
    </>
  );
}

export default Main;
