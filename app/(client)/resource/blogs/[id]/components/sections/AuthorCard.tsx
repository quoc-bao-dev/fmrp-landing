import FacebookOriginIcon from "@/components/icons/social-media/FacebookOriginIcon";
import LinkedOriginIcon from "@/components/icons/social-media/LinkedOriginIcon";
import XOriginIcon from "@/components/icons/social-media/XOriginIcon";
import Image from "next/image";
import Link from "next/link";

const AuthorCard = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 py-6 px-0 xl:px-6 2xl:px-12 rounded-3xl bg-white xl:shadow-[0px_1px_2px_0px_#1212170F,0px_1px_3px_0px_#1212171A]">
      <Link
        href="https://fososoft.com/blogs/an-bui-la-ai-hanh-trinh-kien-tao-giai-phap-cong-nghe-cho-doanh-nghiep-smes"
        target="_blank"
        className="size-16 flex-shrink-0 hidden xl:block"
      >
        <Image
          src="/Author/AnBui.jpg"
          alt="author"
          width={500}
          height={500}
          className="rounded-full object-cover w-full h-full"
        />
      </Link>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-4 w-full">
          <div className="flex gap-4 items-center">
            <Link
              href="https://fososoft.com/blogs/an-bui-la-ai-hanh-trinh-kien-tao-giai-phap-cong-nghe-cho-doanh-nghiep-smes"
              target="_blank"
              className="size-16 flex-shrink-0 xl:hidden"
            >
              <Image
                src="/Author/AnBui.jpg"
                alt="author"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full"
              />
            </Link>
            <div className="flex flex-col gap-1">
              <Link
                href="https://fososoft.com/blogs/an-bui-la-ai-hanh-trinh-kien-tao-giai-phap-cong-nghe-cho-doanh-nghiep-smes"
                target="_blank"
                className="text-[#15AA7A] font-bold text-2xl xl:text-3xl"
              >
                An Bùi
              </Link>
              <p className="text-sm xl:text-base font-bold text-[#809FB8] uppercase">
                chuyên gia công nghệ{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#15AA7A] size-9 rounded-full flex items-center justify-center">
              <FacebookOriginIcon className="size-4 text-white" />
            </div>
            <div className="bg-[#15AA7A] size-9 rounded-full flex items-center justify-center">
              <XOriginIcon className="size-4 text-white" />
            </div>
            <div className="bg-[#15AA7A] size-9 rounded-full flex items-center justify-center">
              <LinkedOriginIcon className="size-4 text-white" />
            </div>
          </div>
        </div>
        <p className="text-sm xl:text-base font-medium text-[#231F20] text-justify">
          Nhà lãnh đạo xuất sắc đứng đầu FOSO, với hơn một thập kỷ kinh nghiệm,
          là chuyên gia trong lĩnh vực phần mềm quản lý sản xuất, thiết kế ứng
          dụng di động và phát triển website chuyên nghiệp. Anh không chỉ mang
          đến những giải pháp công nghệ tiên phong, tối ưu hóa hiệu suất doanh
          nghiệp, mà còn truyền cảm hứng mạnh mẽ, đồng hành cùng các SMEs vươn
          xa, chinh phục thị trường với sự đột phá và bền vững.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
