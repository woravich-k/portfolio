var works = [{pic: "images/customisable_dashboard.jpg", title: "Configurable Dashboard System", short_txt: "A configurable GIS dashboard analysis system allows multiple bespoke dashboards to be created on demand without requiring additional programming. The system consists of two web applications. One is to set configurations creating multiple dashboards. Another is to allow user to select one of those configurations and serve mapping dashboard accordingly. These numerous dashboards would be designed directly related to the user needs, in terms of contents (layers) and functionality (spatial analysis). This software was proposed by my dissertation project, which aims to overcome the complexity of GIS by the User-Centred Design (UCD) approach.",key: "JavaScript, Openlayers.js, DC.js, D3.js, SQL, PostGIS",long_txt:"url"},
{pic: "images/quiz.jpg", title: "Location-based Quiz", short_txt: "Location-Based Quiz is a cross-platform mobile application developed based on Adobe PhoneGap. When the players are close to the questions created by the game makers, the quiz will be popped up and allows user to answer the nearest questions. These questions are stored in a database system and are manipulated (created, edited, deleted) by the game makers via another web GUI.",long_txt:"url",key: "JavaScript, PostGIS, Node.js, Leaflet.js, PhoneGap"},
{pic: "images/DB.jpg", title: "Database Structure for Guest House Agency service", short_txt: "The PostGIS database was designed for supporting web-based guest house agency service. Required information, such as hosts and guests details, room and buildings locations, rating and reservation information, are structured to store in both spatial and non-spatial database tables. Both conceptual and logical Entity Relationship (ER) diagrams were constructed. Moreover, the designed structure was tested by generating SQL queries to support the web-based service, such as \"How many and where are the available properties within the specific area and on specific date\". Note that, this project was a coursework in one of my master’s degree modules.",key: "PostGIS, SQL, Database Management",long_txt:"url"},
{pic: "images/overlay.jpg", title: "Python Script for Overlay Analysis", short_txt: "As one of the assignments in my master’s degree, the overlay analysis including point in polygon, line in polygon and polygon overlay was coded from scratch applying the object-oriented concept in order to determine the specific features (points, line and polygon) are inside, outside or on the specific boundary (a polygon). The script was developed based on ray casting algorithm. As well as solving the overlay problem, the program also allows user to draw and create spatial objects via the interactive chart",key: "Python, Numpy, object oriented programming",long_txt:"url"},
{pic: "images/QGIS_Network.jpg", title: "Location-Allocation problem in QGIS", short_txt: "Since QGIS, a famous open-source GIS package, seems to be not able to solve the location-allocation problem without any third-party plugin, this project proposes a python script to leverage QGIS in order to solve the problem. This script provides four options to compute location-allocation problem based on four different algorithms: Add algorithm (Feldman, Lehrer and Ray, 1966), Drop algorithm (Kuehn and Hamburger, 1963) and vertex substitution algorithms by Teitz and Bart (1968) and by Goodchild and Noronha (1983).",long_txt:"url",key: "Python, QGIS, Network Analysis, Location-allocation"},
{pic: "images/multimodal.jpg", title: "Multimodal Network Analysis", short_txt: "During my previous job at Esri Thailand, I did numerous commercial projects solving network analysis problem and building network dataset. One of the remarkable projects was the multimodal transport journey planner, which I constructed a multimodal transportation network in Thailand combining multiple types of transportation such as car, bus (road networks), plane, ferry, railway and subway.",long_txt:"url",key: "ArcGIS, Network Analysis, Multimodal Network"},
{pic: "images/arcpy.jpg", title: "ArcGIS customised tools by ArcPy", short_txt: "As requested by my previous customers, I developed a number of ArcPy customised tools in order to accomplish various tasks that the standard tools in ArcGIS or other GIS packages could not achieve effectively. For example, a tool creating shortest links from one dataset to other, a feature class updating automation tool and other sophisticated spatial analysis tools.",long_txt:"url",key: "ArcGIS, ArcPy, Python"},
{pic: "images/esri_cer.jpg", title: "Web GIS Server", short_txt: "I'm also well familiar with deploying WebGIS in enterprise level. I took part in several commercial projects implementing ArcGIS Server, Portal for ArcGIS and ArcGIS Online, which I usually did installation, configuration, generating map cache and transferring machines. Enterprise Administration Associate 10.3 (ESRI Technical certification of ArcGIS for Server), which I achieved only four months after I'd known the software, could guarantee my proficiency.",long_txt:"url",key: "GIS Server, ArcGIS for Server, Portal for ArcGIS, ArcGIS Online"},
];
var portfolio_container = document.getElementById("portfolio_container");

for (var i = 0; i < works.length; i++){
	var box = document.createElement("div");
	box.className = "mdl-cell mdl-card mdl-shadow--4dp portfolio-card";
	box.setAttribute("name", "work");
	
	var img_box = document.createElement("div");
	img_box.style.minHeight = "100px";
	img_box.className = "mdl-card__media";
	// var img = document.createElement("img");
	// img.className = "article-image";
	// img.setAttribute("src", works[i]["pic"]);
	// img.setAttribute("border", "0");
	// img_box.appendChild(img);
	
	
	var title = document.createElement("div");
	title.className = "mdl-card__title";
	var title_text = document.createElement("h4");
	title_text.className = "mdl-card__title-text"
	title_text.innerHTML = works[i]["title"];
	title_text.style.fontSize = "20px"
	title.appendChild(title_text);
	
	var body_text = document.createElement("div");
	body_text.className = "mdl-card__supporting-text";
	body_text.innerHTML = works[i]["short_txt"];
	body_text.style.textAlign = "justify";
	
	var footer_text = document.createElement("div");
	footer_text.className = "mdl-card__actions mdl-card--border";
	footer_text.innerHTML = "Key: " + works[i]["key"];
	footer_text.style.bottom = "0";
	footer_text.style.fontSize = "0.75rem"
	footer_text.setAttribute("name", "footer");
	
	box.appendChild(img_box);
	box.appendChild(title);
	box.appendChild(body_text);
	box.appendChild(footer_text);
	
	portfolio_container.appendChild(box);
}

var portfolio_child = document.getElementsByName("work");

for (var i = 0; i < portfolio_child.length; i++){
	var h = 0;
	var child = portfolio_child[i];
	var total_h = child.offsetHeight*1.0;
	var grand_chs = child.childNodes;
	for (var j = 0; j < grand_chs.length; j++){
		h += grand_chs[j].offsetHeight*1.0;
	}
	if (Math.abs(h - total_h) > 1.5 ){
		// console.log(child.getElementsByClassName("mdl-card__actions mdl-card--border")[0]);
		child.getElementsByClassName("mdl-card__actions mdl-card--border")[0].style.position = "absolute";
	}
	// var img_box = child.getElementsByClassName("mdl-card__media")[0];
	// var img = document.createElement("img");
	// img.className = "article-image";
	// img.setAttribute("src", works[i]["pic"]);
	// img.setAttribute("border", "0");
	// img_box.appendChild(img);
}
for (var i = 0; i < portfolio_child.length; i++){
	var child = portfolio_child[i];
	var img_box = child.getElementsByClassName("mdl-card__media")[0];
	var img = document.createElement("img");
	img.className = "article-image";
	img.setAttribute("src", works[i]["pic"]);
	img.setAttribute("border", "0");
	img_box.appendChild(img);
}