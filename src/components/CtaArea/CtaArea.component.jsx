import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import {CtaAreaStyled} from './CtaArea.styles'

const CtaArea = () => {
  return (
    <CtaAreaStyled>
        <div className='row justify-content-center'>
            <div className='col-lg-5'>
                <div className='section-title' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className='title'>
                    Get Your Quality Skills <span>Certificate</span> Through Alas Academy
                    </h2>
                    <CustomButton>Get started Now</CustomButton>
                </div>
            </div>
        </div>
    </CtaAreaStyled>
  )
}

export default CtaArea