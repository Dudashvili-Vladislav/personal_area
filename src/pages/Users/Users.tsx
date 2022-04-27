import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Users: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state =>state.user)

    return (
        <div>

        </div>
    );
};


