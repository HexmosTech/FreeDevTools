---
title: "YOLO Model - Train & Infer Vision Models | Online Free DevTools by Hexmos"
name: yolo
path: /freedevtools/tldr/common/yolo
canonical: "https://hexmos.com/freedevtools/tldr/common/yolo/"
description: "Train and infer vision models with YOLO. Quickly train object detection, segmentation, and classification models. Free online tool, no registration required."
category: common
keywords:
- YOLO object detection
- YOLO image segmentation
- YOLO model training
- YOLO model inference
- vision model training CLI
- object detection CLI tool
- image segmentation CLI tool
- classification model CLI
- YOLO configuration YAML
- ultralytics YOLO
features:
- Train object detection models using YOLO
- Infer objects in images and videos
- Train segmentation models with custom data
- Classify images using YOLO architectures
- Initialize YOLO configuration files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yolo

> Train, validate or infer models on various tasks and versions.
> More information: <https://docs.ultralytics.com/cli/>.

- Create a copy of the default configuration in your current working directory:

`yolo task=init`

- Train the object detection, instance segment, or classification model with the specified configuration file:

`yolo task={{detect|segment|classify}} mode=train cfg={{path/to/config.yaml}}`
