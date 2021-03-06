import React from 'react'
import './CSS/App.css';

import Sara from './slides/Sara'
import SaraEn from './slides/Sara.English/SaraEn'
import SaraEn1A from './slides/Sara.English/SaraEn.website'
import SaraEn1B from './slides/Sara.English/SaraEn.meet'
import SaraEn2B from './slides/Sara.English/SaraEn.contact'
import SaraEn3 from './slides/Sara.English/SaraEn.contact-info'
import SaraEn4 from './slides/Sara.English/SaraEn.website-info';
import SaraEnBye from './slides/Sara.English/SaraEn.bye'

import ResetButton from './slides/ResetButton'

import SaraFr from './slides/Sara.French/SaraFr'
import SaraFr1A from './slides/Sara.French/SaraFr.website'
import SaraFr1B from './slides/Sara.French/SaraFr.meet'
import SaraFr2B from './slides/Sara.French/SaraFr.contact'
import SaraFr3 from './slides/Sara.French/SaraFr.contact-info'
import SaraFr4 from './slides/Sara.French/SaraFr.website-info';
import SaraFrBye from './slides/Sara.French/SaraFr.bye'

import { useStateValue } from './StateProvider'


const App = () => {

  const [state] = useStateValue();

  console.log(state);

  if (state.option === 'Hello') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn />
      </div>
    );
  } else if (state.option === 'I’m looking for a website' || state.option === 'Yes, I’m looking for a website') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn1A />
      </div>
    )
  } else if (state.option === 'I wanna meet Mr.Omar Alsadi') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn1B />
      </div>
    )
  } else if (state.option === 'Can I contact with him directly?') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn2B />
      </div>
    )
  } else if (state.option === 'By Phone') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn3 info={' ( 514 ) 664-9779'} />
      </div>
    )
  } else if (state.option === 'By Email') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn3 info={'omar_alsadi@outlook.com'} />
      </div>
    )
  } else if (state.option === 'A Single-application page' || state.option === 'An E-commerce page') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEn4 />
      </div>
    )
  } else if (state.option === 'No, thanks') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraEnBye />
      </div>
    )      ///////////////// FRANCE /////////////////
  } else if (state.option === 'Je recherche un site Web' || state.option === 'Oui, je cherche le site web') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr1A />
      </div>
    )
  } else if (state.option === 'Je veux rencontrer Monsieur Omar Alsadi') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr1B />
      </div>
    )
  } else if (state.option === 'Puis-je le contacter directement?') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr2B />
      </div>
    )
  } else if (state.option === 'Par téléphone') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr3 info={' ( 514 ) 664-9779'} />
      </div>
    )
  } else if (state.option === 'Par courriel') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr3 info={'omar_alsadi@outlook.com'} />
      </div>
    )
  } else if (state.option === 'Une seul page d\'application' || state.option === 'Une page e-commerce') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr4 />
      </div>
    )
  } else if (state.option === 'Non, Merci') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFrBye />
      </div>
    )
  } else if (state.option === 'Bonjour') {
    return (
      <div className="App office-1">
        <ResetButton />
        <SaraFr />
      </div>
    );
  } else {
    return (
      <div className="App office-1">
        <ResetButton />
        <Sara />
      </div>
    );
  }

}

export default App;
