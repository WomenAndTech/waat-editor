# W&&T-Editor

A novel and new way to create content for Women && Tech Interviews.

## Inspirations:
1. Medium.com editor and toolbar
2. Design Modo's "Quards" drag and drop style of adding 'components'

## Objectives:
(see [Slide](https://docs.google.com/a/peopleandcode.com/presentation/d/1hJKWTZeGmuJkGTuUbNRpOTl6iwSPs92xeEl6BXakrVY/edit?usp=sharing) for more info)

- Eliminate technical (developer) resources to publish an Interview/Article
- Require frontend developers only as needed to create/update/extend 'themes'/'components'
- Allow easier design driven interviews
- Author/Editor friendly
- Drag and drop 'components' for dynamic interview layouts

## Server Stuff
1. upload each individual 'component' file to the server
2. server registers new component to theme list
3. component is now available in editor's component menu upon reload

### Saving Interviews to server
1. Data should be saved to database as a serialzed object in JSON
2. Interviews should be compiled/rendered to flat *.html files for faster rendering and leveraging of CDN

### Notes:
1. NO server restart required after uploading new 'components' and or themes