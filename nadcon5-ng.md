---
title: NADCON5-ng
layout: page
permalink: nadcon5ng.html
---

NADCON5-ng is a core component of the `nc5ng` . It is a fork of the upstream NADCON5.0 Source code with additional restructring and wrapping applied.

`NADCON5-ng` attempts to preserve, as much as possible, the computational pipeline of the upstream project.

Other projects 


## Components

 - `NADCON5.0` Build Tools (Fortran, from NGS)
 - `GNU Make` build sequencer, to generate the coordinate transformation files directly using NADCON5.0 binaries
 - `nc5ng` a wrapper library for `NADCON5.0`, currently supports `python` wrapping of all fortran subroutines and functions (not programs)
 - `Doxygen` Documentation


## Resources

1. [**Project Github**](https://github.com/nc5ng/nadcon5-ng) the primary source code repository and project tracker.
   - Use the [Github Issue Tracker](https://github.com/nc5ng/nadcon5-ng/issues) report problems, make requests/suggestions, and track project development
   - Use [Github Pull Requests](https://github.com/nc5ng/nadcon5-ng/pulls) to contribute code from your own development
   - Look at [Github Releases](https://github.com/nc5ng/nadcon5-ng/releases) to see all released binaries, data  builds, documentation (PDF)

2. [**Documentation Server**](https://docs.nc5ng.org/latest) the primary documentation server
   - All documentation, for both `NADCON5.0` source code and `nc5ng` contributions are documented here
   - Original Fortran code has been entirely documented in `Doxygen`
3. [**PyPi Python Package Repository**](https://pypi.python.org/pypi/nc5ng)