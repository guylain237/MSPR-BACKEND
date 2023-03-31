import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import homepage from '../../components/homepage';

import {Image, ScrollView} from 'react-native';

const Home = ({...props}) => {

    useEffect(() => {
        console.log("props ", props);
    }, []);

    return (
      
        
          <ScrollView>

           
            {/* <Image source={   require('@Asset/Arosaje.png') : require('@Asset/Arosaje.png')} /> */}
            <Image source={     require('../../assets/onboarding/plante25.png')} />
            <Text style={{fontSize: 16}}>Plantes 1</Text>
            <Image source={   require('../../assets/onboarding/plante4.png')}  />
            <Text style={{fontSize: 16}}>plantes 2</Text>
            <Image source={     require('../../assets/onboarding/plante3.png')} />
            <Text style={{fontSize: 16}}>Plantees 3</Text>
            <Image source={   require('../../assets/onboarding/plante2.png')} />
            <Text style={{fontSize: 16}}>plantes 4 </Text>
            <Image source={    require('../../assets/onboarding/plante1.png')} />
            <Text style={{fontSize: 16}}>plantes 5</Text>
          </ScrollView>
        );
        
      
    
}


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
    }
}
const mapDispatchToProps = (disptach) => { return {} }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
