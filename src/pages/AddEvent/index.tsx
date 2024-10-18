import Lucide from "@/components/Base/Lucide";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import { useEffect, useRef } from "react";
import Litepicker from "@/components/Base/Litepicker";
import {
  FormInput,
  FormSelect,
  FormCheck,
  FormTextarea,
} from "@/components/Base/Form";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { ClassicEditor } from "@/components/Base/Ckeditor";
import Dropzone, { DropzoneElement } from "@/components/Base/Dropzone";
import TomSelect from "@/components/Base/TomSelect";

function Main() {
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const navigate = useNavigate();
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  const gotoDetails = () => {
    navigate("/events");
  };
  const [selectMultiple, setSelectMultiple] = useState(["1", "3"]);
  const dropzoneSingleRef = useRef<DropzoneElement>();

  useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    if (elDropzoneSingleRef) {
      elDropzoneSingleRef.dropzone.on("success", () => {
        // alert("Added file.");
      });
      elDropzoneSingleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }
  }, []);

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
            <div className="text-sm sm:text-lg">Add New Event</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-12 ">
        <div className="flex flex-col lg:items-center lg:flex-row gap-y-2">
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group active",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  1
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Basic Information
              </div>
            </div>
          </div>
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  2
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Ticket Information
              </div>
            </div>
          </div>
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  3
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Additional Details
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex flex-col box box--stacked">
            <div className="p-7">
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Event Title</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <FormInput
                      type="text"
                      className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                      placeholder={users.fakeUsers()[0].name.split(" ")[0]}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Description</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                    {/* <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Please provide a valid email address that you have access
                      to.
                    </div> */}
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <ClassicEditor value={editorData} onChange={setEditorData} />
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Event Start Date & Time</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <Litepicker
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }}
                    options={{
                      autoApply: false,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                  />
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Event End Date & Time</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <Litepicker
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }}
                    options={{
                      autoApply: false,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                  />
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Thumbnail Image (500px*500px)
                      </div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <Dropzone
                    getRef={(el) => {
                      dropzoneSingleRef.current = el;
                    }}
                    options={{
                      url: "https://httpbin.org/post",
                      thumbnailWidth: 150,
                      maxFilesize: 0.5,
                      maxFiles: 1,
                      headers: {
                        "My-Awesome-Header": "header value",
                      },
                    }}
                    className="dropzone"
                  >
                    <div className="text-lg font-medium">
                      Drop files here or click to upload.
                    </div>
                    <div className="text-gray-600">
                      This is just a demo dropzone. Selected files are
                      <span className="font-medium">not</span> actually
                      uploaded.
                    </div>
                  </Dropzone>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Banner Image (1920px*1080px)
                      </div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <Dropzone
                    getRef={(el) => {
                      dropzoneSingleRef.current = el;
                    }}
                    options={{
                      url: "https://httpbin.org/post",
                      thumbnailWidth: 300,
                      maxFilesize: 20,
                      maxFiles: 1,
                      headers: {
                        "My-Awesome-Header": "header value",
                      },
                    }}
                    className="dropzone"
                  >
                    <div className="text-lg font-medium">
                      Drop files here or click to upload.
                    </div>
                    <div className="text-gray-600">
                      This is just a demo dropzone. Selected files are
                      <span className="font-medium">not</span> actually
                      uploaded.
                    </div>
                  </Dropzone>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">
                        Trailer URL (YouTube embed URL)
                      </div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <FormInput
                      type="text"
                      className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Allowed Countries</div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <TomSelect
                      value={selectMultiple}
                      onChange={(e) => {
                        setSelectMultiple(e.target.value);
                      }}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </div>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Disallowed Countries</div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <TomSelect
                      value={selectMultiple}
                      onChange={(e) => {
                        setSelectMultiple(e.target.value);
                      }}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </div>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Country</div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormSelect>
                    <option value="1"> United Kingdom </option>
                    <option value="0"> Sri Lanka </option>
                  </FormSelect>
                </div>
              </div>

              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Publish</div>
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormSelect>
                    <option value="1"> Yes </option>
                    <option value="0"> No </option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="flex py-5 border-t md:justify-end px-7 border-slate-200/80">
              <Button
                variant="outline-primary"
                className="w-full px-10 md:w-auto border-primary/50"
              >
                <Lucide
                  icon="Pocket"
                  className="stroke-[1.3] w-4 h-4 mr-2 -ml-2"
                />
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
