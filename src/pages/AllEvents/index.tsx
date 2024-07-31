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
import { useState, useRef } from "react";
import clsx from "clsx";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import EventCard from "@/components/EventCard";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };

  const navigate = useNavigate();
  
  const gotoDetails = ()=>{
    navigate("/events");
  }

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
      <div className="flex flex-col lg:h-10 gap-y-3 lg:items-center lg:flex-row cursor-pointer">
          <div
            className="text-lg font-medium group-[.mode--light]:text-white flex items-center"
            onClick={gotoDetails}
          >
            Events
            <Lucide
              icon="ArrowRight"
              className="stroke-[1.3] w-3.5 h-3.5 sm:w-5 sm:h-5 mx-1 sm:mx-2"
            />
            <div className="text-sm sm:text-lg">
              All Events
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="flex flex-col justify-between sm:items-center pb-5 mb-5 sm:flex-row">
          {/* <div className="text-[0.94rem] font-medium">Recent Events</div> */}
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 -mx-5  ">
            {_.take(transactions.fakeTransactions(), 20).map(
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
