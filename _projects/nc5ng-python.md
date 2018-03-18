---
title: nc5ng-python
layout: page
blurb: "Python Wrapper for NADCON data and programs"
github: github.com/nc5ng/NADCON5-ng
---

A Python wrapper and API for the NADCON data and programs, this is the first layer of integration of NADCON5 data into other GIS projects and output formats. 


Currently this project resides within the `NADCON5-ng` codebase, because of the tight coupling between functionality and the NADCON5 source programs and data.

However the intent is to split the library  out once the library is more stable.



## Sub-Projects

1.  [`nc5ng.core`](#s-nc5ng-core)
2.  [`nc5ng.nc5data`](#s-nc5ng-data)

---

### <a id="s-nc5ng-core"></a>  Core Fortran Program Wrapper
**`nc5ng.core`**

A python interface wrapper around the fortran programs contained in nadcon5-ng

Also serves as a python interface to the build process itself (with appropriate fortran compiler and gmt tools), this allows scripting of the building specific output grids and intermediate data programatically through python


---

###  <a id="s-nc5ng-data"></a>  Data API
**`nc5ng.nc5data`**
 
A tightly coupled data extraction API around the fixed-format NADCON5 data files. No file generation is handled through this api, simply a wrapper for the data created using either the `Make` build system of `NADCON5-ng` or using `nc5ng.core`.

The API features the following

- Automated loading of pre-cimpiled conversion output and input data by region, source and target datum
- Search and filter the complete dataset by PID, coordinate range, outlier status input region, or any other column present in any of the fixed format input data 
- Memory caching cheese-ball database
- (*incomplete*) GIS export to OGR, PostGIS, etc.


