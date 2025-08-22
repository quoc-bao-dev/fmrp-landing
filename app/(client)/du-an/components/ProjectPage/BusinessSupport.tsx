"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BusinessSupport = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="custom-container">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Bạn Đã Sẵn Sàng Nâng Tầm Thương Hiệu?{" "}
              <span className="text-[#53B086]">FOSO</span> Giúp Bạn Bắt Đầu Ngay
              Hôm Nay!
            </h2>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-[#53B086] hover:bg-[#53B086]/90 text-white font-semibold px-8 py-4 h-auto rounded-full text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Liên Hệ Ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[300px] h-[200px] lg:w-[400px] lg:h-[280px] xl:w-[500px] xl:h-[320px]">
              <Image
                src="/project/image-03.png"
                alt="Business Support - FOSO giúp nâng tầm thương hiệu"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;
