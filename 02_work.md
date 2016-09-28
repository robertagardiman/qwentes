---
title: Work
permalink: "/work/"
images:
- image_path: "/img/work/work-09.jpg"
  title: PepsiCo Design & Innovation
- image_path: "/img/work/work-08.jpg"
  title: Mercedes-Benz Advanced Design
- image_path: "/img/work/work-07.jpg"
  title: Fendi Roma
- image_path: "/img/work/work-06.jpg"
  title: Emilio Pucci
- image_path: "/img/work/work-05.jpg"
  title: Zuhair Murad
layout: page
---

# {{ page.title }}

## We design & code for every screen

We develop products and services that help large and small companies innovate. We focus on the needs of brands and users, putting them at the center of beautiful mobile first experiences both browser based and native OS applications. 

These are some of the talented people we work with:






<div class="projects-list">
	{% for image in page.images %}
	{% assign value = forloop.lenght | modulo:2 %}
	<div class="project col-xs-12 col-sm-12 col-md-6">
		<img src="{{ image.image_path }}" alt="{{ image.title }}" />
		<h2>{{ image.title }}</h2>
	</div>
	{% if forloop.last == true %}
		<div class="clear"></div>
	{% endif %}
	{% endfor %}
</div>




Full reference list [here](#)