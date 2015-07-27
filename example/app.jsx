
"use strict";

var React = require('react');
var MDL = require('mdl-react');

var App = React.createClass({
	render: function() {
		var links = [
			<a href='#home'>Home</a>,
			<a href='#about'>About Me</a>,
			<a href='#contact'>Contact Me</a>,
		];
		var sectionStyle0 = {
			background: 
			'url("https://dl.dropboxusercontent.com/u/107164257/aboutme_bg%20%28Medium%29.png" )',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right',
			height: '620px',
			width: '1500px',
		};
		var sectionStyle1 = {
			background: '#DDDDDD',
		};
		var sectionStyle2 = {
			background: '#AAAAAA',
			// height: '620px',
			// width: '1500px',
		};
		//card_1 style
		var titleStyle = {
			color: '#ffffff',
			background : 
			'url("https://dl.dropboxusercontent.com/u/107164257/aboutme_re1%20%28Custom%29%20%282%29.jpg")  no-repeat',
			backgroundSize: '100% 100%',
			backgroundPosition: 'center',
		};
		var cardStyle_1 = {
			margin: 'auto',
		};
		//card_2 style
		var gridStyle = {
			margin: 'auto',
			width:'1200px',
		};
		var actionStyle_2 = {
			color : '#ffffff',
			height: '52px',
			padding: '16px',
			background: 'rgba(0, 0, 0, 0.2)',
		};
		//card_3 style
		var cardStyle_3 = {
			background: 'url("https://dl.dropboxusercontent.com/u/107164257/mywork1.jpg") contain',
		};
		var colorStyle = {
			color: '#ffffff',
		};
		var actionStyle_3 = {
			borderColor: 'rgba(255, 255, 255, 0.2)',
		};
		//card-4 style
		var buttonStyle = {
			marginLeft: '860px',
		};
		var textStyle = {
			paddingLeft: '25%',
			paddingTop: '10%',
			color: '#666666',
		};
		var textStyle2 = {
			textAlign: 'center',
			paddingTop: '30px',
			color: '#666666',
		};
		var textStyle3 = {
			marginLeft: '65%',
			paddingTop: '5%',
			color: '#666666',
		};
		var leftSection = {
			links : [
				<MDL.Tooltip text = 'Share' large = {true}>
					<MDL.Button type = 'IconButton'>
						<button style={colorStyle}>
							<i className="material-icons">share</i>
						</button>
					</MDL.Button>
				</MDL.Tooltip>,
				<MDL.Tooltip text = 'Cloud' large = {true}>
					<MDL.Button type = 'IconButton' isRipple={true}>
						<button style={colorStyle}>
							<i className="material-icons">cloud</i>
						</button>
					</MDL.Button>
				</MDL.Tooltip>,
				<MDL.Tooltip text = 'Public' large = {true}>
					<MDL.Button type = 'IconButton' isRipple={true}>
						<button style={colorStyle}>
							<i className="material-icons">public</i>
						</button>
					</MDL.Button>
				</MDL.Tooltip>,
			],
		};
		var rightSection = {
			links : [
				<MDL.Button type = 'RaisedButton'>
					<a href='#home' style={colorStyle}>
						Top
					</a>
				</MDL.Button>
			],
		};

		return (
			<div>
			<MDL.Layout 
				title='Emily Practice'
				isFixedHeader={true}
				headerLinks={links}
			>
			<div className='section_0'>
				<section>
					<MDL.Grid style={sectionStyle0}>
						<MDL.GridCell col={12}>
							<a name="home"></a>
							<div style={textStyle}><h1>Emily Wen</h1></div>
						</MDL.GridCell>
					</MDL.Grid>
				</section>
			</div>
			<div className='section_1'>
				<section style={sectionStyle1}>
					<a name="about"></a>
					<div style={textStyle2}><h2>About Me</h2></div>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col = {4}>
							<MDL.Card width='384' height='326' shadow={8} style={cardStyle_1}>
								<MDL.CardTitle height="300" style={titleStyle}>
									About Me
								</MDL.CardTitle>
								<MDL.CardSupportingText >
									About my colledge life.
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										Read More
									</MDL.Button>
								</MDL.CardAction>
							</MDL.Card>
						</MDL.GridCell>
						<MDL.GridCell col = {4}>
							<MDL.Card width='384' height='326' shadow={8} style={cardStyle_1}>
								<MDL.CardTitle height="300" style={titleStyle}>
									About Me
								</MDL.CardTitle>
								<MDL.CardSupportingText >
									About my colledge life.
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										Read More
									</MDL.Button>
								</MDL.CardAction>
							</MDL.Card>
						</MDL.GridCell>
						<MDL.GridCell col = {4}>
							<MDL.Card width='384' height='326' style = {cardStyle_1} shadow = {8}>
								<MDL.CardTitle height='300' style = {titleStyle}>
									Welcome
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									The card supporting text....
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										GET STARTED
									</MDL.Button>
								</MDL.CardAction>
								<MDL.CardMenu>
									<MDL.Menu openDirection='bottom-right'>
										<MDL.Button type="IconButton" style={colorStyle}>
											<button>
												<i className="material-icons">more_vert</i>
											</button>
										</MDL.Button>
										<div> Share </div>
										<div disabled> Delete </div>
									</MDL.Menu>
								</MDL.CardMenu>
							</MDL.Card>
						</MDL.GridCell>
					</MDL.Grid >
				</section>
			</div>
			<div className='section_2'>
				<section style={sectionStyle2}>
					<a name="contact"></a>
					<div style={textStyle3}><h2>Contact Me</h2></div>
					<MDL.TextField
						labelText='Your name:'
						defaultValue='Please fill your name.'
						isFloatingLabel={true}
					/><br />
					<MDL.TextField
						labelText='Your e-mail:'
						defaultValue='Please fill your e-mail.'
						isFloatingLabel={true}
					/><br />
					<MDL.TextField
						labelText='Floating Multiline Textfield'
						isFloatingLabel={true}
						isMultiline={true}
					/>
				</section>
			</div>
			<MDL.MiniFooter
				leftSection = {leftSection}
				rightSection = {rightSection}
			/>
			</MDL.Layout>
			</div>
		);
	}
});

React.render(
  <App />,
  document.getElementsByTagName('body')[0]
);
