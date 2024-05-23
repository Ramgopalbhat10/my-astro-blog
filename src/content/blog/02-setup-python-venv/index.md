---
title: "Setup a virtual environment in Python"
description: "How to setup a virtual environment in Python using venv and use it to as a containerized environment"
date: "May 23 2024"
---

The `venv` is a package that comes bundles during the python installation which supports creating lightweight "virtual environments", each with their own independent set of python packages installed in their site directories.

#### 1. Creating virtual environments
Creation of virtual environments is done by executing the command `venv`.
```bash
python3 -m venv <venv-name>
```

#### 2. Activate it
After creating, we need to activate it before we start using it.
```bash
source <venv-name>/bin/activate
```

#### 3. Installing packages
Now we can install any dependencies required for the project using `pip`.
```bash
python -m pip install <package-name>
```