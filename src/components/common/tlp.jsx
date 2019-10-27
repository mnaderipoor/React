import React from 'react';

class TLP extends React.Component {
    render() {
        const{width,height}= this.props
        return (
                <svg width={`${width}`} height={`${height}`} >
                    <defs>
                        <circle id="Circle1" cx="25" cy="25"  r="25" />
                        <circle id="Circle2" cx="25" cy="85"  r="25" />
                        <circle id="Circle3" cx="25" cy="145" r="25" />
                        <circle id="Circle4" cx="25" cy="205" r="25" />
                    </defs>

                    <rect fill="#000000" x="0" y="0" width={`${width}`} height={`${height}`} rx="8" />
                    <use x="5" y="5" xlinkHref="#Circle1" fill="red" />
                    <use x="5" y="5" xlinkHref="#Circle2" fill="#FFBF00" />
                    <use x="5" y="5" xlinkHref="#Circle3" fill="#7ED321" />
                    <use x="5" y="5" xlinkHref="#Circle4" fill="#FFFFFF" />
                </svg>
        )
    }
}
// TLP.defaultProps = {
//
//     width:110,
//     height:400,
//     BlackColor: '#000000',
//     DisabledColor: '#4A4A4A',
//     RedColor: '#D0021B',
//     YellowColor: '#F8E71C',
//     GreenColor: '#7ED321',
// };
export default TLP