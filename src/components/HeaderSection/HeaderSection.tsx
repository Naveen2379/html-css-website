import * as React from 'react';
import SearchProducts from '../searchProducts/SearchProducts';
import content from '../../core/content.json';

import './HeaderSection.scss';

interface HeaderSectionProps {

}

const HeaderSection = ({ }: HeaderSectionProps) => {
    const { search, login } = content.header;
    
    return (
        <div className='header-section'>
            <div className='header-total'>
                <div className='header-left-logo'>
                    <div className="_3_C9Hx">
                        <div className="_3qX0zy">
                            <a href="/">
                            </a>
                            <a className="_21ljIi" href="/plus">Explore <span className="_2FVHGh">Plus</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='header-middle'>
                    <SearchProducts placeHolder={search?.placeholder} />
                </div>
                <div className='header-right'>
                    <div>
                        <a className='login-anchor' href='javascript:void(0)'>{login}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;