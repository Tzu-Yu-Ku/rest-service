import React from 'react'
import {Row} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Row>
                <div class="col-md-12 text-center d-md-flex align-items-center">
                    <ul class="nav mx-md-auto d-flex justify-content-center">
                        <li class="nav-item"><a class="nav-link active" href="/">Startseite</a></li>
                        <li class="nav-item"><a class="nav-link">Impressum</a></li>
                        <li class="nav-item"><a class="nav-link">Kontakt</a></li>
                        <li class="nav-item"><a class="nav-link">FAQ</a></li>
                    </ul>
                    <div class="row">
                        <div class="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2">
                    </div>
                    </div>
                </div>
            </Row>
        </footer>
    )
}

export default Footer
