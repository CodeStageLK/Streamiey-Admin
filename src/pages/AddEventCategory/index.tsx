import Lucide from "@/components/Base/Lucide";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import { formatCurrency } from "@/utils/helper";
import _ from "lodash";
import {
  FormSelect,
  FormInput,
  FormLabel,
  FormHelp,
  FormCheck,
  FormSwitch,
  FormInline,
  InputGroup,
  FormTextarea,
} from "@/components/Base/Form";
import Breadcrumb from "@/components/Base/Breadcrumb";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const gotoDetails = () => {
    navigate("/categories");
  };
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col lg:h-10 gap-y-3 lg:items-center lg:flex-row cursor-pointer">
          <div
            className="text-lg font-medium group-[.mode--light]:text-white flex items-center"
            onClick={gotoDetails}
          >
            Categories
            <Lucide
              icon="ArrowRight"
              className="stroke-[1.3] w-3.5 h-3.5 sm:w-5 sm:h-5 mx-1 sm:mx-2"
            />
            <div className="text-sm sm:text-lg">Add New Category</div>
          </div>
        </div>
        <div className="flex flex-col md:h-10 gap-y-3 mt-4 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Add New Categories
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Add New Category
            </Button>
          </div> */}
        </div>
        <div className="mt-3.5">
          <div className="flex flex-col p-5 box">
            <div>
              <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                  <div className="-mt-px">form</div>
                </div>
                <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                  <div>
                    <FormLabel htmlFor="regular-form-1">
                      Category Name
                    </FormLabel>
                    <FormInput
                      id="regular-form-1"
                      type="text"
                      placeholder="Input text"
                    />
                  </div>
                  <div className="mt-3">
                    <FormLabel htmlFor="regular-form-5">Description</FormLabel>
                    <FormTextarea id="regular-form-5" placeholder="Disabled" />
                  </div>
                  <div className="mt-3">
                    <Button variant="primary" className="mt-5">
                      Submit
                    </Button>
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
