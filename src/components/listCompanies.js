import React, { Component } from 'react';
import { ListCompaniesItem } from './index'

export default class listCompanies extends Component {
    render() {
        const { store } = this.props;

        return (
            <ul>
                {
                    store.map((e, i) => {
                        return <ListCompaniesItem key={i} element={e} />
                    })
                }
            </ul>
        );
    }
}
