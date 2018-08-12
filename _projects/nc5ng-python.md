---
title: nc5ng-python
layout: page
blurb: "Python Wrapper for NADCON data and programs"
github: github.com/nc5ng/NADCON5-ng
---

A project to deliver NADCON datum transformation data to python processing pipelines and graphing utilities.

`nc5ng-python` is developed across several source packages, but the complete distribution can be installed directly through using python package index tool `pip`

`pip install nc5ng`

Which will fetch all the internal packages and build the distribution.



## Sub-Projects

To facilitate development across multiple domains `nc5ng` serves as a meta-package
that installs all currently released utilities

1.  [`nc5ng-core`](#s-nc5ng-core)
2.  [`nc5ng-common`](#s-nc5ng-common)

---

### <a id="s-nc5ng-core"></a>  Core NADCON Wrapper
**`nc5ng-core`**

A python distribution of the nc5ng code base and data. Several tightly coupled  libraries are
released under this package.


**`nc5ng.core` :**

Python interfaces to the underlying fortran programs in `nadcon5-ng`


**`nc5ng.nc5data`:**


A tightly coupled data extraction API around the fixed-format NADCON5 data files. No file generation is handled through this api, simply a wrapper for the data created using either the `Make` build system of `NADCON5-ng` or using `nc5ng.core`.

The API features:

- Automated loading of pre-compiled conversion data by region, source, and target datum
- Search and filter the complete dataset by PID, coordinate range, outlier status, input region, and other meta-data 
- Memory caching "cheese-ball" database
- (*incomplete*) GIS export to OGR, PostGIS, etc.


**`nc5ng.build`:**  *(PLANNED)*

A python wrapper of the NADCON build process and data compiling (with appropriate fortran compiler and gmt tools), this allows scripting of the building specific output grids and intermediate data programatically through python, and will serve as a build cache.



### <a id="s-nc5ng-common"></a>  Common utilities and data types
**`nc5ng-common`**

Common types internal to nc5ng for export to  standard outside tools

 - `GMT/Python`
 - `GDAL`
 - `numpy`
 - `scipy`



## Important Links

**Github Projects:**
  - `nc5ng-core` [github.com/nc5ng/nadcon5-ng](https://www.github.com/nc5ng/nadcon5-ng)
  - 'nc5ng-common` [github.com/nc5ng/nc5ng-python-common](https://www.github.com/nc5ng/nc5ng-python-common)
  - 'nc5ng-python' top level package [github.com/nc5ng/nc5ng-python](https://www.github.com/nc5ng/nc5ng-python)

**Documentation:**

  - `nc5ng-python` Top Level Documentation [py.docs.nc5ng.org](https://py.docs.nc5ng.org/en/latest)




