import React from "react";
import './Myfooter.css';

export default function Myfooter() {

    return (
        <>
        <footer>
            <div className="box PT">
                <h2>Programing Tools</h2>

                <ul>
                    <li><a href="#">Online IDE</a></li>
                    <li><a href="#">Upcoming Coding Contests</a></li>
                    <li><a href="#">Host Your Contest</a></li>
                    <li><a href="#">Problem Setting</a></li>
                </ul>
            </div>
            <div className="box LR">
                <h2>Learning Resources</h2>

                <ul>
                    <li><a href="#">Learning paths</a></li>
                    <li><a href="#">Practice Problems</a></li>
                    <li><a href="#">CodeChef Discuss</a></li>
                    <li><a href="#">FAQ's</a></li>
                </ul>
            </div>
            <div className="box More">
                <h2>More</h2>

                <ul>
                    <li><a href="#">CodeChef For Business</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Code Of Conduct</a></li>
                    <li><a href="#">User Ranklist</a></li>
                </ul>
            </div>
            <div className="box UL">
                <h2>Usage Policy</h2>

                <ul>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms</a></li>
                </ul>
            </div>
        </footer>
        <div className="copyright">
            
        </div>
        </>
    );

}