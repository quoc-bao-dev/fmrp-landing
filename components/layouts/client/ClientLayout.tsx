"use client";

import { usePathname } from "next/navigation";

import React, { useCallback, useEffect, useRef, useState } from "react";

// import HeaderContainerClient from '../header/HeaderContainerClient'
// import FooterContainer from '../footer/FooterContainer'

import { useDialogStore } from "@/stores/useDialogStores";
import { useAlertDialogStore } from "@/stores/useAlertDialogStore";
import FosoHeaderContainer from "@/components/layouts/header/header-foso/FosoHeaderContainer";
import FooterContainer from "@/components/layouts/footer/FooterContainer";
import FmrpHeaderContainer from "../header/header-fmrp/FmrpHeaderContainer";
import { DynamicSheet } from "../../common/sheet/DynamicSheet";
import { useSheetStores } from "../../../stores/useSheetStores";
import { dataFmrpPages } from "@/data/UrlHeaderFmrp";
import WidgetButton from "@/components/common/button/WidgetButton";
import RegisterButton from "@/components/common/button/RegisterButton";
import RegisterBttonNew from "@/components/common/button/RegisterBttonNew";

const ClientLayout = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) => {
  const { openSheetCustom } = useSheetStores();
  const pathname = usePathname();

  return (
    <>
      {/* header */}
      {dataFmrpPages.includes(pathname) && <FmrpHeaderContainer />}
      <FosoHeaderContainer />

      {children}

      {/* footer */}
      <FooterContainer />

      <WidgetButton />
      <RegisterButton />
      <RegisterBttonNew/>
      {openSheetCustom && <DynamicSheet />}
      {/* {openDialogCustom && <DialogCustom />} */}
      {/* {openAlertDialog && <AlertDialogCustom />} */}
    </>
  );
};

export default ClientLayout;
