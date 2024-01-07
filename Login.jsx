import { useNavigate } from 'react-router-dom';
import backgound from '../../assets/images/background.png'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen min-h-screen relative overflow-hidden">
            <div className='w-full h-full absolute top-0 right-0'>
                <img src={backgound} alt="background" className='w-full h-full object-cover' />
            </div>
            <div data-aos="zoom-in" className='w-full h-full absolute top-0 right-0 z-10 flex items-center justify-center'>
                <div className='bg-from-background px-10 py-14 rounded-md'>
                    <h3 className='font-bold text-3xl'>Log-in</h3>
                    <form className='mt-8 w-80 flex flex-col gap-y-2' onSubmit={() => navigate('/')}>
                        <div className='w-full'>
                            <label className=''>Email</label>
                            <input type="email" className='w-full border-[1px] border-gray-300 rounded py-1.5 px-1 outline-none' />
                        </div>
                        <div className='w-full'>
                            <label className=''>Password</label>
                            <input type="password" className='w-full border-[1px] border-gray-300 rounded py-1.5 px-1 outline-none' />
                            <p className='text-main-color cursor-pointer px-1'>Forget Password?</p>
                        </div>
                        <button type="submit" className="mt-8 w-full bg-main-color text-white rounded-md py-2 hover:shadow-md">Login</button>
                    </form>
                    <div className='w-full text-center mt-5'>
                        <p className='font-medium'>New to Paws? <span className='font-semibold text-main-color cursor-pointer' onClick={() => navigate('/sign-up')}>Signup</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;