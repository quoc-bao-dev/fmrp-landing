import CTABlogSection from './components/sections/CTABlogSection'
import IntroBlogSection from './components/sections/IntroBlogSection'
import MainBlogSection from './components/sections/MainBlogSection'

type Props = {}

const Blogs = (props: Props) => {

    return (
        <main className='min-h-screen'>
            <IntroBlogSection />
            <MainBlogSection />
            <CTABlogSection />
        </main >
    )
}

export default Blogs