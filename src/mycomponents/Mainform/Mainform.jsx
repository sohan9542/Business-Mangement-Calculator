import React, { useState } from 'react'
import './mainform.css'
import { days, first_select, institute } from '../../data'
import FirstSelect from './FirstSelect'


const Mainform = () => {
    const [total, setTotal] = React.useState(16.2)
    const [wirteborder, setwirteborder] = React.useState(true)
    const [rewirteborder, setRewirteborder] = React.useState(false)
    const [editborder, setEdtborder] = React.useState(false)
    const page = []

    for (let i = 1; i <= 400; i++) {

        page.push(i)
    }
    const borderstyle = {
        borderColor: 'rgb(54, 127, 211)',
        zIndex: '1',
        borderRadius: '4px',
        color: 'rgb(54, 127, 211)',

    }
    const sameborder = {
        borderColor: ' rgb(217, 218, 221)',
        borderRadius: '0px'
    }

    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const [four, setFour] = useState(1)

    const defaultWrite = 16.2;


    const write = () => {
        setEdtborder(false)
        setwirteborder(true)
        setRewirteborder(false)
        const copywrite = ((defaultWrite - third) + first + second) * four
        setOrginalTotal(copywrite.toFixed(2))
        if (four === 1) {
            setTotal(copywrite)
        }
        else if (four === 2) {
            setTotal((copywrite) - (copywrite * 0.05))
            setDiscount(5)
        }
        else if (four === 3) {
            setTotal((copywrite) - (copywrite * 0.10))
            setDiscount(10)
        }
        else if (four === 4) {
            setTotal((copywrite) - (copywrite * 0.15))
            setDiscount(15)
        }
        else if (four === 5) {
            setTotal((copywrite) - (copywrite * 0.20))
            setDiscount(20)
        }
        else if (four === 6) {
            setTotal((copywrite) - (copywrite * 0.25))
            setDiscount(25)
        }
        else if (four <= 14) {
            setTotal((copywrite) - (copywrite * 0.30))
            setDiscount(30)
        }
        else if (four <= 19) {
            setTotal((copywrite) - (copywrite * 0.35))
            setDiscount(35)
        }
        else if (four <= 400) {
            setTotal((copywrite) - (copywrite * 0.40))
            setDiscount(40)
        }

    }
    const rewrite = () => {
        setEdtborder(false)
        setwirteborder(false)
        setRewirteborder(true)
        const copytotalre = (((defaultWrite - third) + first + second) * 0.7) * four
        if (four === 1) {
            setTotal(copytotalre)
        }
        else if (four === 2) {
            setTotal((copytotalre) - (copytotalre * 0.05))
            setDiscount(5)
        }
        else if (four === 3) {
            setTotal((copytotalre) - (copytotalre * 0.10))
            setDiscount(10)
        }
        else if (four === 4) {
            setTotal((copytotalre) - (copytotalre * 0.15))
            setDiscount(15)
        }
        else if (four === 5) {
            setTotal((copytotalre) - (copytotalre * 0.20))
            setDiscount(20)
        }
        else if (four === 6) {
            setTotal((copytotalre) - (copytotalre * 0.25))
            setDiscount(25)
        }
        else if (four <= 14) {
            setTotal((copytotalre) - (copytotalre * 0.30))
            setDiscount(30)
        }
        else if (four <= 19) {
            setTotal((copytotalre) - (copytotalre * 0.35))
            setDiscount(35)
        }
        else if (four <= 400) {
            setTotal((copytotalre) - (copytotalre * 0.40))
            setDiscount(40)
        }
    }
    const edit = () => {
        setEdtborder(true)
        setwirteborder(false)
        setRewirteborder(false)
        const copytotaledi = (((defaultWrite - third) + first + second) * 0.5) * four
        setOrginalTotal(copytotaledi.toFixed(2))
        if (four === 1) {
            setTotal(copytotaledi)
        }
        else if (four === 2) {
            setTotal((copytotaledi) - (copytotaledi * 0.05))
            setDiscount(5)
        }
        else if (four === 3) {
            setTotal((copytotaledi) - (copytotaledi * 0.10))
            setDiscount(10)
        }
        else if (four === 4) {
            setTotal((copytotaledi) - (copytotaledi * 0.15))
            setDiscount(15)
        }
        else if (four === 5) {
            setTotal((copytotaledi) - (copytotaledi * 0.20))
            setDiscount(20)
        }
        else if (four === 6) {
            setTotal((copytotaledi) - (copytotaledi * 0.25))
            setDiscount(25)
        }
        else if (four <= 14) {
            setTotal((copytotaledi) - (copytotaledi * 0.30))
            setDiscount(30)
        }
        else if (four <= 19) {
            setTotal((copytotaledi) - (copytotaledi * 0.35))
            setDiscount(35)
        }
        else if (four <= 400) {
            setTotal((copytotaledi) - (copytotaledi * 0.40))
            setDiscount(40)
        }

    }


    const handleFirstOptions = (e) => {
        const copywrite = ((defaultWrite - third) + parseFloat(e) + second) * four
        const copytotalre = (((defaultWrite - third) + parseFloat(e) + second) * 0.7) * four
        const copytotaledi = (((defaultWrite - third) + parseFloat(e) + second) * 0.5) * four
        setFirst(parseFloat(e))
        if (wirteborder) {
            setOrginalTotal(copywrite.toFixed(2))
            if (four === 1) {
                setTotal(copywrite)
            }
            else if (four === 2) {
                setTotal((copywrite) - (copywrite * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copywrite) - (copywrite * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copywrite) - (copywrite * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copywrite) - (copywrite * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copywrite) - (copywrite * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copywrite) - (copywrite * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copywrite) - (copywrite * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copywrite) - (copywrite * 0.40))
                setDiscount(40)
            }
        }
        else if (rewirteborder) {

            setOrginalTotal(copytotalre.toFixed(2))
            if (four === 1) {
                setTotal(copytotalre)
            }
            else if (four === 2) {
                setTotal((copytotalre) - (copytotalre * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotalre) - (copytotalre * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotalre) - (copytotalre * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotalre) - (copytotalre * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotalre) - (copytotalre * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotalre) - (copytotalre * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotalre) - (copytotalre * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotalre) - (copytotalre * 0.40))
                setDiscount(40)
            }
        }
        else if (editborder) {
            setOrginalTotal(copytotaledi.toFixed(2))

            if (four === 1) {
                setTotal(copytotaledi)
            }
            else if (four === 2) {
                setTotal((copytotaledi) - (copytotaledi * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotaledi) - (copytotaledi * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotaledi) - (copytotaledi * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotaledi) - (copytotaledi * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotaledi) - (copytotaledi * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotaledi) - (copytotaledi * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotaledi) - (copytotaledi * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotaledi) - (copytotaledi * 0.40))
                setDiscount(40)
            }
        }
    }
    const handleinstitute = (e) => {
        const copywrite = ((defaultWrite - third) + parseFloat(e) + first) * four
        const copytotalre = (((defaultWrite - third) + parseFloat(e) + first) * 0.7) * four
        const copytotaledi = (((defaultWrite - third) + parseFloat(e) + first) * 0.5) * four
        setSecond(parseFloat(e))
        if (wirteborder) {

            setOrginalTotal(copywrite.toFixed(2))
            if (four === 1) {
                setTotal(copywrite)
            }
            else if (four === 2) {
                setTotal((copywrite) - (copywrite * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copywrite) - (copywrite * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copywrite) - (copywrite * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copywrite) - (copywrite * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copywrite) - (copywrite * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copywrite) - (copywrite * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copywrite) - (copywrite * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copywrite) - (copywrite * 0.40))
                setDiscount(40)
            }
        }
        else if (rewirteborder) {

            setOrginalTotal(copytotalre.toFixed(2))
            if (four === 1) {
                setTotal(copytotalre)
            }
            else if (four === 2) {
                setTotal((copytotalre) - (copytotalre * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotalre) - (copytotalre * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotalre) - (copytotalre * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotalre) - (copytotalre * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotalre) - (copytotalre * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotalre) - (copytotalre * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotalre) - (copytotalre * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotalre) - (copytotalre * 0.40))
                setDiscount(40)
            }
        }
        else if (editborder) {

            setOrginalTotal(copytotaledi.toFixed(2))
            if (four === 1) {
                setTotal(copytotaledi)
            }
            else if (four === 2) {
                setTotal((copytotaledi) - (copytotaledi * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotaledi) - (copytotaledi * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotaledi) - (copytotaledi * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotaledi) - (copytotaledi * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotaledi) - (copytotaledi * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotaledi) - (copytotaledi * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotaledi) - (copytotaledi * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotaledi) - (copytotaledi * 0.40))
                setDiscount(40)
            }

        }

    }
    const handleHour = (e) => {
        const copywrite = ((defaultWrite - parseFloat(e)) + second + first) * four
        const copytotalre = (((defaultWrite - parseFloat(e)) + second + first) * 0.7) * four
        const copytotaledi = (((defaultWrite - parseFloat(e)) + second + first) * 0.5) * four
        setThird(parseFloat(e))

        if (wirteborder) {

            setOrginalTotal(copywrite.toFixed(2))
            if (four === 1) {
                setTotal(copywrite)
            }
            else if (four === 2) {
                setTotal((copywrite) - (copywrite * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copywrite) - (copywrite * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copywrite) - (copywrite * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copywrite) - (copywrite * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copywrite) - (copywrite * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copywrite) - (copywrite * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copywrite) - (copywrite * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copywrite) - (copywrite * 0.40))
                setDiscount(40)
            }
        }
        else if (rewirteborder) {

            setOrginalTotal(copytotalre.toFixed(2))
            if (four === 1) {
                setTotal(copytotalre)
            }
            else if (four === 2) {
                setTotal((copytotalre) - (copytotalre * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotalre) - (copytotalre * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotalre) - (copytotalre * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotalre) - (copytotalre * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotalre) - (copytotalre * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotalre) - (copytotalre * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotalre) - (copytotalre * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotalre) - (copytotalre * 0.40))
                setDiscount(40)
            }
        }
        else if (editborder) {

            setOrginalTotal(copytotaledi.toFixed(2))
            if (four === 1) {
                setTotal(copytotaledi)
            }
            else if (four === 2) {
                setTotal((copytotaledi) - (copytotaledi * 0.05))
                setDiscount(5)
            }
            else if (four === 3) {
                setTotal((copytotaledi) - (copytotaledi * 0.10))
                setDiscount(10)
            }
            else if (four === 4) {
                setTotal((copytotaledi) - (copytotaledi * 0.15))
                setDiscount(15)
            }
            else if (four === 5) {
                setTotal((copytotaledi) - (copytotaledi * 0.20))
                setDiscount(20)
            }
            else if (four === 6) {
                setTotal((copytotaledi) - (copytotaledi * 0.25))
                setDiscount(25)
            }
            else if (four <= 14) {
                setTotal((copytotaledi) - (copytotaledi * 0.30))
                setDiscount(30)
            }
            else if (four <= 19) {
                setTotal((copytotaledi) - (copytotaledi * 0.35))
                setDiscount(35)
            }
            else if (four <= 400) {
                setTotal((copytotaledi) - (copytotaledi * 0.40))
                setDiscount(40)
            }
        }
    }

    const [discount, setDiscount] = useState(0)
    const [orginalTotal, setOrginalTotal] = useState()
    const handlechangepage = (e) => {
        const copytotalre = (((defaultWrite - third) + first + second) * 0.7) * parseFloat(e)
        const copytotaledi = (((defaultWrite - third) + first + second) * 0.5) * parseFloat(e)
        const copywrite = ((defaultWrite - third) + first + second) * parseFloat(e)
        setFour(parseFloat(e))
        if (wirteborder) {
            setOrginalTotal(copywrite.toFixed(2))
            if (parseInt(e) === 1) {
                setTotal(copywrite)
            }
            else if (parseInt(e) === 2) {
                setTotal((copywrite) - (copywrite * 0.05))
                setDiscount(5)
            }
            else if (parseInt(e) === 3) {
                setTotal((copywrite) - (copywrite * 0.10))
                setDiscount(10)
            }
            else if (parseInt(e) === 4) {
                setTotal((copywrite) - (copywrite * 0.15))
                setDiscount(15)
            }
            else if (parseInt(e) === 5) {
                setTotal((copywrite) - (copywrite * 0.20))
                setDiscount(20)
            }
            else if (parseInt(e) === 6) {
                setTotal((copywrite) - (copywrite * 0.25))
                setDiscount(25)
            }
            else if (parseInt(e) <= 14) {
                setTotal((copywrite) - (copywrite * 0.30))
                setDiscount(30)
            }
            else if (parseInt(e) <= 19) {
                setTotal((copywrite) - (copywrite * 0.35))
                setDiscount(35)
            }
            else if (parseInt(e) <= 400) {
                setTotal((copywrite) - (copywrite * 0.40))
                setDiscount(40)
            }
        }
        else if (rewirteborder) {
            setOrginalTotal(copytotalre.toFixed(2))
            if (parseInt(e) === 1) {
                setTotal(copytotalre)
            }
            else if (parseInt(e) === 2) {
                setTotal((copytotalre) - (copytotalre * 0.05))
                setDiscount(5)
            }
            else if (parseInt(e) === 3) {
                setTotal((copytotalre) - (copytotalre * 0.10))
                setDiscount(10)
            }
            else if (parseInt(e) === 4) {
                setTotal((copytotalre) - (copytotalre * 0.15))
                setDiscount(15)
            }
            else if (parseInt(e) === 5) {
                setTotal((copytotalre) - (copytotalre * 0.20))
                setDiscount(20)
            }
            else if (parseInt(e) === 6) {
                setTotal((copytotalre) - (copytotalre * 0.25))
                setDiscount(25)
            }
            else if (parseInt(e) <= 14) {
                setTotal((copytotalre) - (copytotalre * 0.30))
                setDiscount(30)
            }
            else if (parseInt(e) <= 19) {
                setTotal((copytotalre) - (copytotalre * 0.35))
                setDiscount(35)
            }
            else if (parseInt(e) <= 400) {
                setTotal((copytotalre) - (copytotalre * 0.40))
                setDiscount(40)
            }
        }
        else if (editborder) {
            setOrginalTotal(copytotaledi.toFixed(2))
            if (parseInt(e) === 1) {
                setTotal(copytotaledi)
            }
            else if (parseInt(e) === 2) {
                setTotal((copytotaledi) - (copytotaledi * 0.05))
                setDiscount(5)
            }
            else if (parseInt(e) === 3) {
                setTotal((copytotaledi) - (copytotaledi * 0.10))
                setDiscount(10)
            }
            else if (parseInt(e) === 4) {
                setTotal((copytotaledi) - (copytotaledi * 0.15))
                setDiscount(15)
            }
            else if (parseInt(e) === 5) {
                setTotal((copytotaledi) - (copytotaledi * 0.20))
                setDiscount(20)
            }
            else if (parseInt(e) === 6) {
                setTotal((copytotaledi) - (copytotaledi * 0.25))
                setDiscount(25)
            }
            else if (parseInt(e) <= 14) {
                setTotal((copytotaledi) - (copytotaledi * 0.30))
                setDiscount(30)
            }
            else if (parseInt(e) <= 19) {
                setTotal((copytotaledi) - (copytotaledi * 0.35))
                setDiscount(35)
            }
            else if (parseInt(e) <= 400) {
                setTotal((copytotaledi) - (copytotaledi * 0.40))
                setDiscount(40)
            }

        }
    }



    return (
        <>
            <div className="mainform">
                <div className="form__container">
                    <div className="heading">
                        Calculate the price
                    </div>
                    <div className="form__Options">
                        <div className="button_options">
                            <div onClick={write} style={wirteborder ? borderstyle : sameborder}>Writing</div>
                            <div onClick={rewrite} style={rewirteborder ? borderstyle : sameborder}>Rewrite</div>
                            <div onClick={edit} style={editborder ? borderstyle : sameborder}>Writing</div>

                        </div>
                        <div className="first__select">
                            <select onChange={(e) => handleFirstOptions(e.target.value)}>
                                {
                                    first_select.map((data, index) => <FirstSelect key={index} data={data} />)
                                }
                            </select>
                        </div>
                        <div className="second__select">
                            <select onChange={(e) => handleinstitute(e.target.value)}>
                                {
                                    institute.map((data, index) => <FirstSelect key={index} data={data} />)
                                }
                            </select>
                            <select onChange={(e) => handleHour(e.target.value)}>
                                {
                                    days.map((data, index) => <FirstSelect key={index} data={data} />)
                                }
                            </select>
                        </div>
                        <div className="third__select">
                            <select name="" id="" onChange={(e) => handlechangepage(e.target.value)}>
                                {
                                    page.map((pa, index) => <option key={index} value={pa} >{pa} page / {pa * 275} words</option>)
                                }
                            </select>
                        </div>
                        <div className="radio__section">
                            <form action="">
                                <label className="container">Double spaces
                                    <input type="radio" checked='cheked' name="double"  />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="container">Single spaces
                                    <input type="radio" name="single" />
                                    <span className="checkmark"></span>
                                </label>
                            </form>
                        </div>
                        <div className="result">
                            <div className="discount">
                                {
                                    four > 1 && <>
                                        <div className="off">
                                            {discount}% OFF
                                        </div>
                                        <del>
                                            (${orginalTotal})
                                        </del>
                                    </>
                                }
                            </div>
                            <h3> ${total.toFixed(2)} 🔥</h3>
                        </div>
                        <div className="submit">
                            Write My Paper
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Mainform
