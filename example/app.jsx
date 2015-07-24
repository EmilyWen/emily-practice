
"use strict";

var React = require('react');
var MDL = require('mdl-react');

var App = React.createClass({
	render: function() {
		var links = [
			<a href='#'>Link 1</a>,
			<a href='#'>Link 2</a>,
			<a href='#'>Link 3</a>,
		];
		//card_1 style
		var titleStyle = {
			color: '#fff',
			background : 
			'url("http://i.imgur.com/L5YFTxg.png") bottom right 15% no-repeat #46B6AC',
		};
		var cardStyle_1 = {
			margin: '50px 350px',
		};
		//card_2 style
		var cardStyle_2 = {
			background: 'url("http://i.imgur.com/ZD4iVTs.jpg") center / cover',
			margin: '30px 350px',
		};
		var actionStyle_2 = {
			color : '#ffffff',
			height: '52px',
			padding: '16px',
			background: 'rgba(0, 0, 0, 0.2)',
		};
		var inlineStyle = {
			display: 'inline',
		};
		//card_3 style
		var cardStyle_3 = {
			margin : '30px 50px',
			background: '#3E4EB8',
			color: '#ffffff',
		};
		var colorStyle = {
			color: '#ffffff',
		};
		var actionStyle_3 = {
			borderColor: 'rgba(255, 255, 255, 0.2)',
		};
		return (
			<div>
			<MDL.Layout 
				title='Emily Practice'
				isFixedHeader={true}
				headerLinks={links}
			>
				
				<MDL.Card width='860' height='450' shadow={8} style={cardStyle_1}>
					<MDL.CardTitle height="350" style={titleStyle}>
						The First Article
					</MDL.CardTitle>
					<MDL.CardSupportingText >
						The first Card.
					</MDL.CardSupportingText>
					<MDL.CardAction border={true}>
						<MDL.Button type="FlatButton" isPrimary={true}>
							Read More
						</MDL.Button>
					</MDL.CardAction>
				</MDL.Card>

				<span style={inlineStyle}>
					<MDL.Card width='556' height='326' style={cardStyle_2} shadow={2}>
						<MDL.CardTitle height='326'></MDL.CardTitle>
						<MDL.CardAction style={actionStyle_2}>
							<span className="demo-card-image__filename">Image.jpg</span>
						</MDL.CardAction>
					</MDL.Card>
				
					<MDL.Card width='256' height='256' style={cardStyle_3} shadow={2}>
						<MDL.CardTitle height="203">
							<h4 style={colorStyle}>
								Featured event:<br />
								May 24, 2016<br />
								7-11pm
							</h4>
						</MDL.CardTitle>
						<MDL.CardAction border={true} style={actionStyle_3}>
							<MDL.Button type="FlatButton" isPrimary={true}>
								Read More
							</MDL.Button>	
						</MDL.CardAction>
					</MDL.Card>
				</span>
			</MDL.Layout>
			</div>
		);
	}
});

React.render(
  <App />,
  document.getElementsByTagName('body')[0]
);
