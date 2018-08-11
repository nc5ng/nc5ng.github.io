---
title: nc5ng-docker
layout: page
blurb: "Docker Image for nc5ng-python and NADCON5-ng"
github: github.com/nc5ng/nc5ng-docker
---

A docker image project that contains `nc5ng-python` packages and `nadcon5-ng` datasets in a single container. Based on the `gmt-docker` images ([Project Page](/projects/gmt-docker))

To use the latest docker image running a jupyter python notebook server

```
docker run -p "8888:8888" nc5ng/nc5ng
```

Use the provided token to login to the Jupyter notebook at `127.0.0.1:8888` and follow the `Example-nc5ng.ipynb` Notebook

A sample conversion is provided in the image, and the sample notebook should allow you to plot coverage points from the sample conversion data on top of a `gmt` basemap.

> ![Plotting Coverage Data using `nc5ng-python`](/assets/img/nc5ng-docker/anouncement.png){:class="img-responsive"}


Important Links
---------------

- [Github Project](https://www.github.com/nc5ng/nc5ng-docker)
- [Dockerhub Portal](https://hub.docker.com/r/nc5ng/nc5ng)
