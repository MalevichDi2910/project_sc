import './styles/app.module.css';
import {Header} from "./layout/header/Header";
import {Footer} from "././layout/footer/Footer";
import {Main} from "./layout/sections/main/Main";
import {ShopifySection} from "././layout/sections/shopifySection/shopifySection";
import {ShopifySectionText} from "././layout/sections/shopifySectionText/ShopifySectionText";
import React from "react";
import {Menu} from "./components/menu/Menu";
import {WidgetList} from "./layout/sections/widgetList/WidgetList";

const menuItems = ['Cinema','Food','Beauty, sport','Wedding','Kids','leisure, tourism','training','all for the celebration','shopping, discounts','services']

function App() {
    return (
        <>
            <Header/>
            <Menu menuItems={menuItems}/>
            <WidgetList/>
            <Main/>
            <ShopifySectionText/>
            <ShopifySection/>
            <Footer link={''} color={''} iconId={''}/>
        </>
    );
}

export default App;

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin-bottom: 32px;
//     span {
//       color: #e91e63;
//     }
// `;
//
// const Form = styled.form`
//   width: 100%;
//   max-width: 500px;
// `;
//
// const Field = styled.input`
//   padding: 5px 15px;
//   margin: 10px 0;
//   width: 100%;
//   font-size: 1rem;
// `;
