import React from 'react'
import Logo from '../../assets/img/alas-logo.png'
import {SearchPopupStyled} from './SearchPopup.styles'
import {CgClose} from 'react-icons/cg'
import {FaSistrix} from 'react-icons/fa'
const SearchPopup = ({isSearchOpen, setIsSearchOpen}) => {

    const handleSubmit = e => {
        e.preventDefault();
      }

  return (
    <SearchPopupStyled className={`${isSearchOpen ? 'open' : ''}`}>
            <div className="content-wrap">
                <div className="site-logo">
                <img src={Logo} alt="logo"/>

                </div>
                <div className="close-button" onClick={() => setIsSearchOpen(false)}>
                    <button className="close-trigger">
                        <CgClose size={30}/>
                    </button>
                </div>
                <div className="inner">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input type="text" className="search-popup-field" placeholder="Search Here..." />
                        <button className="submit-button">
                        <FaSistrix size={30}/>
                        </button>
                    </form>
                </div>
            </div>
        </SearchPopupStyled>
  )
}

export default SearchPopup