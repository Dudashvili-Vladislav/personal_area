import React, {FC, useState} from 'react';
import { useNavigate } from 'react-router-dom';



export const Registration: FC = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name:'',
        comment:'',
        login:'',
        password:'',
        isAgree: false
    });



    return (
        <div>
            Registration
        </div>
    );
};


