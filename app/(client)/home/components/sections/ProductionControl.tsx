"use client";
import UnderlineCurveLinearSvg3 from '@/components/icons/underline/UnderlineCurveLinearSvg3';
import UnderlineCurveLinearSvg4 from '@/components/icons/underline/UnderlineCurveLinearSvg4';
import UnderlineCurveLinearSvg5 from '@/components/icons/underline/UnderlineCurveLinearSvg5';
import UnderlineCurveLinearSvg6 from '@/components/icons/underline/UnderlineCurveLinearSvg6';
import { IMAGES } from '@/constants/Images';
import Image from 'next/image';
import { BsClipboardData, BsJournals, BsLayers } from "react-icons/bs";
import { PiClockCounterClockwise } from 'react-icons/pi';

const ProductionControl = () => {
  return (
    <section className=" px-2 xl:px-0 flex flex-col gap-8 xl:gap-24 justify-center items-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-title-section-small text-[#1A2025] font-extrabold text-center capitalize">
          Từ ghi chép thủ công đến {" "}<br className='lg:hidden' />
          <span
            style={{
              background:
                "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            quản lý bằng hệ thống
          </span>
        </h2>
        <p className="text-title text-[#33404A] font-medium text-center">
          Tối ưu xưởng sản xuất, bắt đầu từ dữ liệu thật
        </p>
      </div>

      <div className="custom-container-padding-left flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-10 w-full">
        <div className="flex flex-col gap-6 xl:w-[45%] relative z-999">
          <div className="flex items-center gap-3">
            <Image
              width={100}
              height={100}
              src="/icons/fmrp/dizzy.svg"
              className="object-contain 3xl:size-9 size-7"
              alt="dizzy"
            />
            <h2 className="text-title-section-feature text-[#25387A] font-extrabold capitalize xl:whitespace-nowrap">
              <span className="relative inline-block w-fit px-2">
                <UnderlineCurveLinearSvg3
                  inView={true}
                  className="!-bottom-2"
                />
                <span className="relative z-10">Theo dõi sản xuất</span>
              </span>
              Theo thời gian thực
            </h2>
            <Image
              width={100}
              height={100}
              src="/icons/fmrp/Eight-Thirty.png"
              className="object-cover size-[50px] 2xl:size-[69px] -mt-10 z-50 relative"
              alt="dizzy"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Mọi lệnh sản xuất được cập nhật liên tục theo công suất và tiến độ thực tế, giúp bạn nắm nhanh trạng thái nguyên vật liệu và kiểm soát chi phí ngay khi phát sinh.
            </p>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Từ dữ liệu thực tế, bạn dễ chọn hướng xử lý phù hợp: tăng/giảm tải, đổi công đoạn, gia công, mua ngoài hoặc luân chuyển giữa các kho/xưởng.
            </p>
          </div>
        </div>
        <div className="xl:w-[55%] h-full relative flex-shrink-0 z-10">
          <Image
            src={IMAGES.blurGreen}
            width={200}
            height={200}
            quality={100}
            alt="blurGreen"
            className="absolute -top-[50%] -left-[0%] w-full object-cover flex-shrink-0 z-[1]"
          />
          <Image
            src={IMAGES.theoDoiSanXuat}
            width={1920}
            height={1080}
            quality={100}
            alt=""
            className="w-full object-cover [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))] xl:-my-10 z-10 relative"
          />
        </div>
      </div>

      <div className="custom-container-padding-right custom-container-padding-left flex flex-col items-center gap-6 w-full relative">
        <Image
          src={IMAGES.puzzlePiece}
          width={200}
          height={200}
          quality={100}
          alt="puzzle-piece"
          className="hidden xl:block absolute -top-[10%] left-[10%] w-[70px] 2xl:w-[100px] object-cover"
        />
        <h2 className="text-title-section-feature text-[#25387A] font-extrabold capitalize xl:whitespace-nowrap text-center">
          <span className="relative inline-block w-fit px-2">
            <UnderlineCurveLinearSvg4
              inView={true}
              className="!-bottom-4"
            />
            <span className="relative z-10">Chuẩn hóa quy trình,</span>
          </span>
          tối ưu xưởng sản xuất
        </h2>
        <div className="flex flex-col items-center gap-3">
          <p className="text-base-default-feature text-[#33404A] font-medium">
            FMRP giúp bạn giảm thiểu lãng phí bằng việc chuẩn hóa toàn bộ dữ liệu và quy trình trong cùng một nền tảng số.
          </p>
          <p className="text-base-default-feature text-[#33404A] font-medium">
            Vận hành trơn tru hơn, tinh gọn hơn, tiết kiệm thời gian và nâng cao hiệu suất hơn mỗi ngày.
          </p>
        </div>
        <Image
          src={IMAGES.chuanHoaQuyTrinh}
          width={1920}
          height={1080}
          quality={100}
          alt="chuan-hoa-quy-trinh"
          className="w-full object-cover -my-10 xl:-my-20"
        />
      </div>

      <div className="custom-container-padding-right flex flex-col xl:flex-row items-center gap-6 xl:gap-[72px] w-full">
        <div className="xl:w-[55%] relative pl-2">
          <Image
            src={IMAGES.blurOrangeLarge}
            width={200}
            height={200}
            quality={100}
            alt="blurGreen"
            className="absolute -top-[70%] left-[20%] w-full object-cover flex-shrink-0 z-[1]"
          />
          <Image
            src={IMAGES.luongSanLuong}
            width={1920}
            height={1080}
            quality={100}
            alt="lot-date"
            className="size-full object-cover -my-20 hidden xl:block z-10 relative"
          />
        </div>
        <div className="flex flex-col gap-6 xl:w-[45%]">
          <h2 className="mx-auto xl:mx-0 relative flex flex-col xl:flex-row w-fit text-title-section-feature text-[#25387A] font-extrabold capitalize whitespace-nowrap">
            Theo dõi và tổng hợp
            <span className="relative inline-block w-fit px-2">
              {/* <UnderlineCurveLinearSvg5
                inView={true}
                className="!-bottom-4"
              /> */}

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[298px] h-[73px] pointer-events-none">
                <Image
                  src={IMAGES.lightBulbGif}
                  width={200}
                  height={200}
                  quality={100}
                  className="size-full object-contain"
                  alt="lightBulb"
                />
              </div>
              <span className="relative z-10">lương sản lượng</span>
            </span>
            <Image
              src={IMAGES.lightBulb}
              width={200}
              height={200}
              quality={100}
              alt="chart-decreasing"
              className="absolute -top-4 -right-16 xl:-right-[15%] w-[70px] 2xl:w-[100px] object-cover"
            />
          </h2>
          <div className="xl:hidden relative">
            <Image
              src={IMAGES.blurOrangeLarge}
              width={200}
              height={200}
              quality={100}
              alt="blurGreen"
              className="absolute -top-[50%] left-[20%] w-full object-cover flex-shrink-0 z-[1]"
            />
            <Image
              src={IMAGES.luongSanLuong}
              width={1920}
              height={1080}
              quality={100}
              alt="lot-date"
              className="size-full object-cover z-10 relative"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PiClockCounterClockwise className="size-6 flex-shrink-0 text-[#15AA7A]" />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Dễ dàng theo dõi
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Theo dõi lương và giờ làm của công nhân dựa trên sản lượng thực tế, minh bạch và nhanh chóng.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BsClipboardData className="size-6 flex-shrink-0 text-[#15AA7A]" />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Tính lương rõ ràng – Quản lý dễ dàng
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Module hỗ trợ thống kê sản lượng, giờ làm và lương công nhân, giúp nhà quản lý kiểm soát chi phí nhân công chính xác hơn.
            </p>
          </div>
        </div>
      </div>

      <div className="custom-container-padding-left flex flex-col xl:flex-row items-center gap-6 xl:gap-[72px] w-full">
        <div className="flex flex-col gap-6 xl:w-[45%]">
          <h2 className="relative w-fit text-title-section-feature text-[#25387A] font-extrabold capitalize">
            <span className="relative inline-block w-fit px-2">
              <UnderlineCurveLinearSvg6
                inView={true}
                className="!-bottom-1"
              />
              <span className="relative z-10">Giá trị </span>
            </span>cho chủ doanh nghiệp
            <Image
              src={IMAGES.chartDecreasing}
              width={200}
              height={200}
              quality={100}
              alt="chart-decreasing"
              className="absolute bottom-0 -right-[15%] w-[40px] 2xl:w-[50px] object-cover"
            />
          </h2>
          <div className="xl:hidden relative">
            <Image
              src={IMAGES.bookmark}
              width={200}
              height={200}
              quality={100}
              alt="bookmark"
              className="absolute -top-4 -left-4 w-[70px] 2xl:w-[100px] object-cover flex-shrink-0 hidden xl:block"
            />
            <Image
              src={IMAGES.baoCao1}
              width={1920}
              height={1080}
              quality={100}
              alt="lot-date"
              className="size-full object-cover -my-5 z-10 relative"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BsJournals className="size-6 flex-shrink-0 text-[#15AA7A]" />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Tạm biệt giấy tờ rời rạc
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Tài liệu, lịch sử xử lý, số liệu sản xuất được lưu tập trung. Giảm phụ thuộc vào sổ tay, giảm thất lạc, tăng tính kiểm soát.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BsLayers className="size-6 flex-shrink-0 text-[#15AA7A]" />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Tăng năng suất, giảm chi phí, dễ mở rộng
              </h3>
            </div>
            <ul className="ml-9 xl:ml-3 text-base-default-feature text-[#33404A] font-medium list-disc list-inside">
              <li>Giảm lãng phí thời gian trong tổng hợp & đối soát</li>
              <li>Tăng tính minh bạch giữa kế hoạch – thực tế – chi phí</li>
              <li>Sẵn sàng mở rộng thêm xưởng mà không thay đổi quy trình</li>
            </ul>
          </div>
        </div>
        <div className="xl:w-[55%] relative">
          <Image
            src={IMAGES.bookmark}
            width={200}
            height={200}
            quality={100}
            alt="bookmark"
            className="absolute -top-4 -left-4 w-[70px] 2xl:w-[100px] object-cover flex-shrink-0"
          />
          <Image
            src={IMAGES.baoCao1}
            width={1920}
            height={1080}
            quality={100}
            alt="lot-date"
            className="size-full object-cover hidden xl:block z-[10] relative"
          />
          <Image
            src={IMAGES.blurGreen}
            width={200}
            height={200}
            quality={100}
            alt="blurGreen"
            className="absolute -top-[20%] -left-[20%] w-full object-cover flex-shrink-0 z-[1]"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductionControl
