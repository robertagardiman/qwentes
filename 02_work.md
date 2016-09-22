---
layout: page
title: Work
permalink: /work/
---

## We design & code for every screen

We develop products and services that help large and small companies innovate. We focus on the needs of brands and users, putting them at the center of beautiful mobile first experiences both browser based and native OS applications. 

These are some of the talented people we work with:

<div class="projects-list">
	{% directory path: img/work reverse: true %}
	<div class="project">
		<img src="{{ file.url }}" alt="{{ file.name }}" datetime="{{ file.date | date_to_xmlschema }}" />
        {% for post in site.posts offset:forloop.index0 limit:1 %}
        	<h2>{{ post.title }}</h2>
        {% endfor %}
	</div>
	{% enddirectory %}
    

</div>

Full reference list [here](#)