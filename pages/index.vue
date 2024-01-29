<template>
  <div class="app-container">
    <div class="absolute z-0 h-screen w-screen">
      <div class="dashboard-layout relative flex h-screen w-screen flex-col overflow-hidden font-sans">

        <div class="flex-0 h-full overflow-hidden">
          <div class="dashboard-desktop-layout h-full w-full">
            <header class="qfw-header-container bg-light-3 z-1 main-header flex py-3 shadow-sm">
              <div class="relative w-full px-6">
                <div class="action-items flex items-center justify-end gap-x-4">
                  <section class="search-container flex grow justify-end">
                    <div
                      class="bg-light-1 border-light-1 main-header-searchbar border-dark-6 !bg-light relative ml-2 flex flex-grow rounded rounded border border-0 md:ml-0 md:border">
                      <div class="w-full">

                        <div class="border-radius-inherit relative w-full flex-grow">

                          <div class="border-radius-inherit relative">
                            <div
                              class="text-dark-4 absolute inset-0 left-2 my-auto flex h-6 w-6 items-center justify-center">
                              <i class="fas fa-search text-dark-6 custom-placeholder-icon mb-0.5 flex items-center"
                                style="font-size: 12px"></i>
                            </div>
                            <input id="search-input" data-testid="generic-input" aria-describedby="input-error-message"
                              aria-invalid="false" aria-required="false" type="text" name=""
                              class="placeholder-sm border-radius-inherit remove-number-selector custom-placeholder text-dark-2 border-light-3 placeholder-dark-2 h-10 w-full rounded-bl-lg rounded-tl-lg bg-transparent py-2 pl-9 pr-2 pr-3 text-sm font-semibold focus:outline-none"
                              placeholder="Tìm trong thư viện của tôi " autocomplete="off" lang="" maxlength="256"
                              tabindex="0" />
                          </div>
                          <div class="text-red flex pt-1 text-xs font-semibold" aria-live="assertive"
                            style="display: none">
                            <span class="mr-0.5 flex h-4 w-4 items-center justify-center"><i
                                class="far fa-exclamation-circle flex items-center" style="font-size: 11px"></i></span>
                          </div>

                        </div>

                      </div>
                      <div class="divider border-dark-5 my-2 border-r"></div>

                      <div class="selectbox-inner w-35">
                        <div class="select-box">
                          <div id="6" class="label text-dark-4 sr-only mb-1 ml-1 text-xs font-semibold">
                            (with selected value)
                          </div>
                          <div class="select relative inline-flex w-full">
                            <button id="7" type="button" data-testid="generic-select-box"
                              class="listbox-button text-dark-3 text-dark-2 box-border flex h-10 w-full cursor-pointer items-center rounded p-4 py-2 pl-2 pr-1 text-left text-sm font-semibold"
                              aria-haspopup="listbox" aria-labelledby="6 7" aria-expanded="false">

                              <div class="title w-full truncate text-sm" data-cy="select-box-value:"
                                aria-live="assertive">
                                Thư viện của tôi
                              </div>
                              <div class="ml-auto flex h-6 w-6 items-center justify-center" aria-hidden="true">
                                <i class="fas fa-caret-down text-dark-3 flex items-center" aria-hidden="true"></i>
                              </div>
                            </button>
                            <ul
                              class="listbox list bg-light-3 shadow-soft-high max-h-50 z-30 mt-10 w-full origin-top scale-y-0 transform overflow-y-auto rounded transition-transform"
                              aria-labelledby="6" role="listbox" activedescendant="9"
                              style="position: absolute; top: 2px">

                              <li id="8" data-cy=":quizizz-library" data-testid="generic-select-box-option-0"
                                class="option hover:bg-dark-5% border-b-dark-5% flex cursor-pointer border-2 border-transparent p-2"
                                role="option" aria-selected="false">

                                <div class="text-dark-2">
                                  <div class="item-title text-sm font-semibold">
                                    Thư viện

                                  </div>

                                </div>

                              </li>
                              <li id="9" data-cy=":my-library" data-testid="generic-select-box-option-1"
                                class="option hover:bg-dark-5% border-lilac bg-lilac-faded text-lilac border-lilac-faded flex cursor-pointer border-2 border-b-2 p-2"
                                role="option" aria-selected="true">

                                <div class="text-lilac">
                                  <div class="item-title text-sm font-semibold">
                                    Thư viện của tôi

                                  </div>

                                </div>

                              </li>
                              <li id="10" data-cy=":reports" data-testid="generic-select-box-option-2"
                                class="option hover:bg-dark-5% flex cursor-pointer border-2 border-transparent p-2"
                                role="option" aria-selected="false">

                                <div class="text-dark-2">
                                  <div class="item-title text-sm font-semibold">
                                    Báo cáo

                                  </div>

                                </div>

                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    class="notification border-dark-5% hover:bg-light-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded border">
                    <i class="fal fa-bell flex items-center" style="font-size: 14px"></i>
                  </section>
                  <button
                    class="base bg-lilac-faded text-lilac hover:text-lilac-light active:text-lilac-dark secondary relative flex flex !h-10 h-8 min-w-max items-center justify-center rounded px-4 py-1.5 text-xs font-semibold transition-colors duration-200 ease-in-out"
                    aria-label="TẠO NỘI DUNG MỚI" type="button" translate="no" data-testid="create-content-button">
                    <i class="fas fa-plus mr-2 flex items-center" style="font-size: 11px"></i><span class="title"
                      title="TẠO NỘI DUNG MỚI">TẠO NỘI DUNG MỚI</span>
                  </button>
                </div>

              </div>
            </header>
            <div class="qfw-main-navigation-container main-nav h-screen">
              <div
                class="main-navigation bg-light-3 border-light-1 w-50 flex h-full flex-col overflow-hidden border-r pb-6 pt-5 shadow-md">
                <a href="/admin" class="">
                  <section class="logo flex cursor-pointer items-center px-4">
                    <div>
                      <img src="https://cf.quizizz.com/img/qfw/Logo.png" class="h-10 object-contain" alt="logo" />
                    </div>
                  </section>
                </a>
                <div class="mt-6 flex flex-col gap-y-1 overflow-y-auto">
                  <div class="hover:bg-light-1 relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-home">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-home flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Trang chủ</span>
                    </div>

                  </div>
                  <div class="hover:bg-lilac-faded relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-library">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fas fa-folders text-lilac flex items-center" style="font-size: 12px"></i><span
                        class="text-lilac ml-2 whitespace-nowrap text-sm font-semibold">Thư viện</span>
                    </div>

                    <div class="active-pointer bg-lilac absolute right-0 h-4 w-[3px] rounded-bl-xl rounded-tl-xl"></div>
                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-ai-studio">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-sparkles flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Studio AI</span>
                      <div translate="no"
                        class="lozenge text-light bg-lilac inline-flex items-center rounded px-1.5 px-2 py-0.5 text-xs font-semibold">
                        <span class="">MỚI</span>
                      </div>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-courses">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-list-tree flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Khóa học</span>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-reports">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-chart-line flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Báo cáo</span>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-groups">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-users-medical flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Các nhóm</span>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-settings">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-gear flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Cài đặt</span>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-support">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-question flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Trợ giúp &amp; Hỗ trợ</span>
                    </div>

                  </div>
                  <div
                    class="hover:bg-light-1 v-popper--has-tooltip relative flex cursor-pointer items-center justify-between px-4 py-2"
                    data-testid="sidebar-option-logout">
                    <div class="flex items-center justify-start gap-2">
                      <i class="fal fa-sign-out flex items-center" style="font-size: 12px"></i><span
                        class="text-dark-4 ml-2 whitespace-nowrap text-sm">Đăng xuất</span>
                    </div>

                  </div>
                </div>
                <section class="footer flex grow flex-col justify-end">

                  <div class="bg-light z-1 relative mx-4 mt-5">

                    <div class="v-popper--has-tooltip flex w-max cursor-pointer items-center justify-start gap-x-2">
                      <div class="profile aspect-square h-10 w-10 overflow-hidden rounded-full">
                        <div class="h-full w-full">
                          <div class="vi-image bg-light h-full w-full object-cover">
                            <img class="lazy-img rounded-inherit h-full w-full object-cover" alt="Quiz image"
                              lazy="loaded"
                              src="https://lh3.googleusercontent.com/a/ACg8ocKSSE2Ar4uG7AqAU2C7m16dJKa_GQdVx-EBdwJz0_sp=s96-c?w=90&amp;h=90" />
                          </div>
                        </div>
                      </div>
                      <div class="details">
                        <div class="name text-dark-3 text-xs font-semibold">
                          <div>
                            <span class="v-popper--has-tooltip inline-block truncate align-bottom"
                              style="max-width: 110px">minhquang2kn_26940</span>
                          </div>
                        </div>
                        <div class="subtitle text-dark-4 text-tn mt-1">
                          <div>
                            <span class="inline-block align-bottom">abc</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="bg-light-1 main-content flex justify-center overflow-auto">
              <div class="my-library relative flex w-full flex-col items-center overflow-auto">

                <div class="my-library-layout my-library-layout-desktop px-8 pt-8">
                  <div class="navigation-drawer z-1 navigation-layout sticky top-8 flex flex-col gap-y-4 overflow-y-auto">
                    <div
                      class="justify-left text-dark-3 flex items-center px-3 pb-1 text-base font-bold md:h-8 md:p-0 md:text-xl">
                      <span>Thư viện của tôi</span>
                    </div>
                    <div class="divide-dark-10% flex flex-col divide-y">
                      <ul
                        class="flex flex-row flex-wrap gap-2 p-3 text-xs md:flex-col md:gap-y-1 md:p-0 md:pb-4 md:text-sm">
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light flex h-6 cursor-pointer items-center rounded border p-0 shadow-sm hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fas fa-archive text-lilac flex items-center px-2 font-semibold"
                                  style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="text-dark-2 truncate font-semibold">Tất cả nội dung</span>
                              </div>
                              <div class="flex items-center px-2 text-xs"></div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-list-tree flex items-center px-2 font-semibold"
                                  style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Khóa học</span>
                                <div translate="no"
                                  class="lozenge text-tn bg-lilac text-light-1 ml-2 inline-flex items-center rounded px-1 font-semibold">
                                  <span class="">Mới</span>
                                </div>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                1
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-user flex items-center px-2 font-semibold" style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Được tạo bởi tôi</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                3
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-file-import flex items-center px-2 font-semibold"
                                  style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Đã nhập</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                0
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-history flex items-center px-2 font-semibold"
                                  style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Trước đây đã sử dụng</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                0
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-heart flex items-center px-2 font-semibold" style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Được tôi thích</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                1
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-users flex items-center px-2 font-semibold" style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Được chia sẻ với tôi</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                0
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">
                          <li
                            class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 bg-light-3 md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-0 md:h-8 md:w-full md:border-0">
                            <button class="flex h-full flex-grow flex-row items-center justify-between" type="button">
                              <div
                                class="border-r-1 border-dark-10% flex h-full w-8 flex-row items-center justify-center md:border-0">
                                <i class="fal fa-file-alt flex items-center px-2 font-semibold"
                                  style="font-size: 12px"></i>
                              </div>
                              <div class="flex flex-grow items-center px-2">
                                <span class="truncate font-semibold">Bản thảo</span>
                              </div>
                              <div class="flex items-center px-2 text-xs">
                                0
                              </div>
                            </button>
                          </li>

                        </div>
                        <div class="md:w-full">

                        </div>
                      </ul>
                      <div>
                        <ul class="flex flex-col gap-2 p-3 text-xs md:gap-y-1 md:p-0 md:py-4 md:text-sm">
                          <div>
                            <section class="mb-2 flex">
                              <span class="text-dark-3 flex-1 text-sm font-bold"><span>đội của tôi</span></span>
                              <div class="text-dark-4 border-dark-6 cursor-pointer rounded border bg-transparent px-2">
                                <i class="far fa-circle-plus flex items-center" style="font-size: 12px"></i><span
                                  class="justify-left ml-1 text-xs font-semibold"><span>Mới</span></span>
                              </div>
                            </section>

                            <div>
                              <li
                                class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 folder-filter-btn text-dark-4 bg-light md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-2 md:h-8 md:w-full md:border-0">
                                <button type="button"
                                  class="relative flex h-full min-w-0 flex-grow flex-row items-center justify-between">
                                  <div class="border-r-1 border-dark-10% flex h-full flex-row items-center md:border-0">
                                    <i class="fal fa-user-group flex items-center px-2 font-semibold"
                                      style="font-size: 12px"></i>
                                  </div>
                                  <div class="flex min-w-0 flex-grow items-center px-2">
                                    <span class="truncate font-semibold">History</span>
                                  </div>
                                  <div class="folder-total-items flex justify-center px-2 text-xs">
                                    5
                                  </div>
                                </button>
                              </li>
                            </div>
                          </div>

                        </ul>

                      </div>
                      <div>
                        <ul class="flex flex-col gap-2 p-3 text-xs md:gap-y-1 md:p-0 md:py-4 md:text-sm">
                          <div>
                            <li class="mb-2 flex justify-start md:block">
                              <section class="mb-2 flex">
                                <span class="text-dark-3 flex-1 text-sm font-bold"><span>Bộ sưu tập của tôi</span></span>
                                <div class="text-dark-4 border-dark-6 cursor-pointer rounded border bg-transparent px-2">
                                  <i class="far fa-circle-plus flex items-center" style="font-size: 12px"></i><span
                                    class="justify-left ml-1 text-xs font-semibold"><span>Mới</span></span>
                                </div>
                              </section>

                            </li>
                            <div class="md:w-full">
                              <li
                                class="border-dark-6 text-dark-4 hover:bg-light hover:text-dark-2 collection-filter-btn text-dark-4 bg-light md:bg-light-1 flex h-6 cursor-pointer items-center rounded border p-0 hover:shadow-sm md:mb-2 md:h-8 md:w-full md:border-0">
                                <button
                                  class="relative flex h-full min-w-0 flex-grow flex-row items-center justify-between"
                                  type="button">
                                  <div class="border-r-1 border-dark-10% flex h-full flex-row items-center md:border-0">
                                    <i class="fal fa-folder flex items-center px-2 font-semibold"
                                      style="font-size: 12px"></i>
                                  </div>
                                  <div class="flex min-w-0 flex-grow items-center px-2">
                                    <span class="truncate font-semibold">quang</span>
                                  </div>
                                  <div class="collection-total-items flex justify-center px-2 text-xs">
                                    2
                                  </div>
                                </button>
                              </li>
                            </div>
                          </div>

                        </ul>

                      </div>
                    </div>
                  </div>
                  <div class="LibraryView bg-light library-view-layout md:bg-transparent" activefolderid="">
                    <div class="m-0 flex flex-col gap-y-4 p-0">

                      <div
                        class="myLibraryFilters bg-light-3 md:bg-light-1 md:min-h-8 flex flex-row justify-between px-3 py-4 md:items-center md:p-0">
                        <div></div>
                        <div class="flex">

                          <div class="field text-dark-4 bg-light-3 border-dark-6 relative h-6 rounded border text-sm">
                            <div id="12" class="chromium-scroll-fix-sr-only label sr-only">
                              Dropdown (no selected value)
                            </div>
                            <div class="dropdown relative flex rounded">
                              <button data-testid="dropdown" type="button" aria-haspopup="listbox" aria-labelledby="12 13"
                                aria-expanded="false"
                                class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                <i class="fal fa-filter mr-2 flex items-center" style="font-size: 12px"></i><span
                                  data-testid="dropdown-title" class="">Lọc theo: Tất cả</span>
                                <div class="relative ml-auto flex h-4 w-4 items-center justify-center">
                                  <i class="fas fa-caret-down flex items-center" aria-hidden="true"
                                    style="font-size: 11px"></i>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div
                            class="field text-dark-4 bg-light-3 border-dark-6 relative ml-2 h-6 rounded border text-sm">
                            <div id="15" class="chromium-scroll-fix-sr-only label sr-only">
                              Dropdown (with selected value) Alphabetical
                            </div>
                            <div class="dropdown relative flex rounded">
                              <button data-testid="dropdown" type="button" aria-haspopup="listbox" aria-labelledby="15 16"
                                aria-expanded="false"
                                class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                <i class="fal fa-sort mr-2 flex items-center" style="font-size: 12px"></i><span
                                  data-testid="dropdown-title" class="">Sắp xếp theo: Gần đây nhất</span>
                                <div class="relative ml-auto flex h-4 w-4 items-center justify-center">
                                  <i class="fas fa-caret-down flex items-center" aria-hidden="true"
                                    style="font-size: 11px"></i>
                                </div>
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>

                      <div class="flex flex-col">

                        <div>
                          <div class="flex flex-col gap-y-1">

                            <div>
                              <div issubscriptioncancelled="false">
                                <button id="quiz-card-65aa4461952ab76c202055cc" type="button" class="w-full">
                                  <div class="">
                                    <div aria-label="Quiz" tabindex="0" role="button"
                                      class="quiz-card min-w-82 md:min-w-initial md:border-dark-10% bg-light-3 hover:bg-light-2 relative flex cursor-pointer flex-col items-start rounded p-2 md:h-auto md:border">
                                      <div class="flex w-full flex-row">
                                        <div class="flex flex-col items-center">
                                          <div
                                            class="h-18 w-18 md:w-26 md:h-26 bg-lilac relative overflow-hidden rounded-sm">
                                            <div class="h-full w-full">
                                              <img class="lazy-img rounded-inherit h-full w-full object-contain"
                                                alt="Quiz image" lazy="loaded"
                                                src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&amp;h=200" />
                                            </div>
                                          </div>

                                        </div>
                                        <div class="flex w-full">
                                          <div class="content-container relative ml-3 flex w-full flex-col md:gap-1.5">

                                            <div class="text-dark-4 text-xxs flex items-center gap-2 font-semibold">
                                              <span>QUIZ</span>
                                              <div class="flex h-4 gap-2">
                                                <div translate="no"
                                                  class="lozenge text-tn bg-red-faded text-red inline-flex hidden items-center rounded-full px-1.5 font-semibold uppercase">
                                                  <span class="">BẢN NHÁP</span>
                                                </div>

                                              </div>
                                              <div class="absolute right-2 top-2">
                                                <div class="field relative">
                                                  <div id="18" class="chromium-scroll-fix-sr-only label sr-only">
                                                    Dropdown (no selected value)
                                                  </div>
                                                  <div class="dropdown relative flex rounded">
                                                    <button data-testid="dropdown" type="button" aria-haspopup="listbox"
                                                      aria-labelledby="18 19" aria-expanded="false"
                                                      class="0 hover:bg-dark-5% flex h-6 w-6 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded text-sm font-semibold">

                                                      <div class="relative flex h-4 w-4 items-center justify-center">
                                                        <i class="fas fa-ellipsis-v flex items-center" aria-hidden="true"
                                                          style="
                                                            font-size: 12px;
                                                          "></i>
                                                      </div>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="name flex flex-row justify-between text-base font-bold">
                                              <div class="w-full">
                                                <div class="flex w-full justify-between">
                                                  <div class="name overflow-hidden text-left md:h-6">
                                                    math one
                                                  </div>
                                                  <div>

                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div translate="no"
                                              class="text-dark-3 flex flex-row items-center justify-between text-xs">
                                              <div class="flex flex-row items-center">
                                                <div translate="no" class="mr-3.5">
                                                  <i class="far fa-list mr-0.5 flex items-center"
                                                    style="font-size: 12px"></i>
                                                  3 Câu hỏi
                                                </div>

                                                <div translate="no" class="mr-3.5">
                                                  <i class="fal fa-play mr-2 flex items-center"
                                                    style="font-size: 12px"></i>
                                                  0&nbsp;Phat
                                                </div>
                                              </div>

                                            </div>
                                            <div class="mt-1.5 flex items-center justify-between">
                                              <div class="text-tn flex items-center pr-2">
                                                <div>
                                                  <img
                                                    src="https://lh3.googleusercontent.com/a/ACg8ocKSSE2Ar4uG7AqAU2C7m16dJKa_GQdVx-EBdwJz0_sp=s96-c"
                                                    class="mr-2 h-6 w-6 rounded-full object-cover" alt="User" />
                                                </div>
                                                <div class="text-dark-4 flex items-center font-normal">
                                                  <a href="/profile/659d1aa4f13cee5dadc195a2"
                                                    class="max-w-20 userName mr-2 hover:underline">minhquang2kn_26940</a>
                                                  <div
                                                    class="bg-dark-4 max-w-20 mr-2 flex h-0.5 w-0.5 items-center justify-center rounded-full">
                                                  </div>
                                                  <div translate="no" class="time">
                                                    9 ngày&nbsp;<span>trước</span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="text-dark-2 flex gap-2">

                                                <div>
                                                  <div
                                                    class="field bg-dark-5% text-dark-2 relative flex justify-center rounded text-center">
                                                    <div id="21" class="chromium-scroll-fix-sr-only label sr-only">
                                                      Dropdown (no selected
                                                      value)
                                                    </div>
                                                    <div class="dropdown relative flex rounded">
                                                      <button data-testid="dropdown" type="button" aria-haspopup="listbox"
                                                        aria-labelledby="21 22" aria-expanded="false"
                                                        class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                                        <span data-testid="dropdown-title" class="text-xs">Hợp tác</span>
                                                        <div
                                                          class="relative ml-1 flex h-4 w-4 items-center justify-center">
                                                          <i class="fas fa-caret-down flex items-center"
                                                            aria-hidden="true" style="
                                                              font-size: 11px;
                                                            "></i>
                                                        </div>
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div>
                                                  <div data-testid="for-super-container" class="for-super">
                                                    <div
                                                      class="field text-light bg-lilac relative flex justify-center rounded text-center">
                                                      <div id="24" class="chromium-scroll-fix-sr-only label sr-only">
                                                        Dropdown (no selected
                                                        value)
                                                      </div>
                                                      <div class="dropdown relative flex rounded">
                                                        <button data-testid="dropdown" type="button"
                                                          aria-haspopup="listbox" aria-labelledby="24 25"
                                                          aria-expanded="false"
                                                          class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                                          <span data-testid="dropdown-title" class="text-xs">Chơi</span>
                                                          <div
                                                            class="relative ml-1 flex h-4 w-4 items-center justify-center">
                                                            <i class="fas fa-caret-down flex items-center"
                                                              aria-hidden="true" style="
                                                                font-size: 11px;
                                                              "></i>
                                                          </div>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div issubscriptioncancelled="false">
                                <button id="quiz-card-659e5aec9132373b9cf208aa" type="button" class="w-full">
                                  <div class="">
                                    <div aria-label="Quiz" tabindex="0" role="button"
                                      class="quiz-card min-w-82 md:min-w-initial md:border-dark-10% bg-light-3 hover:bg-light-2 relative flex cursor-pointer flex-col items-start rounded p-2 md:h-auto md:border">
                                      <div class="flex w-full flex-row">
                                        <div class="flex flex-col items-center">
                                          <div
                                            class="h-18 w-18 md:w-26 md:h-26 bg-green relative overflow-hidden rounded-sm">
                                            <div class="h-full w-full">
                                              <img class="lazy-img rounded-inherit h-full w-full object-contain"
                                                alt="Quiz image" lazy="loaded"
                                                src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=200&amp;h=200" />
                                            </div>
                                          </div>

                                        </div>
                                        <div class="flex w-full">
                                          <div class="content-container relative ml-3 flex w-full flex-col md:gap-1.5">

                                            <div class="text-dark-4 text-xxs flex items-center gap-2 font-semibold">
                                              <span>QUIZ</span>
                                              <div class="flex h-4 gap-2">
                                                <div translate="no"
                                                  class="lozenge text-tn bg-red-faded text-red inline-flex hidden items-center rounded-full px-1.5 font-semibold uppercase">
                                                  <span class="">BẢN NHÁP</span>
                                                </div>

                                              </div>
                                              <div class="absolute right-2 top-2">
                                                <div class="field relative">
                                                  <div id="27" class="chromium-scroll-fix-sr-only label sr-only">
                                                    Dropdown (no selected value)
                                                  </div>
                                                  <div class="dropdown relative flex rounded">
                                                    <button data-testid="dropdown" type="button" aria-haspopup="listbox"
                                                      aria-labelledby="27 28" aria-expanded="false"
                                                      class="0 hover:bg-dark-5% flex h-6 w-6 w-full cursor-pointer items-center justify-center whitespace-nowrap rounded text-sm font-semibold">

                                                      <div class="relative flex h-4 w-4 items-center justify-center">
                                                        <i class="fas fa-ellipsis-v flex items-center" aria-hidden="true"
                                                          style="
                                                            font-size: 12px;
                                                          "></i>
                                                      </div>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="name flex flex-row justify-between text-base font-bold">
                                              <div class="w-full">
                                                <div class="flex w-full justify-between">
                                                  <div class="name overflow-hidden text-left md:h-6">
                                                    aaaaaa
                                                  </div>
                                                  <div>

                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div translate="no"
                                              class="text-dark-3 flex flex-row items-center justify-between text-xs">
                                              <div class="flex flex-row items-center">
                                                <div translate="no" class="mr-3.5">
                                                  <i class="far fa-list mr-0.5 flex items-center"
                                                    style="font-size: 12px"></i>
                                                  3 Câu hỏi
                                                </div>

                                                <div translate="no" class="mr-3.5">
                                                  <i class="fal fa-play mr-2 flex items-center"
                                                    style="font-size: 12px"></i>
                                                  0&nbsp;Phat
                                                </div>
                                              </div>

                                            </div>
                                            <div class="mt-1.5 flex items-center justify-between">
                                              <div class="text-tn flex items-center pr-2">
                                                <div>
                                                  <img
                                                    src="https://lh3.googleusercontent.com/a/ACg8ocKSSE2Ar4uG7AqAU2C7m16dJKa_GQdVx-EBdwJz0_sp=s96-c"
                                                    class="mr-2 h-6 w-6 rounded-full object-cover" alt="User" />
                                                </div>
                                                <div class="text-dark-4 flex items-center font-normal">
                                                  <a href="/profile/659d1aa4f13cee5dadc195a2"
                                                    class="max-w-20 userName mr-2 hover:underline">minhquang2kn_26940</a>
                                                  <div
                                                    class="bg-dark-4 max-w-20 mr-2 flex h-0.5 w-0.5 items-center justify-center rounded-full">
                                                  </div>
                                                  <div translate="no" class="time">
                                                    18 ngày&nbsp;<span>trước</span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="text-dark-2 flex gap-2">

                                                <div>
                                                  <div
                                                    class="field bg-dark-5% text-dark-2 relative flex justify-center rounded text-center">
                                                    <div id="30" class="chromium-scroll-fix-sr-only label sr-only">
                                                      Dropdown (no selected
                                                      value)
                                                    </div>
                                                    <div class="dropdown relative flex rounded">
                                                      <button data-testid="dropdown" type="button" aria-haspopup="listbox"
                                                        aria-labelledby="30 31" aria-expanded="false"
                                                        class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                                        <span data-testid="dropdown-title" class="text-xs">Hợp tác</span>
                                                        <div
                                                          class="relative ml-1 flex h-4 w-4 items-center justify-center">
                                                          <i class="fas fa-caret-down flex items-center"
                                                            aria-hidden="true" style="
                                                              font-size: 11px;
                                                            "></i>
                                                        </div>
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div>
                                                  <div data-testid="for-super-container" class="for-super">
                                                    <div
                                                      class="field text-light bg-lilac relative flex justify-center rounded text-center">
                                                      <div id="33" class="chromium-scroll-fix-sr-only label sr-only">
                                                        Dropdown (no selected
                                                        value)
                                                      </div>
                                                      <div class="dropdown relative flex rounded">
                                                        <button data-testid="dropdown" type="button"
                                                          aria-haspopup="listbox" aria-labelledby="33 34"
                                                          aria-expanded="false"
                                                          class="flex h-6 w-full cursor-pointer items-center whitespace-nowrap rounded py-1 pl-2 pr-1 text-xs font-semibold">
                                                          <span data-testid="dropdown-title" class="text-xs">Chơi</span>
                                                          <div
                                                            class="relative ml-1 flex h-4 w-4 items-center justify-center">
                                                            <i class="fas fa-caret-down flex items-center"
                                                              aria-hidden="true" style="
                                                                font-size: 11px;
                                                              "></i>
                                                          </div>
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div
                                class="bg-light border-1 border-dark-6 flex cursor-pointer gap-4 rounded p-3 duration-100 hover:shadow">
                                <div
                                  class="bg-light-1 w-18 h-18 h-26 w-26 border-1 border-dark-6 flex shrink-0 items-center justify-center overflow-hidden rounded rounded-br-3xl"
                                  alt="quiz-image">
                                  <div class="image-preview flex h-full w-full items-center">
                                    <div class="flex h-full w-full shrink-0 items-center justify-center">
                                      <img src="https://cf.quizizz.com/img/empty-state/quiz-image-.png" alt=""
                                        class="src" />
                                    </div>

                                  </div>

                                </div>
                                <div class="flex w-full flex-col justify-between">
                                  <div class="flex justify-between">
                                    <div class="flex flex-col">
                                      <div class="flex items-center gap-2">
                                        <span class="text-dark-3 text-sm font-bold">qqqq</span>
                                        <div translate="no"
                                          class="lozenge bg-lilac-faded text-lilac inline-flex items-center rounded px-1.5 px-2 py-0.5 text-xs font-semibold uppercase">
                                          <i class="fas fa-list-tree mr-1 flex items-center"
                                            style="font-size: 11px"></i><span class="">KHÓA HỌC</span>
                                        </div>
                                      </div>
                                      <span class="text-dark-4 text-xs font-normal">1111</span>
                                    </div>

                                  </div>
                                  <div class="flex w-full items-center justify-between gap-2">
                                    <div class="flex items-center gap-1">
                                      <div class="flex items-center gap-2">
                                        <img
                                          src="https://lh3.googleusercontent.com/a/ACg8ocKSSE2Ar4uG7AqAU2C7m16dJKa_GQdVx-EBdwJz0_sp=s96-c"
                                          class="border-1 border-dark-5 h-6 w-6 rounded-full" alt="user-image" /><span
                                          class="text-dark-4 text-xs font-normal">minhquang2kn_26940</span>
                                      </div>
                                      <i class="fas fa-period text-dark-5 -mt-1.5 flex items-center"
                                        style="font-size: 12px"></i><span class="text-dark-4 text-xs font-normal">0 Hoạt
                                        động</span><i class="fas fa-period text-dark-5 -mt-1.5 flex items-center"
                                        style="font-size: 12px"></i><span class="text-dark-4 text-xs font-normal">18
                                        ngày&nbsp;<span>trước</span></span>
                                    </div>
                                    <button
                                      class="base bg-lilac text-light-3 hover:bg-lilac-light active:bg-lilac-dark primary relative flex flex h-8 min-w-max items-center justify-center rounded px-4 py-1.5 text-xs font-semibold transition-colors duration-200 ease-in-out"
                                      aria-label="Xem khóa học" type="button" translate="no" data-testid="generic-button">
                                      <span class="title" title="Xem khóa học">Xem khóa học</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div id="app-body-teleport" class="absolute z-20"></div>
            </div>
          </div>
        </div>
        <button data-quizizz="analytics-event-listener" type="button" class="hidden">
          x</button><a class="skip-link" aria-label="Chuyển đến nội dung chính" href="#app-body-container"><span>Chuyển
            đến Nội dung</span></a>
        <div class="absolute w-screen">

        </div>
        <svg class="svg-shapes-import invisible absolute hidden fill-current">
          <defs>
            <path id="rectangle" d="M0 0h100v100H0z" style="vector-effect: non-scaling-stroke"></path>
            <path id="triangle" d="m50 0 50 100H0z" style="vector-effect: non-scaling-stroke"></path>
            <path id="star"
              d="m51 1.618 11.424 35.159.112.345h37.331L69.96 58.852l-.294.213.112.345L81.202 94.57l-29.908-21.73-.294-.213-.294.214-29.908 21.729L32.222 59.41l.112-.345-.294-.214L2.134 37.122h37.331l.112-.345z"
              style="vector-effect: non-scaling-stroke"></path>
            <path id="line_2d" d="M0 0h100v95H0z" style="vector-effect: non-scaling-stroke"></path>
            <path id="arrow_2d" fill="none" stroke-linejoin="round" d="M0 50h100L90 80m10-30L90 20"
              style="vector-effect: non-scaling-stroke"></path>
            <circle id="ellipse" cx="50" cy="50" r="50" style="vector-effect: non-scaling-stroke"></circle>
            <rect id="rounded_rectangle" width="100" height="100" x="0" y="0" rx="10"
              style="vector-effect: non-scaling-stroke"></rect>
          </defs>
        </svg>
      </div>
    </div>
    <div id="overlay-layer-1" class="z-1 absolute"></div>
    <div id="modal-layer-2" class="z-5 absolute">

      <div class="z-9999 fixed top-0"></div>

    </div>
    <div id="modal-overlay-layer-3" class="absolute z-10">
      <div class="z-on-overlay fixed bottom-0 left-0 flex flex-col">
        <div enterclass="-translate-x-full" leaveclass="translate-x-0" class="flex flex-col"></div>
      </div>
      <div class="z-1 fixed bottom-0 left-0 flex flex-col">
        <div enterclass="-translate-x-full" leaveclass="translate-x-0" class="flex flex-col"></div>
      </div>
    </div>
    <div id="third-party-layer-4" class="absolute z-20">
      <div
        class="quizizz-help-button bg-purple-light text-light-3 fixed bottom-4 right-4 flex hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full print:hidden"
        style="margin-bottom: 0px; margin-right: 0px; z-index: 9">
        <button type="button" class="v-popper--has-tooltip flex h-full w-full items-center justify-center rounded-full">
          <i class="far fa-question flex items-center" style="font-size: 20px"></i>
        </button>
        <ul data-testid="generic-menu"
          class="context-menu bg-light-3 text-dark-3 border-dark-6 z-9999 absolute mb-12 w-56 select-none rounded-lg border text-sm shadow-lg"
          style="
            transform-origin: right bottom;
            bottom: 0px;
            right: 0px;
            display: none;
          ">
          <li class="menu-item relative flex h-9 items-center rounded-t-lg">
            <button type="button" class="flex h-full w-full items-center justify-between px-4 pt-1"
              data-testid="menu-item-help-center" style="outline: none">
              <div class="flex items-center">

                <div class="h-2.5 w-2.5"></div>
                <span class="pl-3">Trung tâm trợ giúp</span>
              </div>
            </button>
          </li>
          <li class="menu-item relative flex h-9 items-center">
            <button type="button" class="flex h-full w-full items-center justify-between px-4"
              data-testid="menu-item-contact-support" style="outline: none">
              <div class="flex items-center">

                <div class="h-2.5 w-2.5"></div>
                <span class="pl-3">Liên hệ hỗ trợ</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
