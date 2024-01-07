import backgound from '../../assets/images/background.png'
import SearchBar from '../common/searchBar';
import HomeHeader from '../extra-components/home-header';
import thumbnail from '../../assets/images/thumbnail_Subject.png'

const Home = () => {
    return (
        <div className="w-screen min-h-screen relative overflow-hidden">
            <div className='w-full h-full absolute top-0 right-0'>
                <img src={backgound} alt="background" className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-full relative z-10'>
                <div data-aos='slide-down'>
                    <HomeHeader />
                </div>
                <div data-aos='fade' data-aos-delay='700'>
                    <SearchBar width='w-1/2' />
                </div>
                <div className='w-full flex justify-center pt-6' data-aos="zoom-in">
                    <img src={thumbnail} loading='eager' alt='thumbnail' className='w-72' />
                </div>
            </div>
        </div>
    )
}

export default Home;