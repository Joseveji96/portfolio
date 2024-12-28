import { social } from '@/lib/data'
import React from 'react'
import ButtonStroke from '../Botton/ButtonStroke'

const Footer = () => {
  return (
    <footer className='p-12'>
        {/* Header Footer */}
        <div>
            <div>
                <h1>Capabilities</h1>
                <div/>
            </div>
            <div>
                <div>
                    <h3>Get in touch</h3>
                </div>
                <div>
                    <h3>Go to Linkdin</h3>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <div>
                        <h1>Social</h1>
                        <div/>
                    </div>
                    <ul>
                        <li><a href={social.github}>Github</a></li>
                        <li><a href={social.linkedin}>Linkedin</a></li>
                        <li><a href={social.x}>X</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h1>Menu</h1>
                        <div/>
                    </div>
                    <ul>
                        <li><a className="navbar-link" href="">Home</a></li>
                        <li><a className="navbar-link" href="">Projects</a></li>
                        <li><a className="navbar-link" href="">Method</a></li>
                        <li><a className="navbar-link" href="">About</a></li>
                        <li><a className="navbar-link" href="">Articles</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h1>Open to talk</h1>
                        <div/>
                    </div>
                    <ul>
                        <li><a href={social.github}>joseveji96@gmail.com</a></li>
                    </ul>
                </div>  
            </div>
            
            <ButtonStroke title={'Home'} className='z-1'/>
            
            <div>
                <h1>2024 Eduardo Velazco</h1>
                <h3>All right reserved</h3>
            </div>
        </div>

    </footer>
  )
}

export default Footer