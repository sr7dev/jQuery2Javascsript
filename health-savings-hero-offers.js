/**
 * javascript code for Health Saving Heros Offer Page.
 * - Converting jQuery to JavaScript for Hero Page 
 *
 * @author Artem<artem@sobetechguru.com>
 * @see https://gitlab.com/medicalrecords/medicalrecords-web/issues/100
 * @since 1.4.0
 */

/**
 * Slider Script
 * @author Bojana<bojana@sobetechguru.com>
 */
document.addEventListener( 'DOMContentLoaded', function( event ) {
	var sliderContainer = document.querySelector(
			'.et_pb_slide .et_pb_container.clearfix'
		);

	/* [BEGIN-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/394 */
	sliderContainer.style.height = 'auto';
	/* [END-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/394 */
});

/**
 * Tabs Script
 */
document.addEventListener( 'DOMContentLoaded', function( event ) {
	var checkDiviTabElem, i,
		checkCursorOverDiviTabTimer = 0,
		et_pb_toggle = document.querySelector( '.et_pb_toggle' ),
		subTabs = document.querySelectorAll(
				'.et_pb_tabs .et_pb_tabs_controls > [class^=\'et_pb_tab_\']'
			);

	// Enable Divi Toggle with hover
	if ( et_pb_toggle ) {
		et_pb_toggle.addEventListener( 'mouseenter', function( e ) {
			var event = document.createEvent( 'HTMLEvents' );

			event.initEvent( 'click', true, false );
			et_pb_toggle.querySelector( '.et_pb_toggle_title' )
				.dispatchEvent( event );
		});
	}
	
	// Enable Divi Tabs with hover
	for ( i = 0, subTabCount = subTabs.length; i < subTabCount; i ++ ) {
		subTabs[ i ].addEventListener( 'mouseenter', function( e ) {
			let isActivate = false;
			if ( this.classList )
				isActivate = this.classList.contains( 'et_pb_tab_active' );
			else {
				isActivate = new RegExp( '(^| )' + 'et_pb_tab_active' + 
					'( |$)', 'gi' ).test( this.et_pb_tab_active );
			}

			if ( !isActivate ) {
				checkDiviTabElem = this;
				var event = document.createEvent( 'HTMLEvents' );
            	event.initEvent( 'click', true, false );
				this.querySelector( 'a' ).dispatchEvent( event );
			} else {
				checkDiviTabElem = false;
			}
		});
	}
	

	function checkDiviTab() {
		if ( checkDiviTabElem ) {
			var event = document.createEvent( 'HTMLEvents' );
			event.initEvent( 'click', true, false );
			checkDiviTabElem.firstChild.dispatchEvent( event );
		}
		checkCursorOverDiviTabTimer = setTimeout( checkDiviTab, 150 );
	}

	checkDiviTab();
});

function add_scroll_class( target_selector, className ) {
	var target_elements = document.querySelectorAll( target_selector );
	for ( i = 0, nCount = target_elements.length; i < nCount; i ++ )
			target_elements[ i ].classList.add( className );
} 

function remove_scroll_class( target_selector, className ) {
	var target_elements = document.querySelectorAll( target_selector );
	for ( i = 0, nCount = target_elements.length; i < nCount; i ++ )
			target_elements[ i ].classList.remove( className );
} 

/*Mobile scrolling Script*/

document.addEventListener( 'DOMContentLoaded', function() {
	var lastScrollTop = 0;
	window.addEventListener( 'scroll', function() {
		var st = ( document.documentElement || 
				document.body.parentNode || 
				document.body
			).scrollTop;

		if ( st > lastScrollTop ) {
			add_scroll_class( '.TopSection', 'hide' );
			add_scroll_class( 'h2.et_pb_slide_title', 'top' );
			add_scroll_class( '.et-pb-controllers', 'top-controllers' );
			add_scroll_class( '.logo_container img#logo', 'non-text' );

			document.body.classList
				.add( 'hero-scrolling' );

		} else {
			remove_scroll_class( '.TopSection', 'hide' );
			remove_scroll_class( 'h2.et_pb_slide_title', 'top' );
			remove_scroll_class( '.et-pb-controllers', 'top-controllers' );
			remove_scroll_class( '.logo_container img#logo', 'non-text' );

			document.body.classList
				.remove( 'hero-scrolling' );
		}  

		if ( st === lastScrollTop ) {
			remove_scroll_class( '.TopSection', 'hide' );
			remove_scroll_class( 'h2.et_pb_slide_title', 'top' );
			remove_scroll_class( '.et-pb-controllers', 'top-controllers' );
			remove_scroll_class( '.logo_container img#logo', 'non-text' );
			
			document.body.classList
				.remove( 'hero-scrolling' );
		}

		lastScrollTop = st;
	});
});

/*Mobile scrolling Script*/
document.addEventListener( 'DOMContentLoaded', function() {
	/*[BEGIN-ADD][STG:Bojana 5/24/2019] https://www.bugherd.com/projects/163588/tasks/482*/
	var nooffer_tab = document.querySelector( 'li.et_pb_tab_5' );
	nooffer_tab.classList.add( 'nooffer' );

	function set_nooffer_tab( target_selector ) {
		var target_tab_element = document.querySelector( target_selector );
		target_tab_element.classList.add( 'nooffer' );
	} 

	/*[END-ADD][STG:Bojana 5/24/2019] https://www.bugherd.com/projects/163588/tasks/482*/
	/*[BEGIN-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/399*/
	/*[BEGIN-UPDATE][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/399*/     
	var nooffer_section_element = document.querySelector(
			'.et_pb_tab_5 .pbe-li-sc .et_pb_section'
		);
	/*[END-UPDATE][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/455*/     
	nooffer_section_element.parentNode.parentNode.style.backgroundColor = '#e8e6e4';
	nooffer_section_element.parentNode.parentNode.style.height = '900px';
	nooffer_section_element.style.height = '900px';
	/*[END-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/399*/     
   
	function set_nooffer_section( target_section_element ) {
		for ( i = 0, nCount = target_section_element.length; i < nCount; i ++ ) {
			target_section_element[ i ].innerHTML = nooffer_section_element.innerHTML;
			target_section_element[ i ].style.display = 'flex';
			target_section_element[ i ].style.flexDirection = 'column';
			target_section_element[ i ].style.backgroundColor = '#e8e6e4';
			/*[BEGIN-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/399*/
			target_section_element[ i ].style.height = '900px';
			/*[END-ADD][STG:Bojana 5/20/2019] https://www.bugherd.com/projects/163588/tasks/399*/
			target_section_element[ i ].parentNode.parentNode.style.backgroundColor = '#e8e6e4';
		}
	}

	function set_offer_content( target_tab, offer_type ) {
		var target_element = document.querySelectorAll(
				'.TabSection .leadresult' + offer_type
			);

		var source_element = document.querySelector(
				'.LEADAPIRESULT .leadresult'+ offer_type
			);

		if ( source_element !== null ) {
				for ( i = 0, nCount = target_element.length; i < nCount ; i ++ )
		    	target_element[ i ].innerHTML = source_element.innerHTML;
		} else {
			var dental_plan_section_element = document.querySelectorAll(
					'.TabSection' + offer_type
				);

			set_nooffer_section( dental_plan_section_element );
			set_nooffer_tab( target_tab );
		}
	}

	set_offer_content( '.et_pb_tab_0', '.health_insurance' );
	set_offer_content( '.et_pb_tab_1', '.short_term_health' );
	set_offer_content( '.et_pb_tab_2', '.medicare' );
	set_offer_content( '.et_pb_tab_3', '.rx_price' );
	set_offer_content( '.et_pb_tab_4', '.dental_plan' );
});

/*HideNavandFooter of Default Template*/

var image = document.querySelector( '#page-id-474402 img#logo' );

if ( image ) {
   image.src = '/wp-content/uploads/2019/02/Health-Insurance-Quotes-logo.svg';
}

/*HideNavandFooter of Default Template*/
