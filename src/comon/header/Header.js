import React from 'react';
import logoSrc from './logo.svg'
import './header.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function Header({lang , setLang}) {

    function onChange(e){
        setLang(e.target.value);
    }
    return (
        <>
        <div className="header-container">
            <img className="logo" src={logoSrc}/>
            <div className="button-langage">
                <select className="langage" value={lang} onChange={onChange} onBlur={onChange}>
                    <option value="fr">Langage</option>
                    <option value="fr">FR</option>
                    <option value="en">En</option>
                    <option value="ja">Jap</option>
                    <option value="ko">Ko</option>
                    <option value="es">Esp</option>
                    <option value="de">De</option>
                    <option value="it">It</option>
                </select>
            </div>
        </div>
        </>
    );
}