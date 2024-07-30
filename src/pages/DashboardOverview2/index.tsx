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

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:justify-between md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Event live right now
          </div>
          <div className="text-base font-medium group-[.mode--light]:text-white">
            <Button variant="primary" className="w-32">
              <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Event
            </Button>
          </div>
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
      {/* <div className="flex flex-col col-span-12 xl:col-span-6 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Contact Details</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col items-center pb-5 mb-5 border-b border-dashed gap-y-2 sm:flex-row border-slate-300/70">
              <div className="overflow-hidden rounded-full w-14 h-14 image-fit border-[3px] border-slate-200/70">
                <img
                  alt="Tailwise - Admin Dashboard Template"
                  src={users.fakeUsers()[0].photo}
                />
              </div>
              <div className="text-center sm:text-left sm:ml-4">
                <div className="text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {users.fakeUsers()[0].position}
                </div>
              </div>
              <div className="flex items-center px-3 py-1 font-medium border rounded-full sm:ml-auto border-success/10 bg-success/10 text-success">
                <div className="w-1.5 h-1.5 mr-2 rounded-full border border-success/50 bg-success/50"></div>{" "}
                High priority
              </div>
            </div>
            <div className="flex flex-col text-center gap-y-3 sm:flex-row">
              <div className="flex-1 border-dashed sm:border-r last:border-0">
                <div className="text-slate-500">Leads Generated</div>
                <div className="flex items-center justify-center mt-1">
                  <div className="text-base font-medium">2,176</div>
                  <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                    11%
                    <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                  </div>
                </div>
              </div>
              <div className="flex-1 border-dashed sm:border-r last:border-0">
                <div className="text-slate-500">Deals Closed</div>
                <div className="flex items-center justify-center mt-1">
                  <div className="text-base font-medium">2,027</div>
                  <div className="flex items-center ml-2 -mr-1 text-xs text-success">
                    2%
                    <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                  </div>
                </div>
              </div>
              <div className="flex-1 border-dashed sm:border-r last:border-0">
                <div className="text-slate-500">Meetings Scheduled</div>
                <div className="flex items-center justify-center mt-1">
                  <div className="text-base font-medium">342</div>
                  <div className="flex items-center ml-2 -mr-1 text-xs text-danger">
                    4%
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Invite Team Member</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
              <div>Everyone at project can access this file</div>
              <div className="relative mt-3">
                <FormInput
                  type="text"
                  placeholder="everyone@gmail.com"
                  className="sm:py-3"
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto sm:absolute inset-y-0 right-0 pl-3.5 pr-4 my-auto mt-2 sm:mt-auto mr-2 h-9 sm:h-8 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  <Lucide
                    icon="Send"
                    className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                  />
                  Send Invitation
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-5 mb-5 border-b border-dashed border-slate-300/70">
              {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                <div className="flex items-center gap-3.5" key={fakerKey}>
                  <div>
                    <div className="w-12 h-12 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        src={faker.photo}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:items-center gap-y-2.5 sm:flex-row">
                    <div>
                      <div className="font-medium">{faker.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {faker.email}
                      </div>
                    </div>
                    <div className="relative sm:ml-auto">
                      <Lucide
                        icon="Settings"
                        className="absolute inset-y-0 w-3.5 h-3.5 my-auto ml-2.5 stroke-[1.2]"
                      />
                      <FormSelect
                        className="bg-[length:15px_auto] sm:w-48 pl-8 pr-2.5 py-1.5 text-xs"
                        value={faker.position}
                        onChange={() => {}}
                      >
                        {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.position}>
                            {faker.position}
                          </option>
                        ))}
                      </FormSelect>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div>Share invitation link</div>
              <div className="flex gap-3 mt-3">
                <FormInput
                  type="text"
                  placeholder="everyone@gmail.com"
                  value="https://left4code.com/invitation?token=abcdefgh12345678"
                  disabled
                  className="text-slate-500"
                />
                <Tippy
                  content="Copy link"
                  as={Button}
                  variant="outline-secondary"
                >
                  <Lucide icon="Copy" className="w-4 h-4 stroke-[1.5]" />
                </Tippy>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 xl:col-span-6 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">Team Collaboration</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
              <div>Collaboration progress report</div>
              <div className="flex items-center w-full px-3 py-3 mt-3 border rounded-lg bg-success/10 border-success/10 text-success">
                <Lucide icon="Clock" className="w-5 h-5 mr-2" />
                Project kick-off date:
                <div className="ml-2">{projects.fakeProjects()[0].dueDate}</div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div className="flex flex-col items-center sm:flex-row gap-y-2">
                  <div className="sm:w-36 text-slate-500">Project Name</div>
                  <div className="flex items-center font-medium sm:ml-5 sm:h-7">
                    {projects.fakeProjects()[0].projectName}
                  </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-y-2">
                  <div className="sm:w-36 text-slate-500">Project Manager</div>
                  <div className="flex items-center h-5 sm:ml-5">
                    <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        src={projects.fakeProjects()[0].projectManager.photo}
                      />
                    </div>
                    <div className="ml-2.5 underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                      {projects.fakeProjects()[0].projectManager.name}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-y-2">
                  <div className="sm:w-36 text-slate-500">
                    Creative Director
                  </div>
                  <div className="flex items-center sm:ml-5 sm:h-7">
                    <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        src={projects.fakeProjects()[1].projectManager.photo}
                      />
                    </div>
                    <div className="ml-2.5 underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                      {projects.fakeProjects()[1].projectManager.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center w-full px-3 py-3 font-medium border rounded-lg bg-slate-50 text-slate-500">
                <Lucide
                  icon="KanbanSquare"
                  className="w-5 h-5 mr-2 stroke-[1.3]"
                />
                Project Details for Team Members
                <Menu className="ml-auto">
                  <Menu.Button as="a">
                    <Lucide
                      icon="MoreVertical"
                      className="w-5 h-5 stroke-slate-500/70 fill-slate-500/70"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy Link
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                      Delete
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                {_.take(projectDetails.fakeProjectDetails(), 4).map(
                  (faker, fakerKey) => (
                    <div
                      className="relative flex flex-col items-center gap-5 p-3 border border-dashed rounded-lg sm:flex-row border-slate-300/60"
                      key={fakerKey}
                    >
                      <div className="absolute top-0 right-0 mt-3 mr-3">
                        <FormCheck.Input
                          className="border"
                          type="checkbox"
                          checked={[true, false][_.random(0, 1)]}
                          onChange={() => {}}
                        />
                      </div>
                      <div>
                        <div className="w-40 h-24 rounded-md image-fit border-[3px] border-slate-200/70">
                          <img
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-md saturate-[0.7]"
                            src={faker.image}
                          />
                        </div>
                      </div>
                      <div className="-mt-1">
                        <a
                          href=""
                          className="block font-medium text-center sm:text-left"
                        >
                          {faker.title}
                        </a>
                        <div className="flex items-center mt-2.5 text-xs text-slate-500 dark:text-slate-500">
                          <Lucide
                            icon="Link"
                            className="w-2.5 h-2.5 mr-1.5 stroke-[2]"
                          />
                          <a
                            href=""
                            className="truncate underline decoration-dotted underline-offset-[3px] decoration-slate-300"
                          >
                            {faker.link}
                          </a>
                        </div>
                        <div className="flex items-center justify-center mt-4 sm:justify-start">
                          <div className="flex">
                            <div className="w-6 h-6 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.contributors[0].photo}
                                content={faker.contributors[0].name}
                              />
                            </div>
                            <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.contributors[1].photo}
                                content={faker.contributors[1].name}
                              />
                            </div>
                            <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                src={faker.contributors[2].photo}
                                content={faker.contributors[2].name}
                              />
                            </div>
                          </div>
                          <div className="ml-3 text-xs text-slate-500">
                            4+ Members
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">Upcoming Events</div>
        </div>
        <div className="mt-2 overflow-auto lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate">
            <Table.Tbody>
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
                      {/* <div className="flex mb-1">
                        <div className="w-5 h-5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[0].images[0].path}
                            content={faker.products[0].name}
                          />
                        </div>
                        <div className="w-5 h-5 -ml-1.5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[1].images[0].path}
                            content={faker.products[1].name}
                          />
                        </div>
                        <div className="w-5 h-5 -ml-1.5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="Tailwise - Admin Dashboard Template"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[2].images[0].path}
                            content={faker.products[2].name}
                          />
                        </div>
                      </div> */}
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
                      {/* <div
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
                      </div> */}
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
        <div className="flex flex-col-reverse flex-wrap items-center mt-3 flex-reverse gap-y-2 sm:flex-row">
          <Pagination className="flex-1 w-full mr-auto sm:w-auto">
            <Pagination.Link>
              <Lucide icon="ChevronsLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronLeft" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronRight" className="w-4 h-4" />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon="ChevronsRight" className="w-4 h-4" />
            </Pagination.Link>
          </Pagination>
          <FormSelect className="sm:w-20 rounded-[0.5rem]">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
      </div>
    </div>
  );
}

export default Main;
