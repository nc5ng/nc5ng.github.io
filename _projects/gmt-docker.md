---
title: gmt-docker
layout: page
blurb: "Docker Image with Latest GMT Tools, DCW, and GSHHG Data"
github: github.com/nc5ng/gmt-docker
---

`gmt-docker` is docker image project that provides latest GMT Builds, DCW and GSHHG Data pre-installed. Standard extensions with pre-installed versions of `GMT/Python` and `jupyter` notebook are provided for the convenience of the developer community

To use the latest docker image from your machine

```
docker run nc5ng/gmt --version
```

A specific version and revision can be used instead,

```
docker run nc5ng/gmt:6.0.0_r20005 --version
```

To use `gmt` with `GMT/Python` in a `jupyter` notebook

```
docker run nc5ng/gmt:jupyter
```

Specific versions and revisions are provided as well for evaluation and comparison.


### Table of Contents

1. [Introduction](#s-intro)
2. [Tutorial](#s-tutorial)
3. [Important Links](#s-links)

Introduction {#s-intro}
------------

---
Docker containers provide a convenient way to use different versions of GMT Tools easily, and to evaluate development versions without needing to pollute the local system with complex build requirements. Images integrate well into many Continuous Integration/Continuous Deployment pipelines and allow you to use latest GMT builds as part of your automated data processing or build pipeline.

`nc5ng.org` maintains precompiled images with latest Trunk GMT code, Up to date DCW Boundary Data and GSHHG Coastal Data pre-downloaded. Releases with stable versions are also avaialable based on tagged releases.


Tutorial {#s-tutorial}
--------

---

A quick tutorial for evaluating gmt in a sandboxxed environment, with visualization courtest of `GMT/Python` and `jupyter` notebook

1. Start the `gmt-docker` jupyter image on the standard port `8888`
   ```
	$ docker run -p "8888:8888" nc5ng/gmt:jupyter
   ```

2. Copy the token printed in the log message and navigate to the url
   ```
	http://127.0.0.1:8888/?token=TOKEN_HERE
	```

3. You will see the built-in example notebook listed in the directory
   
   >![Notebook List](/assets/img/gmt-docker/gmt-jupyter-example1.png){:class="img-responsive"}

4. Open the Example Notebook by clicking on it
   
   >![Example.ipynb](/assets/img/gmt-docker/gmt-jupyter-example2.png){:class="img-responsive"}

5. Run through the notebook to get the example plot. A map of
   the contiguous state of the USA with rivers, lakes, state and
   national boundaries, and the geographic center of the contiguous states marked.
   
   >![Example.ipynb](/assets/img/gmt-docker/gmt-jupyter-example3.png){:class="img-responsive"}




From here you can proceed to execute `GMT/Python` commands in the example notebook.

To save your work externally, or to import other notebooks and packages additional knowledge of docker functionality is needed. For some examples see the [Readme](https://www.github.com/nc5ng/gmt-docker)




Important Links {#s-links}
---------------

---

- [Github Project](https://www.github.com/nc5ng/gmt-docker)
- [Dockerhub Portal](https://hub.docker.com/r/nc5ng/gmt)
