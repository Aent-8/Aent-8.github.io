---
title: "DreamVGGT: VGGT-Guided Generative Gaussian Splatting for Scene Customization"
collection: publications
category: conferences
permalink: /publication/dreamvggt/
excerpt: "VGGT-guided 3D Gaussian Splatting for single-image scene generation and controllable object editing."
date: 2026-01-01
venue: "IEEE International Conference on Multimedia & Expo (ICME) (submitted)"
meta_label: "Submitted in"
share: false
citation: "Ma, J., Liu, S., & Yang, T. (2026). DreamVGGT: VGGT-Guided Generative Gaussian Splatting for Scene Customization. Submitted to IEEE International Conference on Multimedia & Expo (ICME)."
---

**Authors:** Jiaqing Ma, Sixun Liu, Tianyu Yang

**Status:** Submitted.

**Abstract:** VGGT has demonstrated powerful performance in multi-view synthesis. However, existing diffusion-based 3D generation frameworks underutilize the explicit geometric structure provided by VGGT, leaving the generated 3D models without effective grounding. To address these challenges, we propose DreamVGGT, a unified framework that synergizes diffusion-based generation with explicit geometric–semantic guidance to achieve high-fidelity 3D model synthesis and editing from a single image. Specifically, we employ VGGT-guided initialization to ground the Score Distillation Sampling (SDS) process, followed by our proposed Uncertainty-aware Depth-Semantic-Point Optimization (U-DSPO) to strictly align Gaussians via adaptive uncertainty and boundary synergy. This yields a semantically explicit 3DGS representation that enables controllable object editing, including insertion, removal, and deformation. Experiments confirm effective object editing, enabling customizable simulation and training environments.

**Resources:** Manuscript available upon request | [Video](/files/videos/dreamvggt-demo.mp4)

<video controls preload="metadata" style="width: 100%; max-width: 960px;">
  <source src="/files/videos/dreamvggt-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
