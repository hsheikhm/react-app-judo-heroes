/*jshint esversion: 6 */
"use strict";

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';
import athletes from '../data/athletes';

class AthletePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
        return <NotFoundPage />;
    }
    const headerStyle = {
      backgroundImage = `url(/img/${athlete.cover})`
    };
    return (
      
    );
  }
}

export default AthletePage;
