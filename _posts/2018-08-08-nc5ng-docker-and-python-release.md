---
layout: post
title:  "New nc5ng-python Library and Development Docker Images Released"
date: 2018-08-08 18:00:00 -0800
author: AS
categories: anouncement
---

Released of a new python package to pypi and a related docker image for evaluation and development of nc5ng-python

The `nc5ng-python` project has released the first development version of  `nc5ng-core-0.0.3` to pypi. It can be installed via pip on any python3 system. `pip install nc5ng-core`. The previous package `nc5ng` is deprecated and will be re-used in the future for a meta-package

This library wraps compiled conversion data and NGS `NADCON5.0` input data in a library that allows for further processing and direct visualization via `GMT/Python`

As this is an Alpha release with dependencies on `nadcon5-ng`, to encourage early evaluation, a docker project for `nc5ng` projects has been started, the first image  containing `nc5ng-core 0.0.3` is released in conjunction with the release of the develooment version of `nc5ng-core`

For more information on `nc5ng-python` see the [Project Page](/projects/nc5ng-python) and [NADCON5-ng Project Page](/projects/nadcon5-ng). For more information on the docker image see the [Project Page](/projects/nc5ng-docker)



> ![Plotting Coverage Data using `nc5ng-python`](/assets/img/nc5ng-docker/anouncement.png){:class="img-responsive"}
