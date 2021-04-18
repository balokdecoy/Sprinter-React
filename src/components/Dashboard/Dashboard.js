import React from 'react'
import Card from "../Cards/Cards"
import CustomPieChart from "../Charts/PieChart";
import "./dashboard.css";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";
import DashForm from "../Forms/DashForm";

const cardData = [
    {
        title: "Summary",
        text: "This is the Summary"
    },
    {
        title: "Employees",
        text: "Employee 1"
    },
    {
        title: "Managers",
        text: "Manager 1"
    },
    {
        title: "Timeline",
        text: "This is our Timeline"
    }

]

function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>Dashboard Page</h1>
            <Row>
                <Col size="3">
                   <DashForm />
                </Col>
                <Col size="4">
                    <div>{cardData.map((data) => {
                        return (
                            <Card title={data.title} text={data.text} />
                        )
                    })}</div>
                </Col>
            </Row>
           
            <br />

            <div className="main__title">

                <div className="main__greeting mx-auto">
                    <br />
                    <h1>Welcome to your admin dashboard</h1>
                </div>
            </div>

            <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title" />
                    <CustomPieChart />
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Status Reports</h1>

                        </div>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Open</h1>
                            <h3>5</h3>
                        </div>

                        <div className="card2">
                            <h1>In progress</h1>
                            <h3>7</h3>
                        </div>

                        <div className="card3">
                            <h1>In review</h1>
                            <h3>3</h3>
                        </div>

                        <div className="card4">
                            <h1>Done</h1>
                            <h3>5</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard