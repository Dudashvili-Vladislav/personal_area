import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { fetchUsers } from '../../redux/action-creators/user';

export const Users: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state =>state.user)
    const dispatch = useDispatch()

    useEffect( () => {
    dispatch(fetchUsers())
    },[])

    return (
        <div>

        </div>
    );
};

