import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import ButtonAnimation from './../../../../../components/common/button/ButtonAnimation';
import ProjectShowcase from '../ui/ProjectShowcase';

type Props = {}

const SolutionsSection = (props: Props) => {
    return (
        <div className='3xl:py-24 py-20 '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 gap-10 relative z-[1]'>
                <div className='space-x-2 font-extrabold text-title-section-small max-w-[50%]'>
                    <span
                        className='uppercase'
                        style={{
                            background: "linear-gradient(to right, #85EEB3 0%, #53B086 100%), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Foso
                    </span>
                    <span className='text-[#1A2025] capitalize'>
                        Cung cấp giải pháp
                    </span>
                </div>

                <ProjectShowcase />

                <ButtonAnimation
                    type="button"
                    title="Đăng ký tư vấn ngay"
                    reverse={true}
                    icon={
                        <div className='size-5'>
                            <GoArrowUpRight className='size-full' />
                        </div>
                    }
                    className="flex items-center gap-2 text-default text-[#10805B] font-medium px-8 py-2 border border-[#10805B] rounded-[40px]"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default SolutionsSection