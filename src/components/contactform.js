import * as React from "react";

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactName: "",
            mail: "",
            content: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target)
        this.setState({
            contactName: event.target.contactName,
            mail: event.target.mail,
            content: event.target.content
        });
    }

    handleSubmit(event) {
        alert("Formulaire validé : " + this.state.contactName);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container is-justify-content-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="columns">
                        <div className="column is-half">
                            <input
                                className="input is-medium"
                                type="text"
                                name="contactName"
                                value={this.state.contactName}
                                onChange={this.handleChange}
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="column is-half">
                            <input
                                className="input is-medium"
                                type="text"
                                name="mail"
                                value={this.state.mail}
                                onChange={this.handleChange}
                                placeholder="Adresse de contact"
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-full">
                            <textarea
                                className="textarea"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                                rows="10"
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="columns is-justify-content-center">
                        <input className="button" type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div>

        );
    }
}
