---
layout: page
title: About
permalink: /about
---

`nc5ng` was started in 2017 to bring North American Datum Conversion tools to a broader developer audience. With a focus on historic datums for use with Historical Topographic maps, the US Standard Datum (`USSD`) in particular. 

Initially the project focus was documentation, porting the build pipeline, and low-level wrappers for the most direct manipulation and data analysis.

By 2018, the build pipeline for `NADCON5.0` was successfully ported to `GNU Make` and work on python wrappers and processing libraries was begun. The initial work is focused on completeing the data wrapper API, then recreating the build pipeline and output visualizations in python for on-the-fly transformations.

Project Goals:

- Adapt the existing programs to make it suitable for use as a stand-alone tool  in Continuous Integration / Continuous Deployment Data Processing Pipelines.

- Construct `proj.4` and `WKT` compatible datum definitions for inclusion of USSD and other datums into common GIS tools and spatial reference databases,

- Create Higher level wrappers and libraries for visualization, processing, and web integration

- Provide  utilties and pipeline for exporting grids, vectors, and coverage points to PostGIS and other GIS database and file formats.

- QGIS Plugin

- Examples and expanded documentation


This project is inspired by the [NADCON](https://www.ngs.noaa.gov/TOOLS/Nadcon/Nadcon.shtml) and [GEOCON](https://www.ngs.noaa.gov/GEOCON/)  project at the US National Geodetic Survey. The initial design of the project is based on the [NADCON5.0 Code Base](https://www.ngs.noaa.gov/NADCON5/index.shtml)


### Disclaimer

`nc5ng` and nc5ng.org have no affiliation with the US National Geodetic Survey, NOAA, or the US Government.

Any data provided in `nc5ng` or any sub- project is for research use only, absolutely no guarantee is made as to its validity or correctness.

Licensing information is provided in each project. Projects are provided unrestricted open source or public domain whenever possible. 

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This wwebpage is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.