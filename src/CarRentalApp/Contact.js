import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
    let defaultProps = {
        center: {  
          lat: 17.453911083520403,
          lng: 78.37020776931183
        },
        zoom: 15
      };
      return (
          <div className='contact'>
              <div className='map fixed'>
            
          <GoogleMapReact
            //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={17.453911083520403}
              lng={78.37020776931183}
              text="West Agile Labs"
            />
          </GoogleMapReact>
        </div>
          </div>
        
      );

}
export default Contact;