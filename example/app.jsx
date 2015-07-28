
"use strict";

var React = require('react');
var MDL = require('mdl-react');

var App = React.createClass({
	render: function() {
		var links = [
			<a href='#home'>Home</a>,
			<a href='#about'>About Me</a>,
			<a href='#contact'>Contact</a>,
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
			background: '#ffffff',
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
		var cellStyle = {
			margin: '50px auto',
		};
		var colorStyle = {
			color: '#ffffff',
		};
		var textStyle = {
			paddingLeft: '25%',
			paddingTop: '10%',
			color: '#666666',
		};
		var textStyle2 = {
			textAlign: 'center',
			padding: '30px',
			color: '#666666',
		};
		var fbStyle = {
			width: '100%',
			height: '100%',
			color: '#000000',
			margin: 'auto',
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
				<MDL.Button type = 'FloatingActionButton'>
					<a href='#home' style={colorStyle}>
						<i className="material-icons">keyboard_arrow_up</i>
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
							<div style={textStyle}>
								<h1>Emily Wen</h1>
							</div>
						</MDL.GridCell>
					</MDL.Grid>
				</section>
			</div>
			<div className='section_1'>
				<section style={sectionStyle1}>
					<a name="about"></a>
					<div style={textStyle2}>
						<h2>About Me</h2>
					</div>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col = {4} style={cellStyle}>
							<MDL.Card width='325' height='326' shadow={8} style={cardStyle_1}>
								<MDL.CardTitle height="280" style={titleStyle}>
									About Me
								</MDL.CardTitle>
								<MDL.CardSupportingText >
									About my college life.
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton" isPrimary={true}>
										Read More
									</MDL.Button>
								</MDL.CardAction>
							</MDL.Card>
						</MDL.GridCell>
						<MDL.GridCell col = {4} style={cellStyle}>
							<MDL.Card width='325' height='326' shadow={8} style={cardStyle_1}>
								<MDL.CardTitle height="280" style={titleStyle}>
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
						<MDL.GridCell col = {4} style={cellStyle}>
							<MDL.Card width='325' height='326' style = {cardStyle_1} shadow = {8}>
								<MDL.CardTitle height='280' style = {titleStyle}>
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
					<div style={textStyle2}>
						<h2>Contact</h2>
					</div>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={3} style={cellStyle}>
							<MDL.Button type="FlatButton" isRipple={false} isPrimary={false} style={fbStyle}>
								<a href="https://www.facebook.com/wanhan.wen"><img src="https://dl.dropboxusercontent.com/u/107164257/icon_fb.gif" width='100px' height='100px'></img><h5>facebook</h5></a>
							</MDL.Button>
						</MDL.GridCell>
						<MDL.GridCell col={3} style={cellStyle}>
							<MDL.Button type="FlatButton" isRipple={false} isPrimary={false} style={fbStyle}>
								<a href="https://www.linkedin.com/home?trk=nav_responsive_tab_home"><img src="https://dl.dropboxusercontent.com/u/107164257/Linkedin_circle.svg.png" width='100px' height='100px'></img><h5>LinkedIn</h5></a>
							</MDL.Button>
						</MDL.GridCell>
						<MDL.GridCell col={3} style={cellStyle}>
							<MDL.Button type="FlatButton" isRipple={false} isPrimary={false} style={fbStyle}>
								<a href="https://www.pinterest.com/emily1992916/"><img src="https://dl.dropboxusercontent.com/u/107164257/Pinterest_Favicon.png" width='100px' height='100px'></img><h5>Pintrest</h5></a>
							</MDL.Button>
						</MDL.GridCell>
						<MDL.GridCell col={3} style={cellStyle}>
							<MDL.Button type="FlatButton" isRipple={false} isPrimary={false} style={fbStyle}>
								<a href="https://instagram.com/wenwanhan/"><img src="https://dl.dropboxusercontent.com/u/107164257/Instagram-icon.png" width='100px' height='100px'></img><h5>instagram</h5></a>
							</MDL.Button>
						</MDL.GridCell>
					</MDL.Grid>
				</section>
			</div>
			<div className='section_3'>
				<section style={sectionStyle1}>
					<div style={textStyle2}>
						<h3>send me an e-mail</h3>
					</div>
					<MDL.Grid style={sectionStyle1}>
						<MDL.GridCell col={8}>
							<div className='name'>
								Please enter your name:<br/>
								<MDL.TextField
								labelText='Your name'
								isFloatingLabel={true}
								/>
							</div>
							<div className='email'>
								Please enter your e-mail:<br/>
								<MDL.TextField
								labelText='Your e-mail'
								isFloatingLabel={true}
								>
								</MDL.TextField>
							</div>
							<div className='message'>
								Please write down your message:<br/>
								<MDL.TextField
								labelText='Your message'
								isFloatingLabel={true}
								isMultiline={true}
								/>
							</div>
						</MDL.GridCell>
						<MDL.GridCell col={4}>
							<MDL.Button type = 'FloatingActionButton'>
								<a href='#' style={colorStyle}>
								<i className="material-icons">send</i>
								</a>
							</MDL.Button>
						</MDL.GridCell>
					</MDL.Grid>
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
