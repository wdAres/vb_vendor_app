import React, { useCallback, useState } from 'react'
import { BASE_URL } from '../variables';
import Toast from 'react-native-toast-message';
import { useAuth } from '../context/AuthContext';


// export const  base_url = 'https://vnb.onrender.com/api/vendor'

const useHttp2 = () => {

    const {userInfo} = useAuth() || {}

    // console.log(userInfo);

    const {token} = userInfo || '' 
    const [isLoading, setLoading] = useState(false)
    // const current_user = Cookies.get('vendor') ? JSON.parse(Cookies.get('vendor')) : null 
    // let token = current_user?.token
    // let token = ''
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (reqConfig, setterFuntion, needToast) => {

        setLoading(true)

        const baseUrl = `${BASE_URL}/${reqConfig.url}`
        // const myToast = needToast && Toast.show('Please Wait...')
        try {
            const req = await fetch(baseUrl, {
                method: reqConfig.method || 'GET',
                headers: reqConfig.headers || { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
            })

            const resp = await req.json()

            if (!resp.success) {
                setError(resp)
                throw new Error(resp.message)
            }

            if (needToast) {
                Toast.show({
                    text1: resp.message,
                    type: 'success'
                });
            }

            setterFuntion(resp)
        } catch (error) {

            Toast.show({
                text1: error.message,
                type: 'error'
            })
            console.log(error)

        }
        finally {
            setLoading(false)
        }


    }, []);

    return {
        isLoading,
        sendRequest,
        error
    };
}

export default useHttp2
