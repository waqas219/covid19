import React from 'react';
import GlobalStats from './GlobalStats';
import CountriesStats from './CountriesStats';
import BarChart from './BarChart';

export default function InfoPanel({ CurrentScreen }) {

    if (CurrentScreen === 0) {
        return <GlobalStats />
    }
    else if (CurrentScreen === 1) {
        return <CountriesStats />
    }
    else return <BarChart />
}
