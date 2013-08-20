/*
 * Javascript for SVG manipilation
 * @author
 * @version
 */

// *************************************   FUNCTIONS FOR GENERATING SVG FACETS   *********************** //

// *************************************   PRODUCER PROFILE FUNCTIONS   ******************************** //
function getProducerProfileNotAvailable(svg){
	// producer_profile group to append to
	var producer_profile = document.getElementById("producer_profile");
	// create paths
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M152.178,97.822l59.796-59.795 C187.958,14.008,156.478,2,125,2l0,84.563C134.837,86.563,144.674,90.316,152.178,97.822z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M154.14,31.925 c2.306-0.358,5.972,1.384,5.972,1.384c-7.198,7.265-17.221,16.66-21.993,21.108c-1.67-0.165-3.921-0.971-3.979-2.51 c-0.066-1.755,2.612-3.657,4.608-5.616c4.082-4.008,6.06-6.125,10.018-10.091C150.775,34.184,152.558,32.167,154.14,31.925z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M167.306,26.13 c1.821,1.689,2.298,2.29,4.055,3.965c-7.401,7.411-22.163,21.813-24.745,24.211c-2.907,2.581-5.549,4.796-5.549,4.796 l-7.479,3.439l4.013-7.443c0,0,4.047-3.986,6.425-6.279C151.787,41.333,159.915,33.34,167.306,26.13z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M182.787,47.247l-1.194,11.154l-25.367-0.137  c-4.976,0.13-9.948,0.983-9.535-3.671c0.214-2.416,0.819-3.699,5.114-3.937h8.306c0,0-2.658-1.896-5.663-3.763 c1.758-1.844,8.417-8.233,11.033-10.81C167.033,36.949,182.787,47.247,182.787,47.247z");

	// remove content
	producer_profile.innerHTML = '';
	// append new paths
	producer_profile.appendChild(path1);
	producer_profile.appendChild(path2);
	producer_profile.appendChild(path3);
	producer_profile.appendChild(path4);
}

function getProducerProfileHigherLevel(svg){
	var linearGradient = createLineargradient(svg, "SVGID_1_", "userSpaceOnUse", "171.7363", "141.5719", "11.0854", "93.9615");
	
	linearGradient = getProducerLinearGradient(svg, linearGradient);
	
	// producer_profile group to append to
	var producer_profile = document.getElementById("producer_profile");
	// create paths
	var path1 = createPath(svg, "url(#SVGID_1_)", "#000000", 2, 10, "M152.178,97.822l59.796-59.795 C187.958,14.008,156.478,2,125,2l0,84.563C134.837,86.563,144.674,90.316,152.178,97.822z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M154.14,31.925 c2.306-0.358,5.972,1.384,5.972,1.384c-7.198,7.265-17.221,16.66-21.993,21.108c-1.67-0.165-3.921-0.971-3.979-2.51 c-0.066-1.755,2.612-3.657,4.608-5.616c4.082-4.008,6.06-6.125,10.018-10.091C150.775,34.184,152.558,32.167,154.14,31.925z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M167.306,26.13 c1.821,1.689,2.298,2.29,4.055,3.965c-7.401,7.411-22.163,21.813-24.745,24.211c-2.907,2.581-5.549,4.796-5.549,4.796 l-7.479,3.439l4.013-7.443c0,0,4.047-3.986,6.425-6.279C151.787,41.333,159.915,33.34,167.306,26.13z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M182.787,47.247l-1.194,11.154l-25.367-0.137  c-4.976,0.13-9.948,0.983-9.535-3.671c0.214-2.416,0.819-3.699,5.114-3.937h8.306c0,0-2.658-1.896-5.663-3.763 c1.758-1.844,8.417-8.233,11.033-10.81C167.033,36.949,182.787,47.247,182.787,47.247z");
	
	// remove content
	producer_profile.innerHTML = '';
	// append new paths
	producer_profile.appendChild(linearGradient);
	producer_profile.appendChild(path1);
	producer_profile.appendChild(path2);
	producer_profile.appendChild(path3);
	producer_profile.appendChild(path4);
}

function getProducerProfileAvailable(svg){
	// producer_profile group to append to
	var producer_profile = document.getElementById("producer_profile");
	// create paths
	var path1 = createPath(svg, "#ED1E7F", "#000000", 2, 10, "M152.178,97.822l59.796-59.795 C187.958,14.008,156.478,2,125,2l0,84.563C134.837,86.563,144.674,90.316,152.178,97.822z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M154.14,31.925 c2.306-0.358,5.972,1.384,5.972,1.384c-7.198,7.265-17.221,16.66-21.993,21.108c-1.67-0.165-3.921-0.971-3.979-2.51 c-0.066-1.755,2.612-3.657,4.608-5.616c4.082-4.008,6.06-6.125,10.018-10.091C150.775,34.184,152.558,32.167,154.14,31.925z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M167.306,26.13 c1.821,1.689,2.298,2.29,4.055,3.965c-7.401,7.411-22.163,21.813-24.745,24.211c-2.907,2.581-5.549,4.796-5.549,4.796 l-7.479,3.439l4.013-7.443c0,0,4.047-3.986,6.425-6.279C151.787,41.333,159.915,33.34,167.306,26.13z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M182.787,47.247l-1.194,11.154l-25.367-0.137  c-4.976,0.13-9.948,0.983-9.535-3.671c0.214-2.416,0.819-3.699,5.114-3.937h8.306c0,0-2.658-1.896-5.663-3.763 c1.758-1.844,8.417-8.233,11.033-10.81C167.033,36.949,182.787,47.247,182.787,47.247z");

	// remove content
	producer_profile.innerHTML = '';
	// append new paths
	producer_profile.appendChild(path1);
	producer_profile.appendChild(path2);
	producer_profile.appendChild(path3);
	producer_profile.appendChild(path4);
}

// *************************************   PRODUCER COMMENTS FUNCTIONS   ******************************** //
function getProducerCommentsNotAvailable(svg){
	// producer_comments group to append to
	var producer_comments = document.getElementById("producer_comments");
	// create pathS			
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M163.437,124.843H248 c0-33.965-13.768-64.716-36.026-86.974l-59.795,59.794C159.135,104.619,163.437,114.229,163.437,124.843z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M188.653,89.253c1.945-0.302,5.039,1.167,5.039,1.167 c-6.073,6.13-14.53,14.059-18.557,17.812c-1.409-0.141-3.309-0.82-3.358-2.119c-0.056-1.48,2.205-3.086,3.888-4.739 c3.445-3.38,5.113-5.168,8.452-8.515C185.815,91.159,187.318,89.458,188.653,89.253z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M199.762,84.364c1.537,1.424,1.94,1.931,3.423,3.345 c-6.245,6.253-18.702,18.405-20.879,20.428c-2.453,2.179-4.681,4.047-4.681,4.047l-6.313,2.901l3.385-6.281 c0,0,3.415-3.363,5.421-5.298C186.669,97.192,193.528,90.447,199.762,84.364z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M212.824,102.18l-1.007,9.414l-21.402-0.117 c-4.201,0.109-8.396,0.829-8.046-3.098c0.181-2.039,0.69-3.121,4.314-3.321h7.009c0,0-2.244-1.6-4.778-3.176 c1.483-1.555,7.1-6.947,9.309-9.12C199.533,93.493,212.824,102.18,212.824,102.18z");
	var path5 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M219.269,72.897 c-3.805,0-7.246,0.454-9.912,1.958c-2.04,1.151-4.286,3.034-4.286,6.494c0.001,5.772,4.373,6.634,7.295,7.61 c-1.253,2.804-2.225,3.635-3.487,5.02c5.856-0.267,10-3.14,10.791-4.208c8.587-0.133,13.083-3.408,13.077-8.111 C232.741,76.221,226.722,72.897,219.269,72.897z");

	// remove content
	producer_comments.innerHTML = '';
	// append new paths
	producer_comments.appendChild(path1);
	producer_comments.appendChild(path2);
	producer_comments.appendChild(path3);
	producer_comments.appendChild(path4);
	producer_comments.appendChild(path5);
}

function getProducerCommentsHigherLevel(svg){
	var linearGradient = createLineargradient (svg, "SVGID_2_", "userSpaceOnUse", "238.5967", "158.6666", "77.3408", "114.6128");

	linearGradient = getProducerLinearGradient(svg, linearGradient);
	
	// producer_comments group to append to
	var producer_comments = document.getElementById("producer_comments");
	// create paths
	var path1 = createPath(svg, "url(#SVGID_2_)", "#000000", 2, 10, "M163.437,124.843H248 c0-33.965-13.768-64.716-36.026-86.974l-59.795,59.794C159.135,104.619,163.437,114.229,163.437,124.843z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M188.653,89.253c1.945-0.302,5.039,1.167,5.039,1.167 c-6.073,6.13-14.53,14.059-18.557,17.812c-1.409-0.141-3.309-0.82-3.358-2.119c-0.056-1.48,2.205-3.086,3.888-4.739 c3.445-3.38,5.113-5.168,8.452-8.515C185.815,91.159,187.318,89.458,188.653,89.253z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M199.762,84.364c1.537,1.424,1.94,1.931,3.423,3.345 c-6.245,6.253-18.702,18.405-20.879,20.428c-2.453,2.179-4.681,4.047-4.681,4.047l-6.313,2.901l3.385-6.281 c0,0,3.415-3.363,5.421-5.298C186.669,97.192,193.528,90.447,199.762,84.364z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M212.824,102.18l-1.007,9.414l-21.402-0.117 c-4.201,0.109-8.396,0.829-8.046-3.098c0.181-2.039,0.69-3.121,4.314-3.321h7.009c0,0-2.244-1.6-4.778-3.176 c1.483-1.555,7.1-6.947,9.309-9.12C199.533,93.493,212.824,102.18,212.824,102.18z");
	var path5 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M219.269,72.897 c-3.805,0-7.246,0.454-9.912,1.958c-2.04,1.151-4.286,3.034-4.286,6.494c0.001,5.772,4.373,6.634,7.295,7.61 c-1.253,2.804-2.225,3.635-3.487,5.02c5.856-0.267,10-3.14,10.791-4.208c8.587-0.133,13.083-3.408,13.077-8.111 C232.741,76.221,226.722,72.897,219.269,72.897z");
	
	// remove content
	producer_comments.innerHTML = '';
	// append new paths
	producer_comments.appendChild(linearGradient);
	producer_comments.appendChild(path1);
	producer_comments.appendChild(path2);
	producer_comments.appendChild(path3);
	producer_comments.appendChild(path4);
	producer_comments.appendChild(path5);
}

function getProducerCommentsAvailable(svg){
	// producer_comments group to append to
	var producer_comments = document.getElementById("producer_comments");
	// create paths
	var path1 = createPath(svg, "#ED1E7F", "#000000", 2, 10, "M163.437,124.843H248 c0-33.965-13.768-64.716-36.026-86.974l-59.795,59.794C159.135,104.619,163.437,114.229,163.437,124.843z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M188.653,89.253c1.945-0.302,5.039,1.167,5.039,1.167 c-6.073,6.13-14.53,14.059-18.557,17.812c-1.409-0.141-3.309-0.82-3.358-2.119c-0.056-1.48,2.205-3.086,3.888-4.739 c3.445-3.38,5.113-5.168,8.452-8.515C185.815,91.159,187.318,89.458,188.653,89.253z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M199.762,84.364c1.537,1.424,1.94,1.931,3.423,3.345 c-6.245,6.253-18.702,18.405-20.879,20.428c-2.453,2.179-4.681,4.047-4.681,4.047l-6.313,2.901l3.385-6.281 c0,0,3.415-3.363,5.421-5.298C186.669,97.192,193.528,90.447,199.762,84.364z");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M212.824,102.18l-1.007,9.414l-21.402-0.117 c-4.201,0.109-8.396,0.829-8.046-3.098c0.181-2.039,0.69-3.121,4.314-3.321h7.009c0,0-2.244-1.6-4.778-3.176 c1.483-1.555,7.1-6.947,9.309-9.12C199.533,93.493,212.824,102.18,212.824,102.18z");
	var path5 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M219.269,72.897 c-3.805,0-7.246,0.454-9.912,1.958c-2.04,1.151-4.286,3.034-4.286,6.494c0.001,5.772,4.373,6.634,7.295,7.61 c-1.253,2.804-2.225,3.635-3.487,5.02c5.856-0.267,10-3.14,10.791-4.208c8.587-0.133,13.083-3.408,13.077-8.111 C232.741,76.221,226.722,72.897,219.269,72.897z");

	// remove content
	producer_comments.innerHTML = '';
	// append new paths
	producer_comments.appendChild(path1);
	producer_comments.appendChild(path2);
	producer_comments.appendChild(path3);
	producer_comments.appendChild(path4);
	producer_comments.appendChild(path5);
}

// *************************************   LINEAGE INFORMATION FUNCTIONS   ******************************** //
function getLineageNotAvailable(svg){
	// lineage group to append to
	var lineage = document.getElementById("lineage");

	// create paths		
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M152.178,152.021l59.795,59.794 C235.991,187.799,248,156.321,248,124.844l-84.563-0.001C163.437,134.68,159.684,144.517,152.178,152.021z");
	var path2 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 1.25, 10, "M198.977,166.95c3.001-0.276,5.433-1.629,7.384-3.96c0.974-1.57,1.49-2.521,1.815-4.25c-1.401-0.94-2.581-1.956-4.189-2.871 c-0.539-0.307-1.866-0.759-1.787-0.384c-0.142,0.803-0.347,1.723-1.121,2.895c-0.863,1.308-2.346,1.931-3.802,1.758 c-0.557-0.114-1.122-0.344-1.696-0.73c-3.696-2.486-7.398-4.966-11.098-7.448c-1.875-1.259-2.389-3.685-1.172-5.528 c0.863-1.308,2.346-1.931,3.801-1.759c0.557,0.114,1.123,0.344,1.697,0.73c2.202,1.481,4.015,2.695,6.219,4.174 c1.52-1.11,3.024-2.03,5-2.375c1.331-0.233,2.454-0.12,3.62,0.041c-0.698-0.446-3.011-2.064-4.323-2.938 c-2.435-1.753-4.902-3.548-7.528-5.071c-1.674-0.972-3.457-1.41-5.202-1.41c-0.388-0.008-0.781,0-1.182,0.037 c-3.001,0.276-5.433,1.629-7.384,3.96c-1.125,1.839-1.747,3.33-2.032,5.333c-0.1,0.702-0.115,1.416-0.169,2.124 c0.189,0.959,0.714,2.987,0.74,3.059c0.857,2.395,2.461,4.166,4.557,5.554c1.313,0.87,2.625,1.741,3.937,2.614 c2.436,1.754,4.904,3.549,7.531,5.074c1.674,0.972,3.457,1.41,5.202,1.41C198.183,166.995,198.576,166.986,198.977,166.95z");
	var path3 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 1.25, 10, "M201.202,147.875c-3.001,0.276-5.433,1.629-7.384,3.96c-0.974,1.57-1.49,2.521-1.815,4.25c1.401,0.94,2.581,1.956,4.189,2.871 c0.539,0.307,1.866,0.759,1.787,0.384c0.142-0.803,0.347-1.723,1.121-2.895c0.863-1.308,2.346-1.931,3.802-1.758 c0.557,0.114,1.122,0.344,1.696,0.73c3.696,2.486,7.398,4.966,11.098,7.448c1.875,1.259,2.389,3.685,1.172,5.528 c-0.863,1.308-2.346,1.931-3.801,1.759c-0.557-0.114-1.123-0.344-1.697-0.73c-2.202-1.481-4.015-2.695-6.219-4.174 c-1.52,1.11-3.024,2.03-5,2.375c-1.331,0.233-2.454,0.12-3.62-0.041c0.698,0.446,3.011,2.064,4.323,2.938 c2.435,1.753,4.902,3.548,7.528,5.071c1.674,0.972,3.457,1.41,5.202,1.41c0.388,0.008,0.781,0,1.182-0.037 c3.001-0.276,5.433-1.629,7.384-3.96c1.125-1.839,1.747-3.33,2.032-5.333c0.1-0.702,0.115-1.416,0.169-2.124 c-0.189-0.959-0.714-2.987-0.74-3.059c-0.857-2.395-2.461-4.166-4.557-5.554c-1.313-0.87-2.625-1.741-3.937-2.614 c-2.436-1.754-4.904-3.549-7.531-5.074c-1.674-0.972-3.457-1.41-5.202-1.41C201.996,147.829,201.603,147.838,201.202,147.875z");

	// remove content
	lineage.innerHTML = '';
	// append new paths
	lineage.appendChild(path1);
	lineage.appendChild(path2);
	lineage.appendChild(path3);
}

function getLineageHigherLevel(svg){
	// lineage group to append to
	var lineage = document.getElementById("lineage");
	var linearGradient = createLineargradient (svg, "SVGID_3_", "userSpaceOnUse", "238.9146", "156.039", "171.5801", "141.4158");
	
	linearGradient = getProducerLinearGradient(svg, linearGradient);

	// create paths		
	var path1 = createPath(svg, "url(#SVGID_3_)", "#000000", 2, 10, "M152.178,152.021l59.795,59.794 C235.991,187.799,248,156.321,248,124.844l-84.563-0.001C163.437,134.68,159.684,144.517,152.178,152.021z");
	var path2 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 1, 10, "M198.977,166.95c3.001-0.276,5.433-1.629,7.384-3.96c0.974-1.57,1.49-2.521,1.815-4.25c-1.401-0.94-2.581-1.956-4.189-2.871 c-0.539-0.307-1.866-0.759-1.787-0.384c-0.142,0.803-0.347,1.723-1.121,2.895c-0.863,1.308-2.346,1.931-3.802,1.758 c-0.557-0.114-1.122-0.344-1.696-0.73c-3.696-2.486-7.398-4.966-11.098-7.448c-1.875-1.259-2.389-3.685-1.172-5.528 c0.863-1.308,2.346-1.931,3.801-1.759c0.557,0.114,1.123,0.344,1.697,0.73c2.202,1.481,4.015,2.695,6.219,4.174 c1.52-1.11,3.024-2.03,5-2.375c1.331-0.233,2.454-0.12,3.62,0.041c-0.698-0.446-3.011-2.064-4.323-2.938 c-2.435-1.753-4.902-3.548-7.528-5.071c-1.674-0.972-3.457-1.41-5.202-1.41c-0.388-0.008-0.781,0-1.182,0.037 c-3.001,0.276-5.433,1.629-7.384,3.96c-1.125,1.839-1.747,3.33-2.032,5.333c-0.1,0.702-0.115,1.416-0.169,2.124 c0.189,0.959,0.714,2.987,0.74,3.059c0.857,2.395,2.461,4.166,4.557,5.554c1.313,0.87,2.625,1.741,3.937,2.614 c2.436,1.754,4.904,3.549,7.531,5.074c1.674,0.972,3.457,1.41,5.202,1.41C198.183,166.995,198.576,166.986,198.977,166.95z");
	var path3 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 1, 10, "M201.202,147.875c-3.001,0.276-5.433,1.629-7.384,3.96c-0.974,1.57-1.49,2.521-1.815,4.25c1.401,0.94,2.581,1.956,4.189,2.871 c0.539,0.307,1.866,0.759,1.787,0.384c0.142-0.803,0.347-1.723,1.121-2.895c0.863-1.308,2.346-1.931,3.802-1.758 c0.557,0.114,1.122,0.344,1.696,0.73c3.696,2.486,7.398,4.966,11.098,7.448c1.875,1.259,2.389,3.685,1.172,5.528 c-0.863,1.308-2.346,1.931-3.801,1.759c-0.557-0.114-1.123-0.344-1.697-0.73c-2.202-1.481-4.015-2.695-6.219-4.174 c-1.52,1.11-3.024,2.03-5,2.375c-1.331,0.233-2.454,0.12-3.62-0.041c0.698,0.446,3.011,2.064,4.323,2.938 c2.435,1.753,4.902,3.548,7.528,5.071c1.674,0.972,3.457,1.41,5.202,1.41c0.388,0.008,0.781,0,1.182-0.037 c3.001-0.276,5.433-1.629,7.384-3.96c1.125-1.839,1.747-3.33,2.032-5.333c0.1-0.702,0.115-1.416,0.169-2.124 c-0.189-0.959-0.714-2.987-0.74-3.059c-0.857-2.395-2.461-4.166-4.557-5.554c-1.313-0.87-2.625-1.741-3.937-2.614 c-2.436-1.754-4.904-3.549-7.531-5.074c-1.674-0.972-3.457-1.41-5.202-1.41C201.996,147.829,201.603,147.838,201.202,147.875z");

	// remove content
	lineage.innerHTML = '';
	// append new paths
	lineage.appendChild(linearGradient);
	lineage.appendChild(path1);
	lineage.appendChild(path2);
	lineage.appendChild(path3);
}

function getLineageAvailable(svg){
	// lineage group to append to
	var lineage = document.getElementById("lineage");

	// create paths		
	var path1 = createPath(svg, "#ED1E7F", "#000000", 2, 10, "M152.178,152.021l59.795,59.794 C235.991,187.799,248,156.321,248,124.844l-84.563-0.001C163.437,134.68,159.684,144.517,152.178,152.021z");
	var path2 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 0.5, 10, "M198.977,166.95c3.001-0.276,5.433-1.629,7.384-3.96c0.974-1.57,1.49-2.521,1.815-4.25c-1.401-0.94-2.581-1.956-4.189-2.871 c-0.539-0.307-1.866-0.759-1.787-0.384c-0.142,0.803-0.347,1.723-1.121,2.895c-0.863,1.308-2.346,1.931-3.802,1.758 c-0.557-0.114-1.122-0.344-1.696-0.73c-3.696-2.486-7.398-4.966-11.098-7.448c-1.875-1.259-2.389-3.685-1.172-5.528 c0.863-1.308,2.346-1.931,3.801-1.759c0.557,0.114,1.123,0.344,1.697,0.73c2.202,1.481,4.015,2.695,6.219,4.174 c1.52-1.11,3.024-2.03,5-2.375c1.331-0.233,2.454-0.12,3.62,0.041c-0.698-0.446-3.011-2.064-4.323-2.938 c-2.435-1.753-4.902-3.548-7.528-5.071c-1.674-0.972-3.457-1.41-5.202-1.41c-0.388-0.008-0.781,0-1.182,0.037 c-3.001,0.276-5.433,1.629-7.384,3.96c-1.125,1.839-1.747,3.33-2.032,5.333c-0.1,0.702-0.115,1.416-0.169,2.124 c0.189,0.959,0.714,2.987,0.74,3.059c0.857,2.395,2.461,4.166,4.557,5.554c1.313,0.87,2.625,1.741,3.937,2.614 c2.436,1.754,4.904,3.549,7.531,5.074c1.674,0.972,3.457,1.41,5.202,1.41C198.183,166.995,198.576,166.986,198.977,166.95z");
	var path3 = createPathWithRules(svg, "evenodd", "evenodd", "#FFFFFF", "#000000", 0.5, 10, "M201.202,147.875c-3.001,0.276-5.433,1.629-7.384,3.96c-0.974,1.57-1.49,2.521-1.815,4.25c1.401,0.94,2.581,1.956,4.189,2.871 c0.539,0.307,1.866,0.759,1.787,0.384c0.142-0.803,0.347-1.723,1.121-2.895c0.863-1.308,2.346-1.931,3.802-1.758 c0.557,0.114,1.122,0.344,1.696,0.73c3.696,2.486,7.398,4.966,11.098,7.448c1.875,1.259,2.389,3.685,1.172,5.528 c-0.863,1.308-2.346,1.931-3.801,1.759c-0.557-0.114-1.123-0.344-1.697-0.73c-2.202-1.481-4.015-2.695-6.219-4.174 c-1.52,1.11-3.024,2.03-5,2.375c-1.331,0.233-2.454,0.12-3.62-0.041c0.698,0.446,3.011,2.064,4.323,2.938 c2.435,1.753,4.902,3.548,7.528,5.071c1.674,0.972,3.457,1.41,5.202,1.41c0.388,0.008,0.781,0,1.182-0.037 c3.001-0.276,5.433-1.629,7.384-3.96c1.125-1.839,1.747-3.33,2.032-5.333c0.1-0.702,0.115-1.416,0.169-2.124 c-0.189-0.959-0.714-2.987-0.74-3.059c-0.857-2.395-2.461-4.166-4.557-5.554c-1.313-0.87-2.625-1.741-3.937-2.614 c-2.436-1.754-4.904-3.549-7.531-5.074c-1.674-0.972-3.457-1.41-5.202-1.41C201.996,147.829,201.603,147.838,201.202,147.875z");

	// remove content
	lineage.innerHTML = '';
	// append new paths
	lineage.appendChild(path1);
	lineage.appendChild(path2);
	lineage.appendChild(path3);
}

// *************************************   STANDARDS COMPLIANCE FUNCTIONS   ******************************** //
function getStandardsComplianceNotAvailable(svg){
	// standards_compliance group to append to
	var standards_compliance = document.getElementById("standards_compliance");
	// create paths
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M125,163.28v84.563 c33.965,0,64.715-13.768,86.975-36.027l-59.796-59.795C145.223,158.977,135.614,163.28,125,163.28z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M151.773,183.599c-11.046,0-20,8.954-20,20 s8.954,20,20,20s20-8.954,20-20S162.819,183.599,151.773,183.599z M151.773,219.599c-8.837,0-16-7.164-16-16s7.163-16,16-16 s16,7.164,16,16S160.61,219.599,151.773,219.599z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M151.773,191.599c-6.627,0-12,5.372-12,12 s5.373,12,12,12s12-5.372,12-12S158.4,191.599,151.773,191.599z M151.773,211.599c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8 S156.191,211.599,151.773,211.599z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 1.25, 10, "151.773", "203.599", "4");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M187.716,193.992 c-0.162-0.685-0.645-1.215-1.357-1.493c-1.251-0.488-2.524-0.186-3.466,0.825l-11.276,12.12c-3.174,3.411-6.348,6.822-9.495,10.219 c-0.342-0.174-0.686-0.342-1.022-0.506l-1.692-0.834c-1.663-0.823-3.326-1.645-4.996-2.463c-0.292-0.141-0.619-0.202-1.024-0.155 l-1.617,0.004l0.141,1.729c0.003,0.189,0.01,0.583,0.215,0.992c2.218,4.433,4.443,8.866,6.675,13.291 c0.26,0.517,0.536,1.026,0.803,1.514l0.383,0.707c0.604,1.127,1.423,1.389,1.975,1.409l0.091,0.004l0.046-0.003 c1.297-0.053,1.846-1.104,2.081-1.553c1.494-2.867,3.301-5.905,5.684-9.565c3.913-6.008,8.057-11.75,13.075-18.521 c0.917-1.238,1.842-2.471,2.768-3.701l1.521-2.026C187.702,195.357,187.873,194.648,187.716,193.992z");
	// remove content
	standards_compliance.innerHTML = '';
	// append new paths
	standards_compliance.appendChild(path1);
	standards_compliance.appendChild(path2);
	standards_compliance.appendChild(path3);
	standards_compliance.appendChild(circle1);
	standards_compliance.appendChild(path4);
}

function getStandardsComplianceHigherLevel(svg){
	var linearGradient = createLineargradient (svg, "SVGID_4_", "userSpaceOnUse", "171.7383", "141.5727", "238.7607", "155.8815");

	linearGradient = getQualityLinearGradient(svg, linearGradient);
	
	// standards_compliance group to append to
	var standards_compliance = document.getElementById("standards_compliance");
	// create paths
	var path1 = createPath(svg, "url(#SVGID_4_)", "#000000", 2, 10, "M125,163.28v84.563 c33.965,0,64.715-13.768,86.975-36.027l-59.796-59.795C145.223,158.977,135.614,163.28,125,163.28z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M151.773,183.599c-11.046,0-20,8.954-20,20 s8.954,20,20,20s20-8.954,20-20S162.819,183.599,151.773,183.599z M151.773,219.599c-8.837,0-16-7.164-16-16s7.163-16,16-16 s16,7.164,16,16S160.61,219.599,151.773,219.599z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M151.773,191.599c-6.627,0-12,5.372-12,12 s5.373,12,12,12s12-5.372,12-12S158.4,191.599,151.773,191.599z M151.773,211.599c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8 S156.191,211.599,151.773,211.599z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 1, 10, "151.773", "203.599", "4");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M187.716,193.992 c-0.162-0.685-0.645-1.215-1.357-1.493c-1.251-0.488-2.524-0.186-3.466,0.825l-11.276,12.12c-3.174,3.411-6.348,6.822-9.495,10.219 c-0.342-0.174-0.686-0.342-1.022-0.506l-1.692-0.834c-1.663-0.823-3.326-1.645-4.996-2.463c-0.292-0.141-0.619-0.202-1.024-0.155 l-1.617,0.004l0.141,1.729c0.003,0.189,0.01,0.583,0.215,0.992c2.218,4.433,4.443,8.866,6.675,13.291 c0.26,0.517,0.536,1.026,0.803,1.514l0.383,0.707c0.604,1.127,1.423,1.389,1.975,1.409l0.091,0.004l0.046-0.003 c1.297-0.053,1.846-1.104,2.081-1.553c1.494-2.867,3.301-5.905,5.684-9.565c3.913-6.008,8.057-11.75,13.075-18.521 c0.917-1.238,1.842-2.471,2.768-3.701l1.521-2.026C187.702,195.357,187.873,194.648,187.716,193.992z");
	// remove content
	standards_compliance.innerHTML = '';
	// append new paths
	standards_compliance.appendChild(linearGradient);
	standards_compliance.appendChild(path1);
	standards_compliance.appendChild(path2);
	standards_compliance.appendChild(path3);
	standards_compliance.appendChild(circle1);
	standards_compliance.appendChild(path4);
}

function getStandardsComplianceAvailable(svg){
	// standards_compliance group to append to
	var standards_compliance = document.getElementById("standards_compliance");
	// create paths
	var path1 = createPath(svg, "#0F9B49", "#000000", 2, 10, "M125,163.28v84.563 c33.965,0,64.715-13.768,86.975-36.027l-59.796-59.795C145.223,158.977,135.614,163.28,125,163.28z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M151.773,183.599c-11.046,0-20,8.954-20,20 s8.954,20,20,20s20-8.954,20-20S162.819,183.599,151.773,183.599z M151.773,219.599c-8.837,0-16-7.164-16-16s7.163-16,16-16 s16,7.164,16,16S160.61,219.599,151.773,219.599z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M151.773,191.599c-6.627,0-12,5.372-12,12 s5.373,12,12,12s12-5.372,12-12S158.4,191.599,151.773,191.599z M151.773,211.599c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8 S156.191,211.599,151.773,211.599z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 0.5, 10, "151.773", "203.599", "4");
	var path4 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M187.716,193.992 c-0.162-0.685-0.645-1.215-1.357-1.493c-1.251-0.488-2.524-0.186-3.466,0.825l-11.276,12.12c-3.174,3.411-6.348,6.822-9.495,10.219 c-0.342-0.174-0.686-0.342-1.022-0.506l-1.692-0.834c-1.663-0.823-3.326-1.645-4.996-2.463c-0.292-0.141-0.619-0.202-1.024-0.155 l-1.617,0.004l0.141,1.729c0.003,0.189,0.01,0.583,0.215,0.992c2.218,4.433,4.443,8.866,6.675,13.291 c0.26,0.517,0.536,1.026,0.803,1.514l0.383,0.707c0.604,1.127,1.423,1.389,1.975,1.409l0.091,0.004l0.046-0.003 c1.297-0.053,1.846-1.104,2.081-1.553c1.494-2.867,3.301-5.905,5.684-9.565c3.913-6.008,8.057-11.75,13.075-18.521 c0.917-1.238,1.842-2.471,2.768-3.701l1.521-2.026C187.702,195.357,187.873,194.648,187.716,193.992z");
	// remove content
	standards_compliance.innerHTML = '';
	// append new paths
	standards_compliance.appendChild(path1);
	standards_compliance.appendChild(path2);
	standards_compliance.appendChild(path3);
	standards_compliance.appendChild(circle1);
	standards_compliance.appendChild(path4);
}

// *************************************   QUALITY INFORMATION FUNCTIONS   ******************************** //
function getQualityInformationNotAvailable(svg){
	// quality_information group to append to
	var quality_information = document.getElementById("quality_information");
	// create paths
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M98.128,152.021l-59.795,59.794 c24.018,24.019,55.496,36.027,86.974,36.027V163.28C115.47,163.28,105.633,159.527,98.128,152.021z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M107.311,209.518l-0.383,0.868 c-0.381,0.875-1.188,2.7-1.373,3.071c-0.662,1.331-1.5,2.022-2.719,2.241c-0.543,0.097-7.227,0.199-12.391,0.244l10.899-13.165 l-9.778-12.225l0.901-0.001c7.696,0,8.609,0.145,8.687,0.161c1.101,0.234,1.863,0.617,2.39,1.191 c0.212,0.275,0.869,2.236,1.431,4.447l0.212,0.844h4.382l-1.021-12.311H79.251l0.076,1.189c0.074,1.107,0.272,2.563,0.797,3.214 c2.51,3.103,10.165,12.648,12.326,15.344l-0.264,0.314c-2.605,3.1-9.064,10.784-11.98,14.224c-0.729,0.863-0.795,2.753-0.79,3.526 l0.007,1.115l29.674-0.162l2.155-13.123L107.311,209.518z");

	// remove content
	quality_information.innerHTML = '';
	// append new paths
	quality_information.appendChild(path1);
	quality_information.appendChild(path2);
}

function getQualityInformationHigherLevel(svg){
	var linearGradient = createLineargradient (svg, "SVGID_5_", "userSpaceOnUse", "77.8032", "115.0769", "238.4434", "158.5097");

	linearGradient = getQualityLinearGradient(svg, linearGradient);
	
	// create paths
	var path1 = createPath(svg, "url(#SVGID_5_)", "#000000", 2, 10, "M98.128,152.021l-59.795,59.794 c24.018,24.019,55.496,36.027,86.974,36.027V163.28C115.47,163.28,105.633,159.527,98.128,152.021z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M107.311,209.518l-0.383,0.868 c-0.381,0.875-1.188,2.7-1.373,3.071c-0.662,1.331-1.5,2.022-2.719,2.241c-0.543,0.097-7.227,0.199-12.391,0.244l10.899-13.165 l-9.778-12.225l0.901-0.001c7.696,0,8.609,0.145,8.687,0.161c1.101,0.234,1.863,0.617,2.39,1.191 c0.212,0.275,0.869,2.236,1.431,4.447l0.212,0.844h4.382l-1.021-12.311H79.251l0.076,1.189c0.074,1.107,0.272,2.563,0.797,3.214 c2.51,3.103,10.165,12.648,12.326,15.344l-0.264,0.314c-2.605,3.1-9.064,10.784-11.98,14.224c-0.729,0.863-0.795,2.753-0.79,3.526 l0.007,1.115l29.674-0.162l2.155-13.123L107.311,209.518z");

	// remove content
	quality_information.innerHTML = '';
	// append new paths
	quality_information.appendChild(linearGradient);
	quality_information.appendChild(path1);
	quality_information.appendChild(path2);
}
function getQualityInformationAvailable(svg){
	// quality_information group to append to
	var quality_information = document.getElementById("quality_information");
	// create paths
	var path1 = createPath(svg, "#0F9B49", "#000000", 2, 10, "M98.128,152.021l-59.795,59.794 c24.018,24.019,55.496,36.027,86.974,36.027V163.28C115.47,163.28,105.633,159.527,98.128,152.021z");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M107.311,209.518l-0.383,0.868 c-0.381,0.875-1.188,2.7-1.373,3.071c-0.662,1.331-1.5,2.022-2.719,2.241c-0.543,0.097-7.227,0.199-12.391,0.244l10.899-13.165 l-9.778-12.225l0.901-0.001c7.696,0,8.609,0.145,8.687,0.161c1.101,0.234,1.863,0.617,2.39,1.191 c0.212,0.275,0.869,2.236,1.431,4.447l0.212,0.844h4.382l-1.021-12.311H79.251l0.076,1.189c0.074,1.107,0.272,2.563,0.797,3.214 c2.51,3.103,10.165,12.648,12.326,15.344l-0.264,0.314c-2.605,3.1-9.064,10.784-11.98,14.224c-0.729,0.863-0.795,2.753-0.79,3.526 l0.007,1.115l29.674-0.162l2.155-13.123L107.311,209.518z");

	// remove content
	quality_information.innerHTML = '';
	// append new paths
	quality_information.appendChild(path1);
	quality_information.appendChild(path2);
}
// *************************************   USER FEEDBACK FUNCTIONS   ******************************** //
function getUserFeedbackNotAvailable(svg){
	// user_feedback group to append to
	var user_feedback = document.getElementById("user_feedback");
	// create paths			
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M86.563,124.844H2 c0,33.964,13.767,64.714,36.025,86.972l59.796-59.794C90.864,145.066,86.563,135.457,86.563,124.844z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 1.25, 10, "39.282", "153.606", "8.613");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M26.364,185.04c0,0,0.802-6.583,1.265-8.721 c0.417-1.933,0.466-4.443,1.951-7.488c1.427-2.923,3.765-5.322,3.765-5.322c1.961,1.415,9.282,1.596,11.875,0 c0,0,2.357,2.567,3.738,5.254c1.46,2.842,1.559,5.622,1.978,7.555c0.463,2.138,1.265,8.721,1.265,8.721H26.364z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1.25, 10, "M63.206,134.761 c-3.804,0-7.245,0.455-9.911,1.959c-2.04,1.152-4.286,3.034-4.286,6.494c0,5.772,4.372,6.633,7.295,7.609 c-1.254,2.804-2.225,3.636-3.488,5.021c5.856-0.267,10-3.14,10.792-4.208c8.587-0.132,13.082-3.409,13.076-8.111 C76.678,138.085,70.659,134.761,63.206,134.761z");

	// remove content
	user_feedback.innerHTML = '';
	// append new paths
	user_feedback.appendChild(path1);
	user_feedback.appendChild(circle1);
	user_feedback.appendChild(path2);
	user_feedback.appendChild(path3);
}

function getUserFeedbackHigherLevel(svg){
	var linearGradient = createLineargradient(svg, "SVGID_6_", "userSpaceOnUse", "11.4023", "91.332", "172.3452", "135.0734");

	linearGradient = getFeedbackLinearGradient(svg, linearGradient);

	// user_feedback group to append to
	var user_feedback = document.getElementById("user_feedback");
	// create paths			
	var path1 = createPath(svg, "URL(#SVGID_6_)", "#000000", 2, 10, "M86.563,124.844H2 c0,33.964,13.767,64.714,36.025,86.972l59.796-59.794C90.864,145.066,86.563,135.457,86.563,124.844z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 1, 10, "39.282", "153.606", "8.613");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M26.364,185.04c0,0,0.802-6.583,1.265-8.721 c0.417-1.933,0.466-4.443,1.951-7.488c1.427-2.923,3.765-5.322,3.765-5.322c1.961,1.415,9.282,1.596,11.875,0 c0,0,2.357,2.567,3.738,5.254c1.46,2.842,1.559,5.622,1.978,7.555c0.463,2.138,1.265,8.721,1.265,8.721H26.364z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 1, 10, "M63.206,134.761 c-3.804,0-7.245,0.455-9.911,1.959c-2.04,1.152-4.286,3.034-4.286,6.494c0,5.772,4.372,6.633,7.295,7.609 c-1.254,2.804-2.225,3.636-3.488,5.021c5.856-0.267,10-3.14,10.792-4.208c8.587-0.132,13.082-3.409,13.076-8.111 C76.678,138.085,70.659,134.761,63.206,134.761z");

	// remove content
	user_feedback.innerHTML = '';
	// append new paths
	user_feedback.appendChild(linearGradient);
	user_feedback.appendChild(path1);
	user_feedback.appendChild(circle1);
	user_feedback.appendChild(path2);
	user_feedback.appendChild(path3);
}
function getUserFeedbackAvailable(svg){
	// user_feedback group to append to
	var user_feedback = document.getElementById("user_feedback");
	// create paths			
	var path1 = createPath(svg, "#F58220", "#000000", 2, 10, "M86.563,124.844H2 c0,33.964,13.767,64.714,36.025,86.972l59.796-59.794C90.864,145.066,86.563,135.457,86.563,124.844z");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 0.5, 10, "39.282", "153.606", "8.613");
	var path2 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M26.364,185.04c0,0,0.802-6.583,1.265-8.721 c0.417-1.933,0.466-4.443,1.951-7.488c1.427-2.923,3.765-5.322,3.765-5.322c1.961,1.415,9.282,1.596,11.875,0 c0,0,2.357,2.567,3.738,5.254c1.46,2.842,1.559,5.622,1.978,7.555c0.463,2.138,1.265,8.721,1.265,8.721H26.364z");
	var path3 = createPath(svg, "#FFFFFF", "#000000", 0.5, 10, "M63.206,134.761 c-3.804,0-7.245,0.455-9.911,1.959c-2.04,1.152-4.286,3.034-4.286,6.494c0,5.772,4.372,6.633,7.295,7.609 c-1.254,2.804-2.225,3.636-3.488,5.021c5.856-0.267,10-3.14,10.792-4.208c8.587-0.132,13.082-3.409,13.076-8.111 C76.678,138.085,70.659,134.761,63.206,134.761z");

	// remove content
	user_feedback.innerHTML = '';
	// append new paths
	user_feedback.appendChild(path1);
	user_feedback.appendChild(circle1);
	user_feedback.appendChild(path2);
	user_feedback.appendChild(path3);
}
// *************************************   EXPERT REVIEW FUNCTIONS   ******************************** //
function getExpertReviewNotAvailable(svg){
	// expert_review group to append to
	var expert_review = document.getElementById("expert_review");
	// create paths
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M97.822,97.664L38.025,37.869 C14.008,61.886,2,93.365,2,124.843h84.563C86.563,115.005,90.316,105.169,97.822,97.664z");
	var rect1 = createRectangle(svg, "#FFFFFF", "#000000", 1.25, 10, "35.208", "42.866", "23.24", "72.558", "");
	var line1 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "82.002", "82.002");
	var line2 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "89.924", "89.924");
	var line3 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.881", "53.141", "97.53", "97.53");
	var line4 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "105.914", "105.914");
	var rect2 = createRectangle(svg, "#FFFFFF", "#000000", 1.25, 10, "23.373", "6.867", "49.176", "102.612", "matrix(0.8492 0.5281 -0.5281 0.8492 65.179 -16.148)");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.266", "11.393");
	var circle2 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.265", "8.584");

	// remove content
	expert_review.innerHTML = '';
	// append new paths
	expert_review.appendChild(path1);
	expert_review.appendChild(rect1);
	expert_review.appendChild(line1);
	expert_review.appendChild(line2);
	expert_review.appendChild(line3);
	expert_review.appendChild(line4);
	expert_review.appendChild(rect2);
	expert_review.appendChild(circle1);
	expert_review.appendChild(circle2);
}

function getExpertReviewHigherLevel(svg){
	var linearGradient = createLineargradient (svg, "SVGID_7_", "userSpaceOnUse", "11.3984", "91.3332", "77.3389", "114.6131");

	linearGradient = getExpertLinearGradient(svg, linearGradient);
	
	// expert_review group to append to
	var expert_review = document.getElementById("expert_review");
	// create paths
	var path1 = createPath(svg, "url(#SVGID_7_)", "#000000", 2, 10, "M97.822,97.664L38.025,37.869 C14.008,61.886,2,93.365,2,124.843h84.563C86.563,115.005,90.316,105.169,97.822,97.664z");
	var rect1 = createRectangle(svg, "#FFFFFF", "#000000", 1, 10, "35.208", "42.866", "23.24", "72.558", "");
	var line1 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "82.002", "82.002");
	var line2 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "89.924", "89.924");
	var line3 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.881", "53.141", "97.53", "97.53");
	var line4 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "105.914", "105.914");
	var rect2 = createRectangle(svg, "#FFFFFF", "#000000", 1, 10, "23.373", "6.867", "49.176", "102.612", "matrix(0.8492 0.5281 -0.5281 0.8492 65.179 -16.148)");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.266", "11.393");
	var circle2 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.265", "8.584");

	// remove content
	expert_review.innerHTML = '';
	// append new paths
	expert_review.appendChild(linearGradient);
	expert_review.appendChild(path1);
	expert_review.appendChild(rect1);
	expert_review.appendChild(line1);
	expert_review.appendChild(line2);
	expert_review.appendChild(line3);
	expert_review.appendChild(line4);
	expert_review.appendChild(rect2);
	expert_review.appendChild(circle1);
	expert_review.appendChild(circle2);
}
function getExpertReviewAvailable(svg){
	// expert_review group to append to
	var expert_review = document.getElementById("expert_review");
	// create paths
	var path1 = createPath(svg, "#4374B9", "#000000", 2, 10, "M97.822,97.664L38.025,37.869 C14.008,61.886,2,93.365,2,124.843h84.563C86.563,115.005,90.316,105.169,97.822,97.664z");
	var rect1 = createRectangle(svg, "#FFFFFF", "#000000", 0.5, 10, "35.208", "42.866", "23.24", "72.558", "");
	var line1 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "82.002", "82.002");
	var line2 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "89.924", "89.924");
	var line3 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.881", "53.141", "97.53", "97.53");
	var line4 = createLine(svg, "#FFFFFF", "#000000", 0.75, 10, "27.649", "52.908", "105.914", "105.914");
	var rect2 = createRectangle(svg, "#FFFFFF", "#000000", 0.5, 10, "23.373", "6.867", "49.176", "102.612", "matrix(0.8492 0.5281 -0.5281 0.8492 65.179 -16.148)");
	var circle1 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.266", "11.393");
	var circle2 = createCircle(svg, "#FFFFFF", "#000000", 0.75, 10, "42.84", "94.265", "8.584");

	// remove content
	expert_review.innerHTML = '';
	// append new paths
	expert_review.appendChild(path1);
	expert_review.appendChild(rect1);
	expert_review.appendChild(line1);
	expert_review.appendChild(line2);
	expert_review.appendChild(line3);
	expert_review.appendChild(line4);
	expert_review.appendChild(rect2);
	expert_review.appendChild(circle1);
	expert_review.appendChild(circle2);
}
// *************************************  CITATIONS INFORMATION FUNCTIONS   ******************************** //
function getCitationsInformationNotAvailable(svg){
	// citations_information group to append to
	var citations_information = document.getElementById("citations_information");
	// create paths
	var path1 = createPath(svg, "#FFFFFF", "#000000", 2, 10, "M125,86.563V2 C91.035,2,60.285,15.768,38.025,38.026l59.796,59.795C104.777,90.865,114.386,86.563,125,86.563z");
	
	var path2 = createSimplePath(svg, "#FFFFFF", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path3 = createSimplePath(svg, "#FFFFFF", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path4 = createSimplePath(svg, "#FFFFFF", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433 C81.372,62.314,79.401,60.566,74.645,57.775z");
	
	var polygon1 = createPolygon(svg, "#FFFFFF", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");	
	var path5 = createSimplePath(svg, "#FFFFFF", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon2 = createPolygon(svg, "#FFFFFF", "104.827,69.282 116.6,37.59 113.182,34.797 101.527,66.394");
	
	var path6 = createSimplePath(svg, "none", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path7 = createSimplePath(svg, "none", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path8 = createSimplePath(svg, "none", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433C81.372,62.314,79.401,60.566,74.645,57.775z");
	var polygon3 = createPolygon(svg, "none", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");
	
	var path9 = createSimplePath(svg, "none", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon4 = createPolygon(svg, "none", "113.182,34.797 101.527,66.394 104.827,69.282 116.6,37.59");
	var path10 = createSimplePath(svg, "#000000", "M112.726,33.128c0,0-5-1.833-7.611-1.833c-3.021,0-5.705,0.914-7.634,2.583c-1.777-5.302-6.495-8.89-10.589-10.186 l-6.682,0.144L68.591,56.918l15.98,10.552l1.032,0.307l19.882,2.925l12.306-33.434L112.726,33.128z M80.932,24.809l4.58-0.207 L74.4,56.506l-4.493-0.309L80.932,24.809z M82.66,64.791l-11.189-7.21l-0.044-0.03l3.218,0.224 c4.757,2.791,6.728,4.54,8.687,7.449L82.66,64.791z M85.188,65.813c-0.079-0.128-4.439-5.873-9.596-8.926L86.79,24.714 c3.887,1.298,8.307,4.761,9.849,9.829L85.188,65.813z M86.34,66.293l11.493-31.381c1.685-1.615,4.123-2.533,6.909-2.608 c0.036-0.002,5.319,0.627,7.388,1.738l-11.737,31.821c-0.106-0.021-3.352-0.466-5.662-0.466c-0.038,0-0.077,0.001-0.114,0.001 c-2.884,0.008-5.676,0.34-8.311,0.987L86.34,66.293z M88.715,67.15c1.901-0.334,3.858-0.505,5.847-0.51 c0.033,0,0.067-0.003,0.101-0.003c3.005,0,5.197,0.389,5.845,0.52l2.557,2.239L88.715,67.15z M104.827,69.282l-3.3-2.888 l11.655-31.597l3.418,2.793L104.827,69.282z");		
	var path11 = createPath(svg, "#000000", "2", "10", "", "M53.752,61.481");					
	
	// remove content
	citations_information.innerHTML = '';
	// append new paths
	citations_information.appendChild(path1);
	citations_information.appendChild(path2);
	citations_information.appendChild(path3);
	citations_information.appendChild(path4);	
	citations_information.appendChild(polygon1);	
	citations_information.appendChild(path5);	
	citations_information.appendChild(polygon2);
	citations_information.appendChild(path6);
	citations_information.appendChild(path7);
	citations_information.appendChild(path8);
	citations_information.appendChild(polygon3);
	citations_information.appendChild(path9);
	citations_information.appendChild(polygon4);
	citations_information.appendChild(path10);
	citations_information.appendChild(path11);
}

function getCitationsInformationHigherLevel(svg){
	var linearGradient = createLineargradient (svg, "SVGID_8_", "userSpaceOnUse", "77.498", "114.7702", "11.4033", "91.3336");

	linearGradient = getExpertLinearGradient(svg, linearGradient);

		// citations_information group to append to
	var citations_information = document.getElementById("citations_information");
	// create paths
	var path1 = createPath(svg, "url(#SVGID_8_)", "#000000", 2, 10, "M125,86.563V2 C91.035,2,60.285,15.768,38.025,38.026l59.796,59.795C104.777,90.865,114.386,86.563,125,86.563z");
	
	var path2 = createSimplePath(svg, "#FFFFFF", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path3 = createSimplePath(svg, "#FFFFFF", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path4 = createSimplePath(svg, "#FFFFFF", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433 C81.372,62.314,79.401,60.566,74.645,57.775z");
	
	var polygon1 = createPolygon(svg, "#FFFFFF", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");	
	var path5 = createSimplePath(svg, "#FFFFFF", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon2 = createPolygon(svg, "#FFFFFF", "104.827,69.282 116.6,37.59 113.182,34.797 101.527,66.394");
	
	var path6 = createSimplePath(svg, "none", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path7 = createSimplePath(svg, "none", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path8 = createSimplePath(svg, "none", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433C81.372,62.314,79.401,60.566,74.645,57.775z");
	var polygon3 = createPolygon(svg, "none", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");
	
	var path9 = createSimplePath(svg, "none", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon4 = createPolygon(svg, "none", "113.182,34.797 101.527,66.394 104.827,69.282 116.6,37.59");
	var path10 = createSimplePath(svg, "#000000", "M112.726,33.128c0,0-5-1.833-7.611-1.833c-3.021,0-5.705,0.914-7.634,2.583c-1.777-5.302-6.495-8.89-10.589-10.186 l-6.682,0.144L68.591,56.918l15.98,10.552l1.032,0.307l19.882,2.925l12.306-33.434L112.726,33.128z M80.932,24.809l4.58-0.207 L74.4,56.506l-4.493-0.309L80.932,24.809z M82.66,64.791l-11.189-7.21l-0.044-0.03l3.218,0.224 c4.757,2.791,6.728,4.54,8.687,7.449L82.66,64.791z M85.188,65.813c-0.079-0.128-4.439-5.873-9.596-8.926L86.79,24.714 c3.887,1.298,8.307,4.761,9.849,9.829L85.188,65.813z M86.34,66.293l11.493-31.381c1.685-1.615,4.123-2.533,6.909-2.608 c0.036-0.002,5.319,0.627,7.388,1.738l-11.737,31.821c-0.106-0.021-3.352-0.466-5.662-0.466c-0.038,0-0.077,0.001-0.114,0.001 c-2.884,0.008-5.676,0.34-8.311,0.987L86.34,66.293z M88.715,67.15c1.901-0.334,3.858-0.505,5.847-0.51 c0.033,0,0.067-0.003,0.101-0.003c3.005,0,5.197,0.389,5.845,0.52l2.557,2.239L88.715,67.15z M104.827,69.282l-3.3-2.888 l11.655-31.597l3.418,2.793L104.827,69.282z");		
	var path11 = createPath(svg, "#000000", "2", "10", "", "M53.752,61.481");					
	
	// remove content
	citations_information.innerHTML = '';
	// append new paths
	citations_information.appendChild(linearGradient);
	citations_information.appendChild(path1);
	citations_information.appendChild(path2);
	citations_information.appendChild(path3);
	citations_information.appendChild(path4);	
	citations_information.appendChild(polygon1);	
	citations_information.appendChild(path5);	
	citations_information.appendChild(polygon2);
	citations_information.appendChild(path6);
	citations_information.appendChild(path7);
	citations_information.appendChild(path8);
	citations_information.appendChild(polygon3);
	citations_information.appendChild(path9);
	citations_information.appendChild(polygon4);
	citations_information.appendChild(path10);
	citations_information.appendChild(path11);
}
function getCitationsInformationAvailable(svg){
	// citations_information group to append to
	var citations_information = document.getElementById("citations_information");
	// create paths
	var path1 = createPath(svg, "#4374B9", "#000000", 2, 10, "M125,86.563V2 C91.035,2,60.285,15.768,38.025,38.026l59.796,59.795C104.777,90.865,114.386,86.563,125,86.563z");
	
	var path2 = createSimplePath(svg, "#FFFFFF", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path3 = createSimplePath(svg, "#FFFFFF", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path4 = createSimplePath(svg, "#FFFFFF", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433 C81.372,62.314,79.401,60.566,74.645,57.775z");
	
	var polygon1 = createPolygon(svg, "#FFFFFF", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");	
	var path5 = createSimplePath(svg, "#FFFFFF", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon2 = createPolygon(svg, "#FFFFFF", "104.827,69.282 116.6,37.59 113.182,34.797 101.527,66.394");
	
	var path6 = createSimplePath(svg, "none", "M86.79,24.714L75.591,56.886c5.157,3.054,9.518,8.798,9.596,8.926l11.452-31.27 C95.097,29.475,90.677,26.012,86.79,24.714z");
	var path7 = createSimplePath(svg, "none", "M94.73,65.396c2.31,0,5.556,0.446,5.662,0.466l11.737-31.821c-2.068-1.111-7.352-1.74-7.388-1.738 c-2.786,0.075-5.224,0.994-6.909,2.608L86.34,66.293l-0.035,0.092c2.635-0.647,5.427-0.979,8.311-0.987 C94.654,65.398,94.692,65.396,94.73,65.396z");
	var path8 = createSimplePath(svg, "none", "M74.645,57.775l-3.218-0.224l0.044,0.03l11.189,7.21l0.671,0.433C81.372,62.314,79.401,60.566,74.645,57.775z");
	var polygon3 = createPolygon(svg, "none", "85.511,24.602 80.932,24.809 69.908,56.197 74.4,56.506");
	
	var path9 = createSimplePath(svg, "none", "M94.663,66.638c-0.034,0-0.068,0.002-0.101,0.003c-1.989,0.005-3.946,0.175-5.847,0.51l14.35,2.246 l-2.557-2.239C99.859,67.026,97.667,66.638,94.663,66.638z");
	var polygon4 = createPolygon(svg, "none", "113.182,34.797 101.527,66.394 104.827,69.282 116.6,37.59");
	var path10 = createSimplePath(svg, "#000000", "M112.726,33.128c0,0-5-1.833-7.611-1.833c-3.021,0-5.705,0.914-7.634,2.583c-1.777-5.302-6.495-8.89-10.589-10.186 l-6.682,0.144L68.591,56.918l15.98,10.552l1.032,0.307l19.882,2.925l12.306-33.434L112.726,33.128z M80.932,24.809l4.58-0.207 L74.4,56.506l-4.493-0.309L80.932,24.809z M82.66,64.791l-11.189-7.21l-0.044-0.03l3.218,0.224 c4.757,2.791,6.728,4.54,8.687,7.449L82.66,64.791z M85.188,65.813c-0.079-0.128-4.439-5.873-9.596-8.926L86.79,24.714 c3.887,1.298,8.307,4.761,9.849,9.829L85.188,65.813z M86.34,66.293l11.493-31.381c1.685-1.615,4.123-2.533,6.909-2.608 c0.036-0.002,5.319,0.627,7.388,1.738l-11.737,31.821c-0.106-0.021-3.352-0.466-5.662-0.466c-0.038,0-0.077,0.001-0.114,0.001 c-2.884,0.008-5.676,0.34-8.311,0.987L86.34,66.293z M88.715,67.15c1.901-0.334,3.858-0.505,5.847-0.51 c0.033,0,0.067-0.003,0.101-0.003c3.005,0,5.197,0.389,5.845,0.52l2.557,2.239L88.715,67.15z M104.827,69.282l-3.3-2.888 l11.655-31.597l3.418,2.793L104.827,69.282z");		
	var path11 = createPath(svg, "#000000", "2", "10", "", "M53.752,61.481");					
	
	// remove content
	citations_information.innerHTML = '';
	// append new paths
	citations_information.appendChild(path1);
	citations_information.appendChild(path2);
	citations_information.appendChild(path3);
	citations_information.appendChild(path4);	
	citations_information.appendChild(polygon1);	
	citations_information.appendChild(path5);	
	citations_information.appendChild(polygon2);
	citations_information.appendChild(path6);
	citations_information.appendChild(path7);
	citations_information.appendChild(path8);
	citations_information.appendChild(polygon3);
	citations_information.appendChild(path9);
	citations_information.appendChild(polygon4);
	citations_information.appendChild(path10);
	citations_information.appendChild(path11);
}
// **************************************   LINEAR GRADIENT HELPER FUNCTIONS ********************************** //

function getProducerLinearGradient(svg, linearGradient){
	var stop1 = createStop (svg, 0.3, "stop-color:#FFFFFF");
	var stop2 = createStop (svg, 0.3417, "stop-color:#FCD8E9");
	var stop3 = createStop (svg, 0.3956, "stop-color:#F8ADD0");
	var stop4 = createStop (svg, 0.4537, "stop-color:#F586BA");
	var stop5 = createStop (svg, 0.5153, "stop-color:#F366A8");
	var stop6 = createStop (svg, 0.5815, "stop-color:#F14C99");
	var stop7 = createStop (svg, 0.6539, "stop-color:#EF378D");
	var stop8 = createStop (svg, 0.7357, "stop-color:#EE2985");
	var stop9 = createStop (svg, 0.835, "stop-color:#ED2180");
	var stop10 = createStop (svg, 1, "stop-color:#ED1E7F");
	
	linearGradient.appendChild(stop1);
	linearGradient.appendChild(stop2);
	linearGradient.appendChild(stop3);
	linearGradient.appendChild(stop4);
	linearGradient.appendChild(stop5);
	linearGradient.appendChild(stop6);
	linearGradient.appendChild(stop7);
	linearGradient.appendChild(stop8);
	linearGradient.appendChild(stop9);
	linearGradient.appendChild(stop10);
	
	return linearGradient;
}	
function getQualityLinearGradient(svg, linearGradient){
	var stop1 = createStop (svg, 0.3, "stop-color:#FFFFFF");
	var stop2 = createStop (svg, 0.3037, "stop-color:#FBFDFC");
	var stop3 = createStop (svg, 0.354, "stop-color:#CAE9D7");
	var stop4 = createStop (svg, 0.4079, "stop-color:#9ED6B5");
	var stop5 = createStop (svg, 0.4649, "stop-color:#77C698");
	var stop6 = createStop (svg, 0.5252, "stop-color:#57B97F");
	var stop7 = createStop (svg, 0.5901, "stop-color:#3DAE6C");
	var stop8 = createStop (svg, 0.661, "stop-color:#28A65C");
	var stop9 = createStop (svg, 0.7412, "stop-color:#1AA051");
	var stop10 = createStop (svg, 0.8384, "stop-color:#129C4B");
	var stop11 = createStop (svg, 1, "stop-color:#0F9B49");
	
	linearGradient.appendChild(stop1);
	linearGradient.appendChild(stop2);
	linearGradient.appendChild(stop3);
	linearGradient.appendChild(stop4);
	linearGradient.appendChild(stop5);
	linearGradient.appendChild(stop6);
	linearGradient.appendChild(stop7);
	linearGradient.appendChild(stop8);
	linearGradient.appendChild(stop9);
	linearGradient.appendChild(stop10);
	linearGradient.appendChild(stop11);
	
	return linearGradient;
}

function getFeedbackLinearGradient(svg, linearGradient){
	var stop1 = createStop (svg, 0.3, "stop-color:#FFFFFF");
	var stop2 = createStop (svg, 0.3397, "stop-color:#FDEADA");
	var stop3 = createStop (svg, 0.3938, "stop-color:#FBD2AF");
	var stop4 = createStop (svg, 0.4521, "stop-color:#FABC88");
	var stop5 = createStop (svg, 0.5139, "stop-color:#F8AA68");
	var stop6 = createStop (svg, 0.5803, "stop-color:#F79C4E");
	var stop7 = createStop (svg, 0.6529, "stop-color:#F69039");
	var stop8 = createStop (svg, 0.735, "stop-color:#F5882B");
	var stop9 = createStop (svg, 0.8345, "stop-color:#F58323");
	var stop10 = createStop (svg, 1, "stop-color:#F58220");
	
	linearGradient.appendChild(stop1);
	linearGradient.appendChild(stop2);
	linearGradient.appendChild(stop3);
	linearGradient.appendChild(stop4);
	linearGradient.appendChild(stop5);
	linearGradient.appendChild(stop6);
	linearGradient.appendChild(stop7);
	linearGradient.appendChild(stop8);
	linearGradient.appendChild(stop9);
	linearGradient.appendChild(stop10);
	
	return linearGradient;
}

function getExpertLinearGradient(svg, linearGradient){
	var stop1 = createStop (svg, 0.3, "stop-color:#FFFFFF");
	var stop2 = createStop (svg, 0.3034, "stop-color:#FCFDFE");
	var stop3 = createStop (svg, 0.3606, "stop-color:#D1DDEE");
	var stop4 = createStop (svg, 0.4212, "stop-color:#ABC1E0");
	var stop5 = createStop (svg, 0.4865, "stop-color:#8BA9D4");
	var stop6 = createStop (svg, 0.5566, "stop-color:#7196CA");
	var stop7 = createStop (svg, 0.6333, "stop-color:#5C87C2");
	var stop8 = createStop (svg, 0.72, "stop-color:#4E7CBD");
	var stop9 = createStop (svg, 0.8252, "stop-color:#4676BA");
	var stop10 = createStop (svg, 1, "stop-color:#4374B9");
	
	linearGradient.appendChild(stop1);
	linearGradient.appendChild(stop2);
	linearGradient.appendChild(stop3);
	linearGradient.appendChild(stop4);
	linearGradient.appendChild(stop5);
	linearGradient.appendChild(stop6);
	linearGradient.appendChild(stop7);
	linearGradient.appendChild(stop8);
	linearGradient.appendChild(stop9);
	linearGradient.appendChild(stop10);
	
	return linearGradient;
}
// **************************************   HELPER FUNCTIONS   ***************************************** //

function createTitle(titleText) {
	var title = document.createElement("title");
	var text = document.createTextNode(titleText);
	title.appendChild(text);
	return title;
};

// helper function to create a path
function createPath(svg, fill, stroke, stroke_width, stroke_miterlimit, d) {
    var path = document.createElementNS(svg.namespaceURI, "path");
    path.setAttributeNS(null, "fill", fill);
    path.setAttributeNS(null, "stroke", stroke);
    path.setAttributeNS(null, "stroke-width", stroke_width);
    path.setAttributeNS(null, "stroke-miterlimit", stroke_miterlimit);
    path.setAttributeNS(null, "d", d);
    return path;
}
// helper function to create a path
function createSimplePath(svg, fill, d) {
    var path = document.createElementNS(svg.namespaceURI, "path");
    path.setAttributeNS(null, "fill", fill);
    path.setAttributeNS(null, "d", d);
    return path;
}
// helper function to create a path with additional rules
function createPathWithRules(svg, fillRule, clipRule, fill, stroke, stroke_width, stroke_miterlimit, d) {
    var path = document.createElementNS(svg.namespaceURI, "path");
    path.setAttributeNS(null, "fill-rule", fillRule);
    path.setAttributeNS(null, "clip-rule", clipRule);
    path.setAttributeNS(null, "fill", fill);
    path.setAttributeNS(null, "stroke", stroke);
    path.setAttributeNS(null, "stroke-width", stroke_width);
    path.setAttributeNS(null, "stroke-miterlimit", stroke_miterlimit);
    path.setAttributeNS(null, "d", d);
    return path;
}
// helper function to create a linearGradient 
function createLineargradient(svg, id, gradientUnits, x1, x2, y1, y2) {
    var linearGradient = document.createElementNS(svg.namespaceURI, "linearGradient");
	
    linearGradient.setAttributeNS(null, "id", id);
    linearGradient.setAttributeNS(null, "gradientUnits", gradientUnits);
    linearGradient.setAttributeNS(null, "x1", x1);
    linearGradient.setAttributeNS(null, "x2", x2);
    linearGradient.setAttributeNS(null, "y1", y1);
    linearGradient.setAttributeNS(null, "y2", y2);
    return linearGradient;
}
// helper function to create a stop 
function createStop (svg, offset, style) {
    var stop = document.createElementNS(svg.namespaceURI, "stop");
	
    stop.setAttributeNS(null, "offset", offset);
    stop.setAttributeNS(null, "style", style);
    return stop;
}
// helper function to create a circle
function createCircle(svg, fill, stroke, stroke_width, stroke_miterlimit, cx, cy, r) {
    var circle = document.createElementNS(svg.namespaceURI, "circle");
    circle.setAttributeNS(null, "fill", fill);
    circle.setAttributeNS(null, "stroke", stroke);
    circle.setAttributeNS(null, "stroke-width", stroke_width);
    circle.setAttributeNS(null, "stroke-miterlimit", stroke_miterlimit);
    circle.setAttributeNS(null, "cx", cx);
    circle.setAttributeNS(null, "cy", cy);
    circle.setAttributeNS(null, "r", r);
    return circle;
}
// helper function to create a rectangle
function createRectangle(svg, fill, stroke, stroke_width, stroke_miterlimit, width, height, x, y, transform){
    var rect = document.createElementNS(svg.namespaceURI, "rect");
    rect.setAttributeNS(null, "fill", fill);
    rect.setAttributeNS(null, "stroke", stroke);
    rect.setAttributeNS(null, "stroke-width", stroke_width);
    rect.setAttributeNS(null, "stroke-miterlimit", stroke_miterlimit);
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "x", x);
    rect.setAttributeNS(null, "y", y);
    rect.setAttributeNS(null, "transform", transform);
    return rect;
}
// helper function to create a line
function createLine(svg, fill, stroke, stroke_width, stroke_miterlimit, x1, x2, y1, y2){
    var line = document.createElementNS(svg.namespaceURI, "line");
    line.setAttributeNS(null, "fill", fill);
    line.setAttributeNS(null, "stroke", stroke);
    line.setAttributeNS(null, "stroke-width", stroke_width);
    line.setAttributeNS(null, "stroke-miterlimit", stroke_miterlimit);
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "y2", y2);
    return line;
}
// helper function to create a line
function createPolygon(svg, fill, points){
    var polygon = document.createElementNS(svg.namespaceURI, "polygon");
    polygon.setAttributeNS(null, "fill", fill);
    polygon.setAttributeNS(null, "points", points);
    return polygon;
}