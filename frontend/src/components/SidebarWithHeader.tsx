import { useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";
import { useSupabase } from "../hooks/useSupabase";
import { Link, Outlet } from "react-router-dom";

const SidebarWithHeader = () => {
  const supabase = useSupabase();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSignOut = () => {
    supabase.signOut();
  };

  return (
    <div>
      <Transition show={showSidebar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setShowSidebar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setShowSidebar(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-24 shrink-0 items-center">
                    <img className="h-16 w-auto" src={logo} alt="KioskAdmin" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          <li>
                            <Link
                              to="/app"
                              className="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <HomeIcon className="h-6 w-6 shrink-0 text-indigo-600"></HomeIcon>
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <UsersIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></UsersIcon>
                              Sales
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/app/inventory"
                              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <FolderIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></FolderIcon>
                              Inventory
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <CalendarIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></CalendarIcon>
                              Calendar
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <DocumentDuplicateIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></DocumentDuplicateIcon>
                              Documents
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            >
                              <ChartPieIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></ChartPieIcon>
                              Reports
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Link
                          to="/app/settings"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                          <Cog6ToothIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></Cog6ToothIcon>
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
        <div className="flex grow flex-col gap-y-2 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-24 shrink-0 items-center gap-x-3">
            <img className="h-16 w-auto" src={logo} alt="KioskAdmin" />
            <h1 className="font-semibold text-lg text-blue-900"></h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    {/* <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" --> */}
                    <Link
                      to="/app"
                      className="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <HomeIcon className="h-6 w-6 shrink-0 text-indigo-600"></HomeIcon>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <UsersIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></UsersIcon>
                      Sales
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/app/inventory"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <FolderIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></FolderIcon>
                      Inventory
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <CalendarIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></CalendarIcon>
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <DocumentDuplicateIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></DocumentDuplicateIcon>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <ChartPieIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></ChartPieIcon>
                      Reports
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mt-auto">
                <Link
                  to="/app/settings"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Cog6ToothIcon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"></Cog6ToothIcon>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setShowSidebar(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* <!-- Separator --> */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            ></div>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* <!-- Separator --> */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                ></div>

                {/* <!-- Profile dropdown --> */}
                <Menu as="div" className="relative">
                  <Menu.Button
                    className="-m-1.5 flex items-center p-1.5"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={supabase.session?.user.user_metadata.avatar_url}
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        {supabase.session?.user.user_metadata.full_name}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {/* <!-- Active: "bg-gray-50", Not Active: "" --> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active
                                ? "block px-3 py-1 text-sm leading-6 text-gray-900 bg-gray-50"
                                : "block px-3 py-1 text-sm leading-6 text-gray-900"
                            }`}
                          >
                            Your profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "block px-3 py-1 text-sm leading-6 text-gray-900 bg-gray-50"
                                : "block px-3 py-1 text-sm leading-6 text-gray-900"
                            }`}
                            onClick={() => {
                              handleSignOut();
                            }}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarWithHeader;
