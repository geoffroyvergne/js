import React, { Component }  from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class TestComponent extends Component {

	render() {
		return (
			<div>
				<h2>Test</h2>

				<ButtonToolbar>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="success">Success</Button>
					<Button variant="warning">Warning</Button>
					<Button variant="danger">Danger</Button>
					<Button variant="info">Info</Button>
					<Button variant="light">Light</Button>
					<Button variant="dark">Dark</Button>
					<Button variant="link">Link</Button>
				</ButtonToolbar>
			</div>
		)
	}
}

export default TestComponent; 