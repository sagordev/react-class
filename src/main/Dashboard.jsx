import { useState } from "react";
import Header from "./Header";
import TakaPai from "./TakaPai";
import TakaPay from "./TakaPay";

function Dashboard({hiseb, setHiseb}){
    const [page, setPage] = useState();

    return (
        page === '1' ? (
            <TakaPai setPage={setPage} hiseb={hiseb} setHiseb={setHiseb}/>
        ):
        page === '2' ? (
            <TakaPay setPage={setPage}/>
        )
        : (
            <>
            <Header title="Goriber Account Dashboard"/>
            <div className="container_inner">
                <div className="summary_segment">
                    <div>Taka Pai</div>
                    <div>100</div>
                </div>
                <div className="summary_segment">
                    <div>100</div>
                    <div>Taka Pay</div>
                </div>
                <div className="summary_segment">
                    <div>Mal Pati</div>
                    <div>100</div>
                </div>
                <div className="button_container">
                    <button onClick={() => setPage('1')}>Taka Pai</button>
                    <button onClick={() => setPage('2')}>Taka Pay</button>
                </div>
            </div>
        </>
        )
        
    )
}

export default Dashboard;