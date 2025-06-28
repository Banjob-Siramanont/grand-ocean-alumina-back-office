import Swal from 'sweetalert2';
import { useState } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';


export default function Login() {

    const signIn = useSignIn();
    const [tel, setTel] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignIn = () => {
        if (tel !== '0949304719' || password !== '1234') return
        signIn({
            auth: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwYWMyMGQ0YzRmNWVhNGI0ODQ4N2QiLCJ1c2VyX25hbWUiOiJCYW5qb2IgU2lyYW1hbm9udCIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE3NDkyMzE2MzIsImV4cCI6MTc0OTI3NDgzMn0.6T-MgPz0MxBIYG02NJNIfv7eWJGcRm8Bwe-Y1K-xeaI',
                type: 'Bearer',
            },
            userState: {
                user_id: 1,
                user_name: 'banjob siramanont',
                user_tel: '0949304719',
                is_admin: true
            },
        });
        Swal.fire({
            title: 'ยินดีต้อนรับเข้าสู่ระบบ',
            text: '',
            icon: 'success',
            timer: 2000,
            confirmButtonColor: 'var(--color-orange)',
            confirmButtonText: 'OK'
        }).then(() => (window.location as Location).href = '/');
    }


    return (
        <>

            <form className='flex justify-center items-center h-[95vh]'>
                <div className='grid grid-cols-1 gap-y-8 dark:text-smoothWhite max-w-[600px]'>
                    <div className='grid grid-cols-1 gap-y-2'>
                        <div className='text-orange text-center font-bold text-[40px] max-[600px]:text-[25px]'>K.T. Yanyont Login</div>
                        <div className='grid grid-cols-1 gap-y-0.5'>
                            <label>เบอร์โทรศัพท์</label>
                            <input
                                className='border rounded-md px-2 py-1'
                                type='text'
                                value={tel}
                                placeholder='09xyyyzzzz'
                                maxLength={10}
                                onChange={event => setTel((event.target.value))}
                            />
                        </div>

                        <div className='grid grid-cols-1 gap-y-0.5'>
                            <label>รหัสผ่าน</label>
                            <input
                                className='border rounded-md px-2 py-1'
                                type='password'
                                value={password}
                                placeholder=''
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        onClick={() => handleSignIn()}
                        className='clickable text-center bg-orange rounded-lg py-1 cursor-pointer'
                    >
                        Login
                    </div>
                </div>
            </form>
        </>
    )
}

