import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice.js'

export default function Root() {
    const user = useSelector((state) => { return state.user })
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        //state는 기존 값
        const token = window.localStorage.getItem('token')
        try {
            const res = axios.get('http://localhost:8080/api/me', {
                headers: {
                    Authorization: token,
                }
            }
            );
            res.then((user) => {
                console.log(user.data.userCode)
                dispatch(login({
                    userCode: user.data.userCode,
                    kakaoId : user.data.kakaoId,
                    kakaoNickname: user.data.kakaoNickname,
                }))

                setUserInfo(user.data)

            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            {JSON.stringify(userInfo)}
            <Outlet />
        </div>
    );
}

