"use client";

import { usePathname } from "next/navigation";

import React from "react";

// import HeaderContainerClient from '../header/HeaderContainerClient'
// import FooterContainer from '../footer/FooterContainer'
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
    <div className="bg-[#052B1E]">
      {/* header */}
      {dataFmrpPages.includes(pathname) && <FmrpHeaderContainer />}
      <FosoHeaderContainer />
      <div className="rounded-b-3xl bg-white relative z-0 md:z-10 ">
        {children}
      </div>

      {/* footer */}

      <div className="md:sticky bottom-0 z-0 block static ">
        <FooterContainer />
      </div>

      <WidgetButton />
      {/* <RegisterButton /> */}
      <RegisterBttonNew />
      {openSheetCustom && <DynamicSheet />}
      {/* {openDialogCustom && <DialogCustom />} */}
      {/* {openAlertDialog && <AlertDialogCustom />} */}
    </div>
  );
};

export default ClientLayout;
