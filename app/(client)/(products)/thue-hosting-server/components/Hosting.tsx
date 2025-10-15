import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import Link from 'next/link'

const Hosting = () => {
  return (
    <div className='relative'>
      <div className='custom-container-new bg-gradient-to-r from-[#B283FF]/20 to-[#74C8F3]/20 rounded-[32px]'>
        <div className='lg:px-[72px] flex flex-col lg:flex-row items-center justify-center lg:gap-[72px] pb-8 lg:pb-0'>
          <Image src={IMAGES.hosting} alt='hosting' width={1000} height={1000} className='w-[60%] lg:w-[40%] h-full object-cover' />
          <div className='w-[90%] lg:w-[60%] h-full flex flex-col gap-2 lg:gap-6'>
            <h2 className='text-center lg:text-left text-title-section-feature text-light-1000 font-extrabold capitalize'>
              <span className='text-[#10805B]'>
                FOSO
              </span>{' '}
              - đơn vị cung cấp hosting uy tín
            </h2>
            <ul className='ml-5 list-disc text-light-900 font-medium text-title-feature'>
              <li>Nhằm đảm bảo chất lượng & trách nhiệm toàn diện, dịch vụ thuê Server/ VPS chỉ áp dụng cho các KH phát triển Web/App cùng FOSO</li>
              <li>Với những dự án cho bên thứ 3 phát triển, vui lòng tham khảo{' '}
                <Link href='#' className='text-[#025ACE] underline font-bold'>
                  dịch vụ bảo trì hạ tầng.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosting
