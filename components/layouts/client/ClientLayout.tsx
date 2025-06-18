import ButtonToTop from "@/components/common/button/ButtonToTop";
import RegisterBttonNew from "@/components/common/button/RegisterBttonNew";
import WidgetButton from "@/components/common/button/WidgetButton";
import DynamicSheetWrapper from "@/components/common/sheet/DynamicSheetWrapper";
import FooterContainer from "@/components/layouts/footer/FooterContainer";
import FosoHeaderContainer from "@/components/layouts/header/header-foso/FosoHeaderContainer";
import { dataFmrpPages } from "@/data/UrlHeaderFmrp";
import React from "react";
import FmrpHeaderContainer from "../header/header-fmrp/FmrpHeaderContainer";
import PathCheckerWrapper from "./PathCheckerWrapper";
import Image from "next/image";
import { IMAGES } from "@/constants/Images";

const ClientLayout = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) => {
  return (
    <div className="bg-[#052B1E]">
      {/* header */}
      <Image
          src={IMAGES.banner}
          alt="fmrp"
          width={1920}
          height={1080}
          priority
          quality={100}
          className="w-full h-10 lg:h-16 xl:h-auto object-cover"
        />
      <PathCheckerWrapper dataFmrpPages={dataFmrpPages}>
        <FmrpHeaderContainer />
      </PathCheckerWrapper>
      <FosoHeaderContainer />
      <div className="rounded-b-3xl bg-white relative z-0 md:z-10 ">
        {children}
      </div>

      {/* footer */}
      <div className="xl:sticky bottom-0 z-0 block static ">
        <FooterContainer />
      </div>

      <WidgetButton />
      <ButtonToTop />
      {/* <RegisterButton /> */}

      <RegisterBttonNew />
      <DynamicSheetWrapper />
    </div>
  );
};

export default ClientLayout;
