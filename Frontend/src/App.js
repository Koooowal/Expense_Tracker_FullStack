import styled from "styled-components";
import bg from "./img/bg.png";
import {MainLayout} from "./Styles/layout";
import Orb from "./Components/Orb/orb";
import Navigation from "./Components/Navigation/navigation";
import React from "react";
import { useMemo,useState } from "react"
import Dashboard from "./Components/Dashboard/dashboard";
import Expenses from "./Components/Expenses/expenses";
import Incomes from "./Components/Incomes/incomes";
import {useGlobalContext} from "./Context/globalContext";
import History from "./Components/History/history";


function App(){
    const[active, setActive] = useState(1);
    const orbMemo=useMemo(()=>{
        return <Orb/>
    },[])
    const displayData=()=>{
        switch(active){
            case 1:
                return <Dashboard/>
            case 2:
                return <History/>
            case 3:
                return <Incomes/>
            case 4:
                return <Expenses/>
            default:
                return <Dashboard/>

        }
    }
    return (
        <AppStyled  bg={bg} className="App">
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>
                    {displayData()}
                </main>
            </MainLayout>
        </AppStyled>
    );
}

const AppStyled=styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position:relative;
    main{
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;
export default App;