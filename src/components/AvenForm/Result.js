import React from 'react';

export default class Result extends React.Component {
    render() {
        return this.props.data.showInfo && (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{this.props.data.name}</th>
                        <th>{this.props.data.email}</th>
                        <th>{this.props.data.gender}</th>
                        <th>{this.props.data.address}</th>
                        <th>{this.props.data.favorite}</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}
