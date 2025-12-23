# DoomScrolling for Coders

**Last updated:** 24 December 2025
**Project status:** Not continued

---

## Overview

DoomScrolling for Coders was a product concept designed to transform short-form video consumption into a focused, topic-driven learning experience. Instead of exposing users to random or engagement-optimized content, the platform aimed to deliver a curated vertical feed of short videos aligned with each user’s technical interests and goals.

The objective was to provide the familiarity and usability of modern short-video interfaces while maintaining control over content relevance, presentation, and user flow.

---

## Intended Architecture

**Frontend:** Next.js
**Backend:** Express

**High-level workflow:**

1. The backend maintains a catalog of short-form video identifiers mapped to specific topics.
2. Users select or are assigned topic preferences.
3. The backend returns a personalized list of video identifiers based on those preferences.
4. The frontend renders those videos inside a custom, vertically scrolling feed.

The product was designed to feel native and cohesive, independent of the original hosting platforms.

---

## Technical Constraints

The implementation required the use of third-party embedded video players in order to display externally hosted short-form videos. These embedded players introduce several non-negotiable limitations:

* The visual and interaction layer (controls, overlays, branding, navigation elements) is owned and enforced by the video platform.
* The application cannot reliably remove, restyle, or suppress these interface elements.
* User navigation can be redirected away from the product and back into the original platform.
* Video delivery cannot be optimized through application-level caching, chunking, or stream control.
* Playback behavior and lifecycle are governed by the embedded player, not the application.

These limitations made it impossible to achieve a consistent, controlled, and distraction-free feed experience.

---

## Product Impact

The core value proposition of DoomScrolling for Coders was full control over:

* Content relevance
* Presentation and layout
* User flow and retention
* Performance and delivery

Relying on embedded players for video playback removed control over all of these critical dimensions. The resulting experience would be visually inconsistent, technically constrained, and structurally dependent on external platforms, directly conflicting with the original product vision.

---

## Reason for Discontinuation

Because the platform could not deliver the required level of interface control, performance optimization, or user-experience consistency, the project could not be implemented in a viable or sustainable way.

As a result, development was halted.

---

## Status

This project is not continued beyond its last update on **24 December 2025**. The repository remains as a record of the concept, design direction, and technical exploration.
