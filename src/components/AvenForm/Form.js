import React from 'react';
import Result from './Result'

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            gender: "",
            address: "",
            favorite: "",
            showInfo: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
          [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            showInfo: true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        AvenForm
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="email@example.com"
                                        name="email"
                                        defaultValue={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Mr. A"
                                        name="name"
                                        defaultValue={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <fieldset className="form-group">
                                <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" defaultValue="mail" onChange={this.onChange} />
                                    <label className="form-check-label">
                                        Male
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" defaultValue="female" onChange={this.onChange} />
                                    <label className="form-check-label">
                                        Female
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </fieldset>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <select className="form-control" name="address" onChange={this.onChange}>
                                        <option>-----</option>
                                        <option defaultValue="1">Ha Noi</option>
                                        <option defaultValue="2">Ho Chi Minh</option>
                                        <option defaultValue="3">Da Nang</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Favorite</label>
                                <div className="col-sm-10">
                                    <textarea
                                        className="form-control"
                                        name="favorite"
                                        rows="3"
                                        defaultValue={this.state.favorite}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="card">
                    <Result data={this.state}></Result>
                </div>
            </div>
        )
    }
}
