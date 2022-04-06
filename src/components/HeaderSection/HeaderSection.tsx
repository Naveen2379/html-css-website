import * as React from 'react';
import SearchProducts from '../searchProducts/SearchProducts';
import content from '../../core/content.json';

import './HeaderSection.scss';

interface HeaderSectionProps {

}

const HeaderSection = ({ }: HeaderSectionProps) => {
    const { search, login, cart } = content.header;

    return (
        <div className='header-section'>
            <div className=''>
                <div className='header-total'>
                    {/** logo -redirects to home page */}
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
                        <div className='more-section'>
                            <div>
                                <span className='more-label'>More</span>
                            </div>
                            <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="more-svg">
                                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_2gTTdy">
                                </path>
                            </svg>
                        </div>
                        <div className='cart-section'>
                            <div>
                                <a href='javascript:void(0)' className=''>
                                    <svg className="cart-svg" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff">
                                        </path>
                                    </svg>
                                    <span className='cart-label'>{cart}</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;