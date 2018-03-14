---
layout: page
title: About
permalink: /about
---

`nc5ng` was started in 2017 to bring North American Datum Conversion tools to a broader developer audience. With a focus on historic datums for use with Historical Topographic maps, the US Standard Datum (`USSD`) in particular. 

Initially the project has been focused on documentation, updating the build pipeline, and low-level wrappers for the most direct manipulation and data analysis.

Long Term Goals for the Project include:

- Adapt the existing programs to make it suitable for use as a stand-alone tool  in Continuous Integration / Continuous Deployment Data Processing Pipelines.

- Construct `proj.4` compatible datum definitions for inclusion of USSD and other datums into common GIS tools

- Higher level wrappers and libraries

- Construct and export pipeline for exporting grids, vectors, and coverage points to PostGIS and other GIS database and file formats.

- Examples and expanded documentation


This project is inspired by the [NADCON](https://www.ngs.noaa.gov/TOOLS/Nadcon/Nadcon.shtml) and [GEOCON](https://www.ngs.noaa.gov/GEOCON/)  project at the US National Geodetic Survey. The initial design of the project is based on the [NADCON5.0 Code Base](https://www.ngs.noaa.gov/NADCON5/index.shtml)


### Disclaimer

This `nc5ng` has no affiliation with the US National Geodetic Survey, NOAA, or the US Government.

Any data provided in any `nc5ng` project is for research use only, absolutely no guarantee is made as to its validity or correctness.

Licensing information is provided in each project. In general `nc5ng` strives to release projects open source or public domain whenever possible.