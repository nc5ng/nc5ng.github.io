---
layout: post
title:  "New Release with Initial Python Wrappers"
date:   2017-11-20 18:39:56 -0600
author: AS
categories: anouncement
---

`nadcon5-ng` has made its first step into new interfaces. `nadcon5-ng` has an initial set of python wrappers, using the [`f2py`](https://linux.die.net/man/1/f2py) - Fortran to Python interface generator.

`f2py` was chosen over a `cython` approach for the time being, as it allows cleaner seperation between the fortran and python code. In the Future, a dedicated cython implementation is still being considered. 

Currently, subroutines and functions from the NADCON5 source base have been added and tested. These can be installed direc

Python Documentation is not yet provided. Installation of the new library is acheived with

`pip install nc5ng`

The source packages are compiled locally, and are [hosted on `pypi`](https://pypi.python.org/pypi/nc5ng/). Binary packages not yet available







