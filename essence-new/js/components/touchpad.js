import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import ClassNames from 'classnames';
import TouchPad from 'essence-touchpad';
import Footer from '../partials/footer';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppTouchPad extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			visible: {
				round: false,
				inline: false
			},
			position: {
				start: { top: 0, left: 0},
				end: { top: 0, left: 0},
				touchpad: { top: 0, left: 0}
			},
			classes: ClassNames(
				this.props.classes,
				this.props.className
			)
        };
    }

	getPosition(event) {
	    var position = this.state.position,
	        mousePosition = this.mousePosition(event);

	    position.start = {
	        left: mousePosition.left,
	        top: mousePosition.top
	    };
	    position.touchpad = {
	        top: position.start.top,
	        left: position.start.left
	    };

	    this.setState({
	        position: position
	    });
	}

	mousePosition(event) {
	    var e = event || window.event,
	        pageX = e.pageX,
	        pageY = e.pageY;

	    if (pageX === undefined) { // IE 8
	        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	    }

	    return {
	        left: pageX,
	        top: pageY
	    };
	}

	selectedTextRound(event) {
	    var selectedText = window.getSelection().toString();
	    var visible = this.state.visible;
	    
	    visible.round = selectedText.length > 0 ? true : false;

	    this.getPosition(event);
	    this.setState({
	        visible: visible
	    });
	}

	selectedTextInline(event) {
	    var selectedText = window.getSelection().toString();
	    var visible = this.state.visible;

	    visible.inline = selectedText.length > 0 ? true : false;

	    this.getPosition(event);
	    this.setState({
	        visible: visible
	    });
	}


    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TOUCH PAD</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Touch Pad is an experimental Essence component which can be used for text editing, inline menu options or other ideas.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'/assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block>


				<Block className={'e-container'}>
		        	<Block className={'e-row e-margin-top-25'}>
		        		<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
									<Text className={'e-position-relative e-text-justify'}>
										<Text type={'p'} onMouseUp={this.selectedTextRound.bind(this)}>
											Lorem ipsum dolor sit amet, duo ex malis putent possit, ea dicta vitae intellegat vel, et tamquam integre mei. Debet invidunt ius ei, ex omnesque efficiendi vis, eu elit paulo ullamcorper eam. Probatus explicari ius an, ei diceret noluisse nam, eam modo mandamus no. Vis in iudico percipitur efficiantur, sea ne maiestatis neglegentur. Assum nonumes ei pro. Sit hinc audiam meliore id, tale justo solet vim ex, quodsi molestie cu his.
											Usu eripuit principes voluptatum id, ea sint nostro vis, vel lobortis mnesarchum ex. Ne vix vide dicam delicatissimi, delenit abhorreant usu ut. Vel ne ubique mediocrem adolescens, vis sint possim omnesque id, soleat suscipiantur in eam. Paulo dolor periculis ius no, eum nisl doming corrumpit eu. Modus inermis fastidii vel ad, ei duo vocibus propriae senserit.
											Pri ut labitur debitis consequuntur, no facer lobortis mea. Democritum vituperatoribus eam ei. Ei his adipisci salutandi accommodare. Ex alia possim nam, pro ubique graeco ea. Duo molestie oporteat constituam ad, fabulas postulant corrumpit et eam.
										</Text>
										<br />
										<Text type={'p'} onMouseUp={this.selectedTextInline.bind(this)}>
											Eam sonet nihil singulis ex. Eum debet explicari voluptatum te. Vim sumo tritani ea, id agam brute vitae sed, eu labitur vituperatoribus has. Ad erant efficiendi mediocritatem cum, qui porro mucius ea, eu reque facer nec. Molestiae moderatius sit at, et qui veri apeirian. Ne per brute persecuti, ne alterum molestie sadipscing cum. Eu periculis omittantur qui, ei usu fabellas perfecto qualisque.
											Duo ei tale delectus theophrastus, urbanitas mnesarchum has et. Illum quando ex sed, posse perpetua elaboraret et ius. Atqui debet usu ea, no novum alterum eam, at sea dicant urbanitas. Duo nostrum accusata no.
										</Text>
									</Text>
									<TouchPad classes={'e-text-green-500'} visible={this.state.visible.round} position={this.state.position.touchpad}>
										<Btn type={'touchpad'} label={'copy'} icon={'content-content-copy'} className={'copy'} />
										<Btn type={'touchpad'} label={'paste'} icon={'content-content-paste'} className={'paste'} />
										<Btn type={'touchpad'} label={'redo'} icon={'content-redo'} className={'redo'} />
										<Btn type={'touchpad'} label={'bold'} icon={'editor-format-bold'} className={'bold'} />
										<Btn type={'touchpad'} label={'more'} icon={'navigation-more-vert'} className={'more'} />
										<Btn type={'touchpad'} label={'italic'} icon={'editor-format-italic'} className={'italic'} />
										<Btn type={'touchpad'} label={'undo'} icon={'content-undo'} className={'undo'} />
										<Btn type={'touchpad'} label={'cut'} icon={'content-content-cut'} className={'cut'} />
									</TouchPad>
									<TouchPad inline={true} classes={'e-text-green-500'} visible={this.state.visible.inline} position={this.state.position.touchpad}>
										<List type={'inline'} className={'e-button'}>
											<ListItem>
												<Text type={'a'} href={'#bold'} className={'e-text-uppercase e-text-grey-800'}>Bold</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'} href={'#paste'} className={'e-text-uppercase e-text-grey-800'}>Paste</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'} href={'#italic'} className={'e-text-uppercase e-text-grey-800'}>Italic</Text>
											</ListItem>
										</List>
									</TouchPad>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-12'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-touchpad</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import TouchPad from 'essence-touchpad';
									<br />
									<br />
									getPosition(event) &#123;
									<br />
									&nbsp;var position = this.state.position,
									<br />
									&nbsp;&nbsp;mousePosition = this.mousePosition(event);
									<br />

									<br />
									&nbsp;position.start = &#123;
									<br />
									&nbsp;&nbsp;left: mousePosition.left,
									<br />
									&nbsp;&nbsp;top: mousePosition.top
									<br />
									&nbsp;&#125;;
									<br />
									&nbsp;position.touchpad = &#123;
									<br />
									&nbsp;&nbsp;top: position.start.top,
									<br />
									&nbsp;&nbsp;left: position.start.left
									<br />
									&nbsp;&#125;;
									<br />

									<br />
									&nbsp;this.setState(&#123;
									<br />
									&nbsp;&nbsp;position: position
									<br />
									&nbsp;&#125;);
									<br />
									&#125;
									<br />

									<br />
									mousePosition(event) &#123;
									<br />
									&nbsp;var e = event || window.event,
									<br />
									&nbsp;&nbsp;pageX = e.pageX,
									<br />
									&nbsp;&nbsp;pageY = e.pageY;
									<br />

									<br />
									&nbsp;if (pageX === undefined) &#123;
									<br />
									&nbsp;&nbsp;pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
									<br />
									&nbsp;&nbsp;pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
									<br />
									&nbsp;&#125;
									<br />

									<br />
									&nbsp;return &#123;
									<br />
									&nbsp;&nbsp;left: pageX,
									<br />
									&nbsp;&nbsp;top: pageY
									<br />
									&nbsp;&#125;;
									<br />
									&#125;
									<br />
									<br />

									selectedText(event) &#123;
									<br />
									&nbsp;&nbsp;var currentText = window.getSelection().toString();
									<br />
									&nbsp;&nbsp;this.getPosition(event);
									<br />
									&nbsp;&nbsp;this.setState(&#123;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;visible: currentText.length > 0 ? true : false
									<br />
									&nbsp;&nbsp;&#125;);
									<br />
									&#125;
									<br />
									<br />
									&lt;Text className=&#123;'e-position-relative e-text-justify'} onMouseUp=&#123;this.selectedText.bind(this)}&gt;
									<br />
									&nbsp;&lt;Text type=&#123;'p'}&gt;
									<br />
									&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, duo ex malis putent possit, ea dicta vitae intellegat vel, et tamquam integre mei. Debet invidunt ius ei, ex omnesque efficiendi vis, eu elit paulo ullamcorper eam. Probatus explicari ius an, ei diceret noluisse nam, eam modo mandamus no. Vis in iudico percipitur efficiantur, sea ne maiestatis neglegentur. Assum nonumes ei pro. Sit hinc audiam meliore id, tale justo solet vim ex, quodsi molestie cu his.
									<br />
									&nbsp;&nbsp;&nbsp;Usu eripuit principes voluptatum id, ea sint nostro vis, vel lobortis mnesarchum ex. Ne vix vide dicam delicatissimi, delenit abhorreant usu ut. Vel ne ubique mediocrem adolescens, vis sint possim omnesque id, soleat suscipiantur in eam. Paulo dolor periculis ius no, eum nisl doming corrumpit eu. Modus inermis fastidii vel ad, ei duo vocibus propriae senserit.
									<br />
									&nbsp;&nbsp;&nbsp;Pri ut labitur debitis consequuntur, no facer lobortis mea. Democritum vituperatoribus eam ei. Ei his adipisci salutandi accommodare. Ex alia possim nam, pro ubique graeco ea. Duo molestie oporteat constituam ad, fabulas postulant corrumpit et eam.
									<br />
									&nbsp;&lt;/Text&gt;
									<br />
									<br />
									&nbsp;&lt;Text type=&#123;'p'}&gt;
									<br />
									&nbsp;&nbsp;&nbsp;Eam sonet nihil singulis ex. Eum debet explicari voluptatum te. Vim sumo tritani ea, id agam brute vitae sed, eu labitur vituperatoribus has. Ad erant efficiendi mediocritatem cum, qui porro mucius ea, eu reque facer nec. Molestiae moderatius sit at, et qui veri apeirian. Ne per brute persecuti, ne alterum molestie sadipscing cum. Eu periculis omittantur qui, ei usu fabellas perfecto qualisque.
									<br />
									&nbsp;&nbsp;&nbsp;Duo ei tale delectus theophrastus, urbanitas mnesarchum has et. Illum quando ex sed, posse perpetua elaboraret et ius. Atqui debet usu ea, no novum alterum eam, at sea dicant urbanitas. Duo nostrum accusata no.
									<br />
									&nbsp;&lt;/Text&gt;
									<br />
									&lt;/Text&gt;
									<br />
									<br />
									&lt;TouchPad classes=&#123;'e-text-green-500'} visible=&#123;this.state.visible} position=&#123;this.state.position.touchpad}&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'copy'} icon=&#123;'content-content-copy'} className=&#123;'copy'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'paste'} icon=&#123;'content-content-paste'} className=&#123;'paste'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'redo'} icon=&#123;'content-redo'} className=&#123;'redo'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'bold'} icon=&#123;'editor-format-bold'} className=&#123;'bold'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'more'} icon=&#123;'navigation-more-vert'} className=&#123;'more'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'italic'} icon=&#123;'editor-format-italic'} className=&#123;'italic'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'undo'} icon=&#123;'content-undo'} className=&#123;'undo'} /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'touchpad'} label=&#123;'cut'} icon=&#123;'content-content-cut'} className=&#123;'cut'} /&gt;
									<br />
									&lt;/TouchPad&gt;							
			    				</code>
							</pre>
						</Block>
						<Block classes={'brick brick-12 properties e-margin-bottom-25'}>	
							<Text type={'h4'} classes={'e-text-indigo-500 e-margin-top-15'}>PROPERTIES</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />

	        				<Block classes={'e-row tabel-header no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-grey-700'}>	
	        						Name
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-grey-700'}>	
	        						Default
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-700'}>	
									Description
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						visible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						visible=&#123;false&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									true - show the touchpad or false (default) - hide the touchpad
	        					</Block>
	        				</Block>		
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						position
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									list - top: offset pixels & left: offset pixels
	        					</Block>
	        				</Block>        						        				
						</Block>
					</Block>
				</Block>
				<Footer />
			</Block>
		);
    }
}

exports.AppTouchPad = AppTouchPad;