import { ChangeEvent, useState } from "react";
import { PaymentType, getAllPayments } from "../../data/DataFunctions"
import PaymentTableRow from "./PaymentTableRow";

const Transactions =()=>{
    const payments: PaymentType[]=getAllPayments();
    const countries:string[]=Array.from(
        new Set(payments.map(payment=>payment.country))
    )
    const[selectedCountry,setSelectedCountry]=useState<string>(countries[0])
    const changeCountry =(e:ChangeEvent<HTMLSelectElement>)=>{
        const option=e.target.value
        setSelectedCountry(option)
    }
    console.log(countries)
        return(
        <>
        <div className="transactionCountrySelector">
        <select onChange={changeCountry}>
            {countries.map(country=> <option value={country} key={country}>{country}</option>)}
        </select>
        </div>
        <table className="transactionTable">
            <thead>
            <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>OrderId</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                {/* {payments.map((payment)=><PaymentTableRow key={payment.id} {...payment}/>)} */}
                {payments.filter(payment=>payment.country===selectedCountry)
                .map(
                    payment=><PaymentTableRow key={payment.id} {...payment}/>

                )}
            </tbody>
            </table>
        </>)
}
export default Transactions


// export default function Transactions(){
//     return(
//         <>
//         <table>
//             <tr>
//                 <th>Id</th>
//                 <th>Date</th>
//                 <th>Country</th>
//             </tr>
//             <tr>
//                 <td>204</td>
//                 <td>12-03-2001</td>
//                 <td>Germany</td>
//             </tr>
//             <tr>
//                 <td>104</td>
//                 <td>24-10-1993</td>
//                 <td>Mexico</td>
//             </tr>
//             </table>
//         </>
//     )
// }