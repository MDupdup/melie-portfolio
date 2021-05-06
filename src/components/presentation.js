import * as React from "react";
import melie from "../resources/melie.jpg"

export class Presentation extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column is-5 is-centered">
                        <img src={melie} title="ez"/>
                    </div>
                    <div className="column"/>
                    <div className="column is-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor est, consectetur at mi eu, maximus vestibulum quam. Sed ultricies luctus rutrum. Etiam at hendrerit lectus, finibus tincidunt diam. Praesent vel enim lectus. Phasellus lorem lectus, iaculis sed pretium sed, tempus vehicula mi. Phasellus eget eros vel nisl facilisis sollicitudin at at turpis. Suspendisse lacinia elementum lorem, vel tempus tellus gravida porttitor. Cras ornare mauris eu lobortis gravida. Fusce condimentum ornare turpis id imperdiet. Etiam cursus magna tellus, eget posuere magna sollicitudin in. Suspendisse eros felis, sodales ac felis in, vulputate eleifend libero. Sed ut scelerisque justo, sed cursus tellus. In purus metus, interdum ut fermentum eget, interdum sed purus.

                        Integer sit amet rutrum risus. Mauris ipsum magna, tempor eu luctus bibendum, sollicitudin id magna. Nunc a dui eu leo mattis laoreet eu non turpis. Cras dignissim ac felis ut viverra. Aenean quis felis justo. Maecenas pretium auctor nibh, vitae semper nunc. Donec ac rutrum eros.
                    </div>
                </div>
            </div>
        );
    }
}
